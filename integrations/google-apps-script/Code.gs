/**
 * Webhook de leads do MoneySystem.
 *
 * 1. Abra Extensões > Apps Script na planilha de leads.
 * 2. Substitua o código atual por este arquivo.
 * 3. Opcional: em Configurações do projeto > Propriedades do script, crie
 *    LEAD_WEBHOOK_SECRET com o mesmo valor usado na Vercel.
 * 4. Implante uma nova versão do Web App mantendo o acesso necessário.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    var data = JSON.parse(e.postData.contents || "{}");
    var expectedSecret =
      PropertiesService.getScriptProperties().getProperty(
        "LEAD_WEBHOOK_SECRET"
      );

    if (expectedSecret && data.secret !== expectedSecret) {
      return jsonResponse_({ ok: false, error: "unauthorized" });
    }

    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var submissionId = cleanCell_(data.submission_id || "");

    // A nona coluna guarda o identificador único. Assim, uma tentativa repetida
    // depois de timeout não cria duas linhas para o mesmo lead.
    if (submissionId && sh.getLastRow() > 0) {
      var existing = sh
        .getRange(1, 9, sh.getLastRow(), 1)
        .createTextFinder(submissionId)
        .matchEntireCell(true)
        .findNext();

      if (existing) {
        return jsonResponse_({
          ok: true,
          duplicate: true,
          submission_id: submissionId,
        });
      }
    }

    var attribution = data.attribution || {};

    // As oito primeiras colunas preservam o contrato da planilha existente.
    sh.appendRow([
      new Date(),
      cleanCell_(data.nome || ""),
      cleanCell_(data.whatsapp || ""),
      cleanCell_(data.whatsapp_formatado || ""),
      cleanCell_(data.possui_filiais || ""),
      cleanCell_(data.emite_nf || ""),
      cleanCell_(data.fonte || ""),
      cleanCell_(data.user_agent || ""),
      submissionId,
      cleanCell_(attribution.utm_source || ""),
      cleanCell_(attribution.utm_medium || ""),
      cleanCell_(attribution.utm_campaign || ""),
      cleanCell_(attribution.utm_content || ""),
      cleanCell_(attribution.utm_term || ""),
      cleanCell_(attribution.gclid || ""),
      cleanCell_(attribution.fbclid || ""),
      cleanCell_(attribution.msclkid || ""),
      cleanCell_(attribution.referrer || ""),
      cleanCell_(attribution.landing_url || ""),
    ]);

    return jsonResponse_({
      ok: true,
      submission_id: submissionId,
    });
  } catch (err) {
    return jsonResponse_({
      ok: false,
      error: "request_failed",
    });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

function cleanCell_(value) {
  var text = String(value)
    .replace(/[\u0000-\u001f\u007f-\u009f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 1000);

  if (/^[=+\-@]/.test(text)) {
    return "'" + text;
  }

  return text;
}

function jsonResponse_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
