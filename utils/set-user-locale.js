/*
* Setting moment locale to the user's locale
*
*/

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
      && typeof require === 'function' ? factory(require('../moment')) :
  typeof define === 'function' && define.amd ? define(['../moment'], factory) :
  factory(global.moment)
}(this, (function (moment) { 'use strict';

debugger
  var userLocale = window.userLocale;
  console.log('userLocale', userLocale);

  var af = moment.locale('en');
  return af;

})));
