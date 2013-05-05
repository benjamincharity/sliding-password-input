var s,
SlidingPasswordInput = {

  settings : {
    firstInput: $('.js-input-new'),
    secondInput: $('.js-input-confirm')
  },

  init: function () {
    s = this.settings;

    this.validateFormat();
    this.testStrength();
    this.comparePasswords();
  },

  validateFormat: function () {
  },

  testStrength: function () {
  },

  comparePasswords: function () {
  }

};


$(function () {
  SlidingPasswordInput.init();
});
