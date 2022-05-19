module.exports = (application, fs) => {
    application.get("/lightswitch/api/service/bulk/status", async (req, res) => {
        res.json(
            [{
                "serviceInstanceId": "fortnite",
                "status": "UP",
                "message": "servers up.",
                "maintenanceUri": null,
                "overrideCatalogIds": [
                    "a7f138b2e51945ffbfdacc1af0541053"
                ],
                "allowedActions": [
                    "PLAY",
                    "DOWNLOAD"
                ],
                "banned": false,
                "launcherInfoDTO": {
                    "appName": "Fortnite",
                    "catalogItemId": "4fe75bbc5a674f4f9b356b5c90567da5",
                    "namespace": "fn"
                }
            }]
        )
    })
    application.all("/waitingroom/api/waitingroom", (req, res) => {
        res.status(204).end();
    });
}