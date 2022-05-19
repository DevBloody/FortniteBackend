const crypto = require("crypto")
module.exports = (application, fs) => {
    application.get("/account/api/oauth/verify", async (req, res) => {
        res.json({
            "token": "Test123",
            "session_id": "3c3662bcb661d6de679c636744c66b62",
            "token_type": "bearer",
            "client_id": "Test123",
            "internal_client": true,
            "client_service": "fortnite",
            "account_id": "Argon",
            "expires_in": 28800,
            "expires_at": "9999-12-02T01:12:01.100Z",
            "auth_method": "exchange_code",
            "display_name": req.fortniteporn,
            "app": "fortnite",
            "in_app_id": "Test123",
            "device_id": "Test123"
        })
    })
    application.get("/account/api/oauth/verify", (req, res) => {
        res.status(204).end()
    })

    // kill
    application.delete("/account/api/oauth/sessions/kill/*", async (req, res) => {
        res.status(204);
        res.end();
    });

    // login and stuff
    application.post("/account/api/oauth/token", async (req, res, next) => {
        const grab = req.body.grant_type
        var displayName = "";
        var accountId = "";
        if (grab == "client_credentials") {
            displayName = undefined;
            accountId = undefined;
        }
        if (grab == "password") {
            if (!req.body.username) {
                throw new ApiException(errors.com.epicgames.common.oauth.invalid_request).with("username")
            }
            if (req.body.username.includes("@")) {
                displayName = req.body.username.split("@")[0]
            } else {
                displayName = req.body.username;
            }

            accountId = displayName.replace(/ /g, "_");
        }
        if (grab == "authorization_code") {
            console.log("authorization_code")
        }
        if (grab == "device_auth") {
            console.log("device_auth")
        }
        if (grab == "exchange_code") {
            displayName = req.body.exchange_code;
            accountId = req.body.exchange_code;

        } else {
            console.log("unsupported_grant_type")
        }
        res.json({
            access_token: crypto.randomBytes(16).toString("hex"),
            expires_in: 28800,
            expires_at: "9999-12-31T23:59:59.999Z",
            token_type: "bearer",
            account_id: accountId,
            client_id: "ec684b8c687f479fadea3cb2ad83f5c6",
            internal_client: true,
            client_service: "fortnite",
            displayName: displayName,
            app: "fortnite",
            in_app_id: accountId,
            device_id: "5dcab5dbe86a7344b061ba57cdb33c4f"
        });
    });
}