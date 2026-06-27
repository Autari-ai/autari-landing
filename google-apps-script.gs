/**
 * autari survey  ->  the SAME Google Sheet you use for the partners form
 * ---------------------------------------------------------------------------
 * Writes survey responses into a dedicated "Survey" TAB of your existing
 * partners spreadsheet, so everything lives in one file without clashing with
 * the partners form's columns. Turnkey: it creates the tab and the header row
 * automatically on the first submission, and grows the headers if new keys
 * ever appear.
 *
 * SETUP (one time, ~3 minutes — only you can do this in your Google account):
 *   1. Open your existing partners Google Sheet. Copy its ID from the URL:
 *        https://docs.google.com/spreadsheets/d/<THIS_IS_THE_ID>/edit
 *   2. Paste that ID into SPREADSHEET_ID below.
 *   3. Go to https://script.google.com  ->  New project. Paste this whole file.
 *      (A standalone script — do NOT edit the partners' bound script, so its
 *       form keeps working untouched.)
 *   4. Deploy  ->  New deployment  ->  type "Web app":
 *        - Execute as:  Me
 *        - Who has access:  Anyone
 *   5. Authorize when prompted (it needs access to your spreadsheet). Copy the
 *      Web app URL (ends in /exec).
 *   6. Put it in autari-landing/.env.local:
 *        NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
 *   7. Restart `npm run dev`. Survey responses now append to the "Survey" tab.
 *
 * Columns it creates, in order:
 *   submittedAt | role | firm | size | who | hours | cost | pain | tried | trust | email
 */

// ---- Fill these in ----
var SPREADSHEET_ID = "PASTE_YOUR_PARTNERS_SPREADSHEET_ID_HERE";
var SHEET_NAME = "Survey"; // tab name inside that spreadsheet (created if missing)
// -----------------------

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
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
