class User {
	constructor(name) {
		this.name = name;
	}

	hello() {
		console.log("Hello, " + this.name);
	}
}

export default User;
