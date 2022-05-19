const { application } = require("express");
const request = require("request")
module.exports = (application, fs) => {
    application.get("/fortnite/api/cloudstorage/system", (req, res) => {
        res.setHeader('content-type', 'application/json');
        res.json([{
            "uniqueFilename": "DefaultGame.ini",
            "filename": "DefaultGame.ini",
            "hash": "603E6907398C7E74E25C0AE8EC3A03FFAC7C9BB4",
            "hash256": "973124FFC4A03E66D6A4458E587D5D6146F71FC57F359C8D516E0B12A50AB0D9",
            "length": fs.readFileSync("./Backend/cloudstorage/DefaultGame.ini").length,
            "contentType": "text/plain",
            "uploaded": "9999-9999-9999",
            "storageType": "S3",
            "doNotCache": false
        }])
        res.status(200);
    })
    application.get("/fortnite/api/cloudstorage/system/DefaultGame.ini", (req, res) => {
        res.json([])
        res.status(200)
    })
    application.get("/fortnite/api/cloudstorage/system/config", (req,res) => {
		res.setHeader('content-type', 'application/json');
		res.json([]);
		res.status(200);
	})
	application.get("/fortnite/api/cloudstorage/user/:accountId", (req, res) => {
		res.json([])
	})
}