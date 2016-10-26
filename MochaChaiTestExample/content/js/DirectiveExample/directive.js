'use strict'
angular.module("myApp").directive('aGreatEye', function () {
    return {
        restrict: 'E',
        replace: true,
        //template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
        templateUrl: "/content/js/DirectiveExample/myTemplate.html",
        scope: {
            Info: '='
        },
        controller: "directiveController"
    };
});