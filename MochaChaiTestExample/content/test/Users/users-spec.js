
describe('Users Service', function () {

    var Users;

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

    var singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'billybob'
    };

    var newYorkUser = {
        id: '1',
        name: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane'
    };

    // Load our api.users module
    beforeEach(angular.mock.module('api.users'));

    // Set our injected Users service (_Users_) to our local Users variable
    beforeEach(inject(function (_Users_) {
        Users = _Users_;
    }));

    // A simple test to verify the Users service exists
    it('should exist', function () {
        chai.expect(Users).to.not.an('undefined');
    });

    // A set of tests for our Users.all() method
    describe('.all()', function () {
        // A simple test to verify the method all exists
        it('should exist', function () {
            chai.expect(Users.all).to.not.an('undefined');
        });

        // A test to verify that calling all() returns the array of users we hard-coded above
        it('should return a hard-coded list of users', function () {
            chai.expect(Users.all()).to.eql(userList);
        });
    });

    // A set of tests for our Users.findById() method
    describe('.findById()', function () {
        // A simple test to verify the method findById exists
        it('should exist', function () {
            chai.expect(Users.findById).to.not.an('undefined');
        });

        // A test to verify that calling findById() with an id, in this case '2', returns a single user
        it('should return one user object if it exists', function () {
            chai.expect(Users.findById('2')).to.eql(singleUser);
        });
    });

    // A set of tests for our Users.findByLocation() method
    describe('.findByLocation()', function () {
        // A simple test to verify the method findByLocation exists
        it('should exist', function () {
            chai.expect(Users.findByLocation).to.not.an('undefined');
        });

        // A test to verify that calling findByLocation() with a location, in this case 'New York', returns user with location 'New York'
        it('should return one user object if it exists', function () {
            chai.expect(Users.findByLocation('New York')).to.eql(newYorkUser);
        });
    });

});