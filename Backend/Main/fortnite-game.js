const { application } = require("express");
const request = require("request")
module.exports = (application, fs) => {
   application.get("/content/api/pages/fortnite-game", (req,res) => {
    request("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game", function(error, response){
        res.json(JSON.parse(response.body))
    })
   })
}