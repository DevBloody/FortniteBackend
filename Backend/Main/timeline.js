module.exports = (application, fs) => {
    application.get("/fortnite/api/calendar/v1/timeline", function (req, res) {
		var athenaseason
		if (req.headers["user-agent"]) {
			try {
				athenaseason = req.headers["user-agent"].split("-")[1].split(".")[0]
			} catch {
				athenaseason = 4
			}
		} else athenaseason = 4

		res.json({
			"channels": {
				"standalone-store": {},
				"client-matchmaking": {},
				"tk": {},
				"featured-islands": {},
				"community-votes": {},
				"client-events": {
					"states": [{
						"validFrom": "2020-05-21T18:36:38.383Z",
						"activeEvents": [
							{
								"eventType": `EventFlag.LobbySeason${athenaseason}`,
								"activeUntil": "9999-12-31T23:59:59.999Z",
								"activeSince": "2019-12-31T23:59:59.999Z"
							},
							{
								"eventType": `AL02`,
								"activeUntil": "2022-12-12T09:00:00.000Z",
								"activeSince": "2019-12-31T23:59:59.999Z"
							}
						],
						"state": {
							"activeStorefronts": [],
							"eventNamedWeights": {},
							"activeEvents": [],
							"seasonNumber": athenaseason,
							"seasonTemplateId": `AthenaSeason:athenaseason${athenaseason}`,
							"matchXpBonusPoints": 0,
							"eventPunchCardTemplateId": "",
							"seasonBegin": "9999-12-31T23:59:59.999Z",
							"seasonEnd": "9999-12-31T23:59:59.999Z",
							"seasonDisplayedEnd": "9999-12-31T23:59:59.999Z",
							"weeklyStoreEnd": "9999-12-31T23:59:59.999Z",
							"stwEventStoreEnd": "9999-12-31T23:59:59.999Z",
							"stwWeeklyStoreEnd": "9999-12-31T23:59:59.999Z",
							"dailyStoreEnd": "9999-12-31T23:59:59.999Z"
						}
					}],
					cacheExpire: "9999-12-31T23:59:59.999Z"
				}
			},
			cacheIntervalMins: 15,
			currentTime: new Date()
		})
	});
}