
describe('Users Service', function () {

    var UsersService, $http, $scope, $controller;
    var getUsersDataSpy, getUserByIdSpy, getUsersByLocationSpy;
    var serviceResponse;

    // Load our api.users module
    beforeEach(angular.mock.module('api.users'));

    // Set our injected Users service (_Users_) to our local Users variable
    beforeEach(inject(function ($rootScope,_$controller_, _UsersService_, $httpBackend) {
        UsersService = _UsersService_;
        $http = $httpBackend;
        serviceResponse = {
            Status: true,
            Data: [
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
                    },
                    {
                        id: '5',
                        name: 'John',
                        role: 'Tester',
                        location: 'New York',
                        twitter: 'dabill'
                    }
            ]
        }

        $http.when("POST", "/Users/getUsersData").respond(serviceResponse);

        $controller = _$controller_;
        $scope = $rootScope.$new();
        $controller = $controller('UsersController', { $scope: $scope, UsersService: UsersService });

        getUsersDataSpy = sinon.spy(UsersService, "getUsersData");
        findUserByIdSpy = sinon.spy($scope, "findUserById");
        findUsersByLocationSpy = sinon.spy($scope, "findUsersByLocation");
    }));

    // A simple test to verify the Users service exists
    describe('User Service', function () {
        it('should exist', function () {
            chai.expect(UsersService).to.not.an('undefined');
        });
    });
  
    describe('Get all Users Data : ', function () {

        beforeEach(function () {
            $scope.getUsersInfo();
            $http.flush();
        });

        it('Number of times "getUsersData()" service method is called is 1.', function () {
            chai.assert(getUsersDataSpy.callCount, 1);
        });

        it('should call "getUsersData()" service method at least once', function () {
            chai.assert(getUsersDataSpy.called, true);
        });

        it('should call "getUsersData()" service method once.', function () {
            chai.assert(getUsersDataSpy.calledOnce, true);
        });

        it('should return some response value', function () {
            var getUsersDataSpyCall = getUsersDataSpy.getCall(0);
            chai.expect(getUsersDataSpyCall.returnValue.$$state.value).to.eql(serviceResponse);
        });

        it('should call "getUsersData()" service method before "findUserById()" and "findUsersByLocation()" controller methods.', function () {
            chai.assert(getUsersDataSpy.calledBefore(findUserByIdSpy), true);
            chai.assert(getUsersDataSpy.calledBefore(findUsersByLocationSpy), true);
        });

        it('Users Info should exist', function () {
            chai.expect($scope.usersInfo).to.not.an('undefined');
        });

        it('Number of Users should be 5', function () {
            chai.expect($scope.usersInfo.length).to.eql(5);
        });
    });

    describe('Get User By Id : ', function () {

        beforeEach(function () {
            $scope.getUsersInfo();
            $http.flush();
            $scope.findUserById(2);
        });

        it('should call "getUsersData()" service method.', function () {
            chai.assert(getUsersDataSpy.called, true);
        });

        it('should call "getUserData()" service method before "findUserById()" controller method.', function () {
            chai.assert(getUsersDataSpy.calledBefore(findUserByIdSpy), true);
        });

        it('should call "findUserById()" controller method.', function () {
            chai.assert(findUserByIdSpy.called, true);
        });

        it('should not return any response value.', function () {
            var findUserByIdSpyCall = findUserByIdSpy.getCall(0);
            chai.expect(findUserByIdSpyCall.returnValue).to.be.an('undefined');
        });

        it('should call "findUserById()" controller method after "getUsersData()" service method', function () {
            chai.assert(findUserByIdSpy.calledAfter(getUsersDataSpy), true);
        });

        it('should call "findUserById()" controller method with argument user Id 2.', function () {
            chai.assert(findUserByIdSpy.calledWith(2), true);
        });

        it('User with user id 2 should exist', function () {
            chai.expect($scope.userInfoById).to.not.an('undefined');
        });

        it('User Id 2 Information --> Name : Bob, Role : Developer, Location : Chicago', function () {
            chai.expect($scope.userInfoById.name).to.eql('Bob');
            chai.expect($scope.userInfoById.role).to.eql('Developer');
            chai.expect($scope.userInfoById.location).to.eql('Chicago');
        });
    });

    describe('Get Users By Location : ', function () {

        beforeEach(function () {
            $scope.getUsersInfo();
            $http.flush();
            $scope.findUsersByLocation('New York');
        });

        it('should call "getUsersData()" service method.', function () {
            chai.assert(getUsersDataSpy.called, true);
        });

        it('should call "getUsersData()" service method before "findUsersByLocation()" controller method.', function () {
            chai.assert(getUsersDataSpy.calledBefore(findUsersByLocationSpy), true);
        });

        it('should call "findUsersByLocation()" controller method.', function () {
            chai.assert(findUsersByLocationSpy.called, true);
        });

        it('should call "findUsersByLocation()" controller method after "getUsersData()" service method', function () {
            chai.assert(findUsersByLocationSpy.calledAfter(getUsersDataSpy), true);
        });

        it('should call "findUsersByLocation()" controller method with argument user lacation "New York".', function () {
            chai.assert(findUsersByLocationSpy.calledWith("New York"), true);
        });

        it('Users with location New York should exist', function () {
            chai.expect($scope.usersListByLocation).to.not.an('undefined');
        });

        it('Number of Users belong to New York should be 2', function () {
            chai.expect($scope.usersListByLocation.length).to.eql(2);
        });

        it('User 1 with Location New York --> Name : Jane , Role : Designer , Location : New York', function () {
            chai.expect($scope.usersListByLocation[0].name).to.eql('Jane');
            chai.expect($scope.usersListByLocation[0].role).to.eql('Designer');
            chai.expect($scope.usersListByLocation[0].location).to.eql('New York');
        });

        it('User 2 with Location New York --> Name : John , Role : Tester , Location : New York', function () {
            chai.expect($scope.usersListByLocation[1].name).to.eql('John');
            chai.expect($scope.usersListByLocation[1].role).to.eql('Tester');
            chai.expect($scope.usersListByLocation[1].location).to.eql('New York');
        });
    });
});