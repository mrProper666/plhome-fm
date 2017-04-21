$(document).ready(function() {
  "use strict";

  //$('#ContactForm_Form')

  var validator = $("#ContactForm_Form").validate({
    ignore: ".ignore",
    rules: {
      Name: {
        required: function() {
          if ($("#Name").val()) {
             return false;
          } else {
             return true;
          }
        }
      },
      Email: {
        required: function() {
          if ($("#Email").val()) {
           return false;
          } else {
           return true;
          }
        }
      },
      "hiddenRecaptcha": {
        required: function() {
          if(grecaptcha.getResponse() == '') {
            return true;
          } else {
            return false;
          }
        }
      }
    }
  });

});