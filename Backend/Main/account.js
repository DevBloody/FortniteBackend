
module.exports = (application, fs) => {
    application.get("/account/api/public/account/:accountId", async (req, res) => {
        res.json({
            "id": req.params.accountId,
            "displayName": req.params.accountId,
            "name": req.params.accountId,
            "email": req.params.email,
            "failedLoginAttempts": 0,
            "lastLogin": new Date().toISOString(),
            "numberOfDisplayNameChanges": 0,
            "ageGroup": "UNKNOWN",
            "headless": false,
            "country": "US",
            "lastName": "User",
            "preferredLanguage": "en",
            "canUpdateDisplayName": false,
            "tfaEnabled": false,
            "emailVerified": true,
            "minorVerified": false,
            "minorExpected": false,
            "minorStatus": "UNKNOWN"
        })
    })
    application.get("/account/api/public/account", async (req, res) => {
        res.json(
            [{
                "id": req.query.accountId,
                "displayName": req.query.accountId,
                "externalAuths": {}
            },]
        )
    })
    application.get("/account/api/public/account/displayName/:username", async (req, res) => {
        res.json(
            [{
                "id": req.query.accountId,
                "displayName": req.query.username,
                "externalAuths": {}
            },]
        )
    })

}