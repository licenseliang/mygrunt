//file: test/grunt-demo_test.js

module("jQuery#ali-link",{
	setup: function(){
		this.elems = $("#qunit-fixture").children();
	}
});

test("is chainable", 1, function(){
	strictEqual(this.elems.alilink(), this.elems, "should be chaninable");
});

test("add icon to alibaba links", function(){
	this.elems.alilink();
	this.elems.each(function(){
		var self = $(this);
		if(/^http:\/\/((.+)\.)?alibaba\.com/.test(this.href)){
			ok(self.hasClass('ali-link'));
		}else{
			ok(!self.hasClass('ali-link'));
		}
	})
})