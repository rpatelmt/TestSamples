(function () {
    'use strict';

    // Creating the module and service we referenced in the beforeEach blocks in our test file
    angular.module('api.users')
    .service('Users', function Users() {

        var userList = [
            {
                id: '1',
                name: 'Jane',
                role: 'Designer',
                location: 'New York',
                twitter: 'gijane'
            },
            {
                id: '2',
                name: 'Bob',
                role: 'Developer',
                location: 'Chicago',
                twitter: 'billybob'
            },
            {
                id: '3',
                name: 'Jim',
                role: 'Developer',
                location: 'Canada',
                twitter: 'jimbo'
            },
            {
                id: '4',
                name: 'Bill',
                role: 'Designer',
                location: 'LA',
                twitter: 'dabill'
            }
        ];

        return {

            // Defining all to make our test pass. It doesn't need to do anything yet.
            all : function () {
                return userList;
            },

            findById : function (id) {
                // Returning a single user object as our test expects it to
                return userList.find(function (user) {
                    return user.id === id;
                });
            },

            findByLocation : function (location) {
                // Returning a single user object as our test expects it to
                return userList.find(function (user) {
                    return user.location === location;
                });
            }
        };
    });
})();