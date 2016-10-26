describe('Unit testing great quotes', function () {
    var $compile,
        $Scope;

    // Load the myApp module, which contains the directive
    beforeEach(angular.mock.module('my.templates'));
    beforeEach(angular.mock.module('myApp'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $Scope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function () {
        // Compile a piece of HTML containing the directive
        var element = $compile("<a-great-eye></a-great-eye>")($Scope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $Scope.$digest();
        // Check that the compiled element contains the templated content
        chai.expect(element.html()).to.contain("lidless, wreathed in flame, 2 times");
    });
});