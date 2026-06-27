/**
 * autari — ONE endpoint for BOTH the partners form and the autari.co.uk survey.
 * ---------------------------------------------------------------------------
 * Paste this into your EXISTING partners Apps Script project (the one bound to
 * your partners spreadsheet) and re-deploy a NEW VERSION of the existing
 * deployment — that keeps the same /exec URL.
 *
 *   - Partner applications (old behaviour) -> appended to the first/active sheet,
 *     exactly as before. Nothing about the partners form changes.
 *   - Survey responses (from autari.co.uk) -> appended to a "Survey" tab, which
 *     this script creates with its own header row automatically and grows if new
 *     fields ever appear.
 *
 * How it tells them apart: survey payloads carry a `role` field (or `form:"survey"`);
 * partner payloads do not.
 *
 * RE-DEPLOY (keep the same URL):
 *   Deploy -> Manage deployments -> pencil/Edit on the existing deployment ->
 *   Version: New version -> Deploy. (Do NOT pick "New deployment" — that mints a
 *   different URL.)
 *   Then open the /exec URL in a browser: it should say
 *   "autari survey endpoint is live."
 */

var SURVEY_SHEET_NAME = "Survey";

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);

    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    var isSurvey = data.role !== undefined || data.form === "survey";

    if (isSurvey) {
      appendDynamic_(ss, SURVEY_SHEET_NAME, data);
      return json_({ ok: true });
    }

    // --- Original partners behaviour, unchanged ---
    var sheet = ss.getActiveSheet();
    sheet.appendRow([
      new Date().toISOString(),
      data.name,
      data.email,
      data.phone || "",
      data.company || "",
      data.expertise,
      data.heardAboutUs || "",
      data.message || "",
    ]);
    return json_({ status: "success" });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Appends to a named tab, creating it + a header row from the payload keys,
// and adding any new columns that show up later.
function appendDynamic_(ss, sheetName, data) {
  var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  var headers;

  if (sheet.getLastRow() === 0) {
    headers = Object.keys(data);
    sheet.appendRow(headers);
  } else {
    headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
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
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

// Lets you open the /exec URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput("autari survey endpoint is live.");
}
