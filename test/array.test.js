/**
 * Created by zilinglius on 10/07/2017.
 */

var data = new MyArray();

var expect = chai.expect;

describe('MyArray', function () {

  before(function () {

    data.add(1);
    data.add(2);
    data.add(4);
    data.add(5);
    data.add(6);
  });

  describe('#getAtIndex()', function () {

    it('should return the value when found', function () {
      expect(data.getAtIndex(2)).to.be.equal(4);
    });
  });

  describe('#search()', function () {

    it('should return the value when found', function () {
      expect(data.search(2)).to.be.equal(1);
    });

    it('should return null when not found', function () {
      expect(data.search(10)).to.be.equal(null);
    })
  });

});
