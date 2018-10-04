const assert = require("assert");
const sayHello = require("../app").sayHello;

describe("App test", function() {
  it("test", function() {
    assert.equal(sayHello(), "hello");
  });
});

/*
describe('App test', function () {
	it('return hello', function (done) {
		if(sayHello() === 'hello'){
			done();
		}
	});
});
*/
