var config = {
	endpoint: "https://my-app-test.documents.azure.com:443/",
	authKey: "ab4hLOyRMXtM9mTDXgUsiWjEPZqjALSW2jdB1nCbytrrRDP4yn0CTiF4hnFM5WrbkEU39z8WNHeMny0UwGiCkg==",
	database: {
		"id": "TestDB"
	},
	collection: {
		"id": "TestColl",
		"partitionKey": { "paths": ["/district"], "kind": "Hash" }
	},
	documents: {
		"Andersen": {
			"id": "Anderson.1",
			"lastName": "Andersen",
			"district": "WA5",
			"parents": [{
				"firstName": "Thomas"
			}, {
					"firstName": "Mary Kay"
				}],
			"children": [{
				"firstName": "Henriette Thaulow",
				"gender": "female",
				"grade": 5,
				"pets": [{
					"givenName": "Fluffy"
				}]
			}],
			"address": {
				"state": "WA",
				"county": "King",
				"city": "Seattle"
			}
		},
		"Wakefield": {
			"id": "Wakefield.7",
			"district": "NY23",
			"parents": [{
				"familyName": "Wakefield",
				"firstName": "Robin"
			}, {
					"familyName": "Miller",
					"firstName": "Ben"
				}],
			"children": [{
				"familyName": "Merriam",
				"firstName": "Jesse",
				"gender": "female",
				"grade": 8,
				"pets": [{
					"givenName": "Goofy"
				}, {
						"givenName": "Shadow"
					}]
			}, {
					"familyName": "Miller",
					"firstName": "Lisa",
					"gender": "female",
					"grade": 1
				}],
			"address": {
				"state": "NY",
				"county": "Manhattan",
				"city": "NY"
			},
			"isRegistered": false
		}
	}
};

module.exports = config;