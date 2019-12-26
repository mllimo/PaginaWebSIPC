
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


//===================================
//            !FIREBASE
//===================================

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

function login (){
  var userEmail  = document.getElementById('email').value;
  var userPass   = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
}