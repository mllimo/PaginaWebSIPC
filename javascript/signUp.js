
//===================================
//            FIREBASE
//===================================
var firebaseConfig = {
  apiKey: "AIzaSyAlAobkJ2AHEA9mz0QhLcOdMgfXTnyj6qQ",
  authDomain: "sipc-42387.firebaseapp.com",
  databaseURL: "https://sipc-42387.firebaseio.com",
  projectId: "sipc-42387",
  storageBucket: "sipc-42387.appspot.com",
  messagingSenderId: "671437049734",
  appId: "1:671437049734:web:74403a0c47941d54e02607",
  measurementId: "G-S30029EKQ4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);
//===================================
//            !FIREBASE
//===================================

var check = true;

function signUp(){
  console.log();
  if (check == true) {
    var email    = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
    });
  }
}


(function ($) {

  "use strict";
  $('.validate-input .input100').each(function(){
    $(this).on('blur', function(){
      if(validate(this) == false){
        showValidate(this);
      }
      else {
        $(this).parent().addClass('true-validate');
      }
    })
  })

  var input = $('.validate-input .input100');
  $('.validate-form').on('submit',function(){
    check = true;
    for(var i=0; i<input.length; i++) {
      if(validate(input[i]) == false){
        showValidate(input[i]);
        check=false;
      }
    }
    return check;
  });

  $('.validate-form .input100').each(function(){
    $(this).focus(function(){
      hideValidate(this);
      $(this).parent().removeClass('true-validate');
    });
  });

   function validate (input) {
    var isOkey;
    if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if($(input).val().trim().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
        isOkey = false;
      }

      if ($(input).attr('id') == 'email-rep'){
        if (document.getElementById('email').value != $(input).val()) {
          isOkey = false;
        }
      }

    } else {
      if($(input).val().trim() == ''){
        isOkey = false;
      }
    }

    return isOkey;
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).addClass('alert-validate');
    $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>')
    $('.btn-hide-validate').each(function(){
      $(this).on('click',function(){
        hideValidate(this);
      });
    });
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate');
    $(thisAlert).find('.btn-hide-validate').remove();
  }

})(jQuery);