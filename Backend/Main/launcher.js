const axios = require("axios")
module.exports = (application, fs) => {
    application.get("/launcher/api/public/distributionpoints/", (req, res) => {
        res.json({
            "distributions": [
                "https://download.epicgames.com/",
                "https://download2.epicgames.com/",
                "https://download3.epicgames.com/",
                "https://download4.epicgames.com/",
                "https://epicgames-download1.akamaized.net/"
            ]
        })
    })
    application.get("/launcher/api/public/assets/:platform/:catalogItemId/:appName", async (req, res) => {
        // grabs token
        const token = (await axios.post("https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token", "grant_type=client_credentials", { headers: { "Content-Type": "application/x-www-form-urlencoded", Authorization: "Basic M2Y2OWU1NmM3NjQ5NDkyYzhjYzI5ZjFhZjA4YThhMTI6YjUxZWU5Y2IxMjIzNGY1MGE2OWVmYTY3ZWY1MzgxMmU=" } })).data.access_token;
        // then does stuff :)
        axios.get("https://launcher-public-service-prod06.ol.epicgames.com" + req.url, {
            headers: {
                authorization: "bearer " + token
            }
        }).then(response => {
            res.json(response.data)
        })
    });   
}