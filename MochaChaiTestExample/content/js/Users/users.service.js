(function () {
    'use strict';

    // Creating the module and service we referenced in the beforeEach blocks in our test file
    angular.module('api.users').service('UsersService', UsersService);

    UsersService.$inject = ['$http'];

    function UsersService($http) {

        function handleSuccess(response) {
            return response.data;
        }

        return {

            getUsersData: function () {

                var request = $http({
                    method: "POST",
                    url: "/Users/getUsersData"
                });
                return (request.then(handleSuccess));
            }
        }
    }
})();