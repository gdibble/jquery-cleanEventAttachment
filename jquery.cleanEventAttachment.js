/*!
 * jQuery cleanEventAttachment - v1.0.1 - 2013-10-15
 * https://github.com/gdibble/jquery-cleanEventAttachment
 * Copyright 2013 Gabriel Dibble; Licensed MIT
 */
(function($) {
  'use strict';
  function worker(that, types, selector, data, fn) {
    return that.each(function () {
      $(this)
        .off(types)
        .on(types, selector, data, fn);
    });
  }
  $.fn.cleanBind = function (types, data, fn) {
    return worker(this, types, null, data, fn);
  };
  $.fn.cleanOn = function (types, selector, data, fn) {
    return worker(this, types, selector, data, fn);
  };
}(jQuery));