(function() {
  'use strict';

  angular.module('school')
      .controller('FinanceController', FinanceController);

  FinanceController.$inject = ['StudentService'];

  function FinanceController(StudentService) {
    let vm = this;

    vm.students = StudentService.getAllStudents();
    
  }
})();
