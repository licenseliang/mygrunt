/*
 * myjquery
 * https://github.com/liangshianliang/mygrunt
 *
 * Copyright (c) 2017 license
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.myjquery = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.myjquery = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.myjquery.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.myjquery.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].myjquery = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
