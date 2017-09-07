(function() {
  'use strict';

  angular.module('email')
    .controller('EmailController', EmailController);

  // THIS IS JUST A CONSTRUCTOR FUNCTION!!
  function EmailController() {
    // Store 'this' in the context of the controller so
    // it may be used in subsequent functions
    let vm = this;

    // This COULD come from an api but for
    // now we'll just use static data
    this.name   = 'Patrick';
    this.emails = [
      {
        sender: 'Russell',
        subject: 'Yooooo',
        receivedTime: Date.now()
      },
      {
        sender: 'Jordan',
        subject: 'What\'s',
        receivedTime: Date.now() - 44932492
      },
      {
        sender: 'Kayt',
        subject: 'Up',
        receivedTime: Date.now() - 9843928942
      }
    ];

    setTimeout(function changeName() {
      // This function will execute after 1500 ms have passed
      // Will not actually change the view quite yet
      vm.name = 'Nielsen';
      console.log('hello from setTimeout');
    }, 1500);

    /**
     *  Formats the curretn date for display in the view
     *  @return {String} The formatted date
     */
    this.getShortDate = function getShortDate() {
      let today = new Date();
      return `${today.getMonth() + 1}/${today.getDate()}`
    }

    this.checkEmail = function checkEmail() {
      // Do stuff to check for new emails.  Maybe an ajax call?
      // We'll just push a static one for now
      this.emails.push({
        sender: 'TIY',
        subject: 'You\'re getting a raise!',
        receivedTime: Date.now()
      });
    }
  }
})();
