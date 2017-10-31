const chai = require('chai');
const should = chai.should();
const Reservation = require('../../../lib/schema/reservation.js');

describe('Reservation Schema',function() {
  context('Data and Time Combination', function() {
    it('should return a ISO 8601 date and time with valid input', function() {
      const date = '2017/06/10';
      const time = '06:02 AM';

      Reservation.combineDateTime(date, time)
        .should.equal('2017-06-10T06:02:00.000Z')
    });

    it('should return null on a bad and time', function() {
      const date = '!@#$';
      const time = 'fail';

      should.not.exist(Reservation.combineDateTime(date, time));
    });
  });
});
