(function() {
  'use strict';

  let expect = chai.expect;

  describe('student service', function() {
    let StudentService;

    beforeEach(module('school')); // This creates your ng-app

    beforeEach(inject(function(_StudentService_) { // Will inject the thing matching the name of the argument
      StudentService = _StudentService_
    }));

    it('should be able to give us an array of students', function() {
      let result = StudentService.getAllStudents();

      expect( result ).to.be.an('array');
    });

    it('should be able to add a student with correct data', function() {
      expect(StudentService.getAllStudents().length).to.equal(0);

      let now = Date.now();

      StudentService.addStudent({
        name: 'Patrick' + now,
        grade: 'A+',
        paid: true
      });

      let students = StudentService.getAllStudents();

      expect(students.length).to.equal(1);
      expect(students[0].name).to.equal('Patrick' + now);
      expect(students[0].grade).to.equal('A+');
    });
  });
})();
