jQuery(function($) {

  $.fn.extractPlaceholder = function(options) {

    var defaults = {
			addClass: '',
      tagName: 'span'
    };

    var settings = $.extend({}, defaults, options);

    var rand = Math.round(Math.random() * 100000);
    var focusClass = 'placeholder-' + rand;

    this.focus(function() {
      var placeholder = $(this).attr('placeholder');
      var desc = '<' + settings.addClass + ' class="' + settings.addClass + ' ' + focusClass + '">' + placeholder + '</' + settings.addClass + '>';
      $(this).before(desc);
    });

    this.focusout(function() {
      $('.' + focusClass).remove();
    });

  };

});