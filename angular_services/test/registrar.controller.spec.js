(function() {
  'use strict';

  let expect = chai.expect

  describe('registrar controller', function() {
    let RegistrarController
    let mockStudentService = {};

    beforeEach(module('school')); // This creates your ng-app

    beforeEach(module(function($provide) {
      $provide.value('StudentService', mockStudentService);
    }));

    // We can't inject controllers but we CAN inject a SERVICE
    // that knows HOW to create controllers - called a PROVIDER
    beforeEach(inject(function($controller) {
      mockStudentService.getAllStudents = function getAllStudents() {
        return [];
      };

      mockStudentService.addStudent = function addStudent(student) {
        mockStudentService.addStudent.numTimesCalled++
        return;
      };

      mockStudentService.addStudent.numTimesCalled = 0;

      RegistrarController = $controller('RegistrarController');
    }));

    it('should be created properly', function() {
      expect( RegistrarController.newStudent ).to.be.an('object');
      expect( RegistrarController.all ).to.be.an('array');
      expect( RegistrarController.add ).to.be.a('function');
    });

    it('should call addStudent on StudentService when calling add', function() {
      RegistrarController.add({});

      expect( mockStudentService.addStudent.numTimesCalled ).to.equal(1);
    });
  });
})();
