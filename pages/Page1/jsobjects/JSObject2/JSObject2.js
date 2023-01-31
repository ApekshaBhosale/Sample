export default {
	myVar1: [],
	myVar2: {},
	_name: "Apeksha",
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		
		//use async-await or promises
	},
	transfromData: () => {
		return Api1.data.filter((user) => user.id === 1 );
	},
	getImageUrl: () => {
		return "https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/jcr:content/image.img.2048.medium.jpg/1647334259839.jpg";
	},
	getListData: () => {
		return Api2.data.users;
	}
}