
module.exports = (application, fs) => {
    application.post("/fortnite/api/game/v2/grant_access/*", (req, res) => {
        res.json({});
        res.status(204);
        res.end();
    })
    application.get("/fortnite/api/game/v2/enabled_features", (req, res) => {
        res.json([])
    })
    application.get("/fortnite/api/matchmaking/session/findPlayer/:id", (req, res) => {
        res.json([])
    })
    application.post("/datarouter/api/v1/public/data", (req, res) => {
        res.status(204).end();
    });
    application.get('/fortnite/api/storefront/v2/keychain', async (req, res) => {

        res.json(["5E15C5486CE8E539552D4D3E7682F9E2:+L/tTz+woDFZJEvtxfq8m8tNI1R72sYK7rnYr7sHTis=:EID_TeamRobot"]);
        res.status(200);
    })
    application.get("/fortnite/api/v2/versioncheck/*", (req,res) => {
        res.json({
            "type": "NO_UPDATE"
        })
    })
    application.get("/fortnite/api/v2/versioncheck/*", (req,res) => {
        res.json({
            "type": "NO_UPDATE"
        })
    })
    application.get("/fortnite/api/v2/versioncheck/*", (req,res) => {
        res.json({
            "type": "NO_UPDATE"
        })
    })
}