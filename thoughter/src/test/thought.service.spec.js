(function() {
  'use strict';

  let expect = chai.expect;

  describe('thought service', function() {
    let ThoughtService;
    let $httpBackend;
    let mockUserService = {};

    beforeEach(module('thoughter'));

    beforeEach(module(function($provide) {
      $provide.value('UserService', mockUserService);
    }));

    beforeEach(inject(function(_$httpBackend_, _ThoughtService_) {
      ThoughtService = _ThoughtService_;
      $httpBackend   = _$httpBackend_

      $httpBackend
        .whenPOST('http://thoughter.herokuapp.com/api/thoughts')
        .respond({
          id: 55,
          content: 'Oh, damn.',
          createTime: '2017-03-10T00:09:16:4452',
          authorId: null
        });

      mockUserService.getToken = function getToken() {
        return 'abcdefghijklmnopqrstuvwxyz';
      };
    }));

    describe('addThought', function() {
      it('should not add a thought when there is no text provided', function(done) {
        let result = ThoughtService.addThought('');

        expect(result.then).to.be.a('function');
        expect(result.catch).to.be.a('function');

        result
          .then(function(data) {
          })
          .catch(function(err) {
            done();
          });
      });

      it('should add a thought', function(done) {
        let result = ThoughtService.addThought('Hey this is an original thought.');

        result
          .then(function(data) {
            expect(data).to.be.an('object');
            expect(data.content).to.be.a('string');
            done(); // This tells mocha we're done with async stuff
          })
          .catch(function(err) {
            done(err); // This tells mocha to fail this test
          });

        // Tell the fake server to release any held up responses
        $httpBackend.flush();
      });
    });
  });
})();
