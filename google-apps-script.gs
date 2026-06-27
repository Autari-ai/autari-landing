/**
 * autari survey  ->  Google Sheet
 * ---------------------------------------------------------------------------
 * Turnkey: you do NOT need to create header columns yourself. On the first
 * submission this script writes the header row automatically from the payload
 * keys, and it adds a new column if a future payload ever introduces a new key.
 *
 * SETUP (one time, ~2 minutes — only you can do this in your Google account):
 *   1. Create a Google Sheet (blank is fine).
 *   2. Extensions  ->  Apps Script. Delete the placeholder, paste this whole file.
 *   3. Click Deploy  ->  New deployment  ->  type "Web app".
 *        - Description: autari survey
 *        - Execute as:  Me
 *        - Who has access:  Anyone
 *   4. Authorize when prompted. Copy the Web app URL (ends in /exec).
 *   5. Put it in autari-landing/.env.local:
 *        NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
 *   6. Restart `npm run dev`. Submissions now append rows. Done.
 *
 * Columns it will create, in order:
 *   submittedAt | role | firm | size | who | hours | cost | pain | tried | trust | email
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    var headers;
    if (sheet.getLastRow() === 0) {
      // First ever submission — create the header row from the payload keys.
      headers = Object.keys(data);
      sheet.appendRow(headers);
    } else {
      headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      // Grow the header row if a new key shows up later.
      var added = false;
      Object.keys(data).forEach(function (k) {
        if (headers.indexOf(k) === -1) {
          headers.push(k);
          added = true;
        }
      });
      if (added) {
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      }
    }

    var row = headers.map(function (h) {
      return data[h] !== undefined && data[h] !== null ? data[h] : "";
    });
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the /exec URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput("autari survey endpoint is live.");
}
