export default {
	myVar1: [1,2,3,4],
	myVar2: "hello from the other side",
	myFun1(lol, pop) {
		return "** hey this is just a fun!!!!" + lol + pop;
	},
	myFun2: async () => {
		return Api1.run().then(() => Api2.run().then(() => showAlert("fetchData!")));
	}, 
	getStr:() => {
		return Api1.run().then(() => showAlert("success!!"));
	},
	newFun22() {
		return this.myFun1("2", "4");
	},
	showStr: () => {
		return Input1.text;
	},
	
}