class Hello {
	constructor(name) {
		this.name = name;
	}

	hello() {
		console.log("Hello, " + this.name);
	}
}

new Hello("Freewind").hello();

