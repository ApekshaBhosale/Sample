export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		//use async-await or promises
		return Api3.run();
	},
	getData: () => {
		return "some fun string";
	},
	showData: () => {
		return "show some data!";
	},
		fetchData: () => {
		return Api1.run();
	},
	fetchJSONData : () => {
		return {
  		"name": "John",
  		"date_of_birth": "20/02/1990",
  		"employee_id": 1001
		};
	},
	mapData123: () => {
		return [
  {
    "id": "NA",
    "value": ".82"
  },
  {
    "id": "SA",
    "value": "2.04"
  },
  {
    "id": "AS",
    "value": "1.78"
  },
  {
    "id": "EU",
    "value": ".40"
  },
  {
    "id": "AF",
    "value": "2.58"
  },
  {
    "id": "AU",
    "value": "1.30"
  }
];
	},
	getAudioLink: () => {
		return "https://open.spotify.com/episode/4ydLAqIO0iGoeRYLuMX6xK?si=64ac49c2bfb3462a";
	}
}