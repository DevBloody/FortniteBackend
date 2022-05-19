module.exports = (application, fs) => {
    application.all("/fortnite/api/game/v2/profile/:accountId/*/:command", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        var profileID = req.query.profileId;
        var rvn = req.query.rvn;
        var retJSON = {
            profileRevision: rvn + 1,
            profileId: profileID,
            profileChangesBaseRevision: 1,
            profileChanges: [],
            profileCommandRevision: 1,
            serverTime: new Date(),
            responseVersion: 1
        }
        res.json(retJSON)
    })
}