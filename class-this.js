class User {
  hello() {
    console.log("hello");
    this.world();
  }
  world() {
    console.log("world!");
  }
}

let user = new User();

var hello = user.hello;

// !!!
// TypeError: Cannot read property 'world' of undefined
hello();