'use strict';

angular.module('api.users').controller('UsersController', UsersController);

UsersController.$inject = ['$scope', 'UsersService'];

function UsersController(scope, UsersService) {

    scope.getUsersInfo = function () {

        UsersService.getUsersData().then(function (response) {
            scope.usersInfo = response.Data;
        });
    };

    scope.findUserById = function (userId) {

        scope.userInfoById = scope.usersInfo.find(function (user) {
            return user.id == userId;
        });
    };

    scope.findUsersByLocation = function (location) {

        var userList = [];

        for (var i = 0; i < scope.usersInfo.length; i++) {
            if (scope.usersInfo[i].location === location) {
                userList.push(scope.usersInfo[i]);
            }
        }

        scope.usersListByLocation = userList;
    }
}

