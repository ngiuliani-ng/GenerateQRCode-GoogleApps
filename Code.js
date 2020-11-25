function GenerateQRCode(size, data) {
    var qrcode = null;

    try {

        var response = UrlFetchApp.fetch('https://api.qrserver.com/v1/create-qr-code/?size=' + size + '&data=' + data);

        Logger.log('Function: GenerateQRCode - Response Code: ' + response.getResponseCode());

        return qrcode = response.getBlob();

    } catch (e) {

        Logger.log('Function: GenerateQRCode - Error: ' + e);

        throw e;

        return qrcode;

    }
};
