(function() {
  'use strict';

  angular.module('school').factory('StudentService', StudentService);

  StudentService.$inject = ['$location'];

  function StudentService($location) {
    console.log('Creating a new StudentService', $location);

    let students = JSON.parse(localStorage.getItem('students')) || [];

    /**   
     * Adds a student to the "database"
     * @param {Object} student the student to add with a name and grade
     * @return {void}
     */
    function addStudent(student) {
      // TODO: data audits
      students.push({
          name: student.name,
          grade: student.grade,
          paid: false
      });

      // store the array in localStorage, but convert it to a String first
      localStorage.setItem('students', angular.toJson(students));
    }

    function getAllStudents() {
      return students;
    }

    // Allows access to the functions OUTSIDE the StudentService
    // (this is kind of like our module.exports)
    return {
      addStudent: addStudent,
      getAllStudents: getAllStudents
    };
  }
})();
