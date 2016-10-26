describe('PasswordCheckerController', function () {

    var $controller, $scope;

    beforeEach(angular.mock.module('passwordCheckerApp'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $scope = _$rootScope_;
    }));

    describe('$scope.grade', function () {
        var controller;

        beforeEach(function () {
            //$scope = {};
            controller = $controller('PasswordCheckerController', { $scope: $scope });
        });

        it('sets the strength to "strong" if the password length is > 8 characters', function () {
            $scope.password = 'longerthaneightchars';
            $scope.grade();
            chai.expect($scope.strength).to.eql('strong');
        });

        it('sets the strength to "medium" if the password length is > 3 characters', function () {
            $scope.password = 'estg173';
            $scope.grade();
            chai.expect($scope.strength).to.eql('medium');
        });

        it('sets the strength to "weak" if the password length < 3 characters', function () {
            $scope.password = 'a';
            $scope.grade();
            chai.expect($scope.strength).to.eql('weak');
        });
    });
});