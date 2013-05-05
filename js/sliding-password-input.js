var s,
SlidingPasswordInput = {

  settings : {
    firstInput: $('.main'),
    secondInput: $('.main'),
    nestedExample : {
      first: true,
      second: true,
      third: true,
      fourth: true,
      fifth : ['one', 'two', 'three', 'four', 'five', 'six']
    },

    foo: 'bar'

  },

  init: function () {
    s = this.settings;

    this.nextMethod();
    this.anotherMethod();
  },

  validateFormat: function () {
  },

  testStrength: function () {
  },

  comparePasswords: function () {
  }

};


$(function () {
  //SlidingPasswordInput.init();
});
