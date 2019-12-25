function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCMSrAyPWJEaYB8Xirxmsi4709HV3bs_6Q",
    authDomain: "prueba-5137a.firebaseapp.com",
    databaseURL: "https://prueba-5137a.firebaseio.com",
    projectId: "prueba-5137a",
    storageBucket: "prueba-5137a.appspot.com",
    messagingSenderId: "679049882860",
    appId: "1:679049882860:web:7972cd8da2f949c0bc49c9",
    measurementId: "G-HNDSC9VXPL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Referencia a la base de datos
const db = firebase.database();

//Obtener el torneo más reciente
const TorneosLoL = db.ref("Torneos/OW").orderByChild("Fecha final").limitToFirst(1); //Limitamos
TorneosLoL.on('value',gotDataLastTournament);

function gotDataLastTournament(data){
    var torneo = data.val();
    var key = Object.keys(torneo);
    var k = key[0];
    var fechaI = torneo[k].Fecha_inicial;
    var fechaF = torneo[k].Fecha_final;
    var nombre = torneo[k].Nombre;
    var ganador = torneo[k].Ganador;
    var region = torneo[k].RegiónGanador;
    var lugar = torneo[k].Lugar;
    console.log(fechaI,nombre,ganador,region);
    document.getElementById("Ubicacion").innerText = (" " + lugar);
    document.getElementById("Fecha").innerText = (" " + fechaI + " / " + fechaF);
    document.getElementById("Ganador").innerText = (" " + ganador);
    document.getElementById("Region").innerText = (" " + region);
    document.getElementById("Nombre").innerText = (" " + nombre);
}