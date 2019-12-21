
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

  var database = firebase.database();
  var ref = firebase.database();
  var ref = database.ref('CONTACTOS');

  var datos = {
    Nombre:    "null",
    Apellidos: "null",
    Correo:    "null",
    Numero:    "null",
    Mensaje:   "null"
  }
  ref.push(datos);

//===================================
//            !FIREBASE
//===================================


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
    var check = true;
    for(var i=0; i<input.length; i++) {
      console.log(input[i].getAttribute('id'));
      if(validate(input[i]) == false){
        showValidate(input[i]);
        check=false;
      }
    }

    if (check) {
      for(var i=0; i<input.length; i++) {
        console.log(input[i].attr());
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
    if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    }
    else {
      if($(input).val().trim() == ''){
        return false;
      }
    }
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