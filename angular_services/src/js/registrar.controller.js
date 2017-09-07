(function() {
  'use strict';

  angular.module('school')
      .controller('RegistrarController', RegistrarController);

  RegistrarController.$inject = ['StudentService'];

  function RegistrarController(StudentService) {
    let vm = this;
    vm.newStudent = {};

    vm.all = StudentService.getAllStudents();

    vm.add = function add(student) {
        StudentService.addStudent(student);
        vm.newStudent = {};
    };
  }
})();
