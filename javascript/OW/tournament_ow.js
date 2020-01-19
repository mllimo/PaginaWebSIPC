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

const allTorneos = db.ref("Torneos/OW");
allTorneos.on('value',buildTournamentCard);

var keys;
var torneos;

function buildTournamentCard(data){
    torneos = data.val();
    keys = Object.keys(torneos);
    for (var i = 0; i < keys.length; i++){
        var k = keys[i];
        var nombre = torneos[k].Nombre;
        document.getElementById("CardSection").innerHTML += `
                                                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pt-3 card-section-content" id="C`+i+`">
                                                                <div onclick="buildCardExtended(this.parentNode.id)" class="card no-padding" title="`+nombre+`">
                                                                    <img class="card-img-top img-fluid" src="../../../assets/images/Ow/Torneos/`+ nombre +`.png" alt="`+nombre+`">
                                                                </div>
                                                            </div>
                                                            `
    }
}

function display(data){
    var y = data.nextElementSibling;
    var allButtons = document.getElementsByClassName("dropdown-container");
    for (var i = 0; i < allButtons.length; i++){
        if(allButtons[i] != y){
            allButtons[i].previousElementSibling.classList.remove("activeButton");
            allButtons[i].style.display = "none";
        }
    }
    if(y.style.display === "none"){
        var cardScreen = document.getElementById("CardSection");
        var menu = document.getElementById("menuTorneos");
        var size = y.children.length;
        console.log("Antes",menu.style.height);
        y.style.display = "block";
        var npixels = Math.round(250 + size * 44.66);
        cardScreen.style.height = (npixels + "px");
        menu.style.height = (npixels + "px");
        console.log("Ahora",menu.style.height, "size", npixels);
        data.classList.add("activeButton");
    }else{
        var cardScreen = document.getElementById("CardSection");
        var menu = document.getElementById("menuTorneos");
        y.style.display = "none";
        cardScreen.style.height = "250px";
        menu.style.height = "250px";
        data.classList.remove("activeButton");
    }
}

function showAll(){
    var allCards = document.getElementsByClassName("card-section-content");
    for(var i = 0; i<allCards.length; i++){
        allCards[i].style.display = "initial";
    }
}

function showByRegion(data){
    hideAll();
    for(var i = 0; i<keys.length; i++){
        var k = keys[i];
        var region = torneos[k].RegiónGanador;
        if(region === data){
            document.getElementById("C" + i).style.display = "initial";
        }
    }
}

function hideAll(){
    var allCards = document.getElementsByClassName("card-section-content");
    for(var i = 0; i<allCards.length; i++){
        allCards[i].style.display = "none";
    }
}

function showByFecha(data){
    var fechaSuperior = data + 1;
    fechaSuperior = (fechaSuperior + "-00-00");
    var fechaActual = (data + "-00-00");
    hideAll();
    for(var i = 0; i<keys.length; i++){
        var k = keys[i];
        var fechaI = torneos[k].Fecha_inicial;
        if(fechaI >= fechaActual && fechaI < fechaSuperior){
            document.getElementById("C" + i).style.display = "initial";
        }
    }
}

function showByPlace(data){
    var EuropeanCountries = ["Europa", "Alemanía", "Suecia", "Francia", "Polonia"];
    hideAll();
    for(var i = 0; i<keys.length; i++){
        var k = keys[i];
        var place = torneos[k].Lugar;
        if(data == "Europa"){
            if(EuropeanCountries.includes(place)){
                document.getElementById("C" + i).style.display = "initial";
            }
        }else if(data == "Taiwán"){
            if(place == "Taiwán" || place == "Vietnam y Taiwán"){
                document.getElementById("C" + i).style.display = "initial";
            }
        }else if(data == "Vietnam"){
            if(place == "Vietnam y Taiwán"){
                document.getElementById("C" + i).style.display = "initial";
            }
        }else if(place == data){
            document.getElementById("C" + i).style.display = "initial";
        }
    }
}

function showByParticipants(num1,num2){
    hideAll();
    for(var i = 0; i<keys.length; i++){
        var k = keys[i];
        var participants = torneos[k].Participantes;
        if(participants >= num1 && participants < num2){
            document.getElementById("C" + i).style.display = "initial";
        }
    }
}

//Muestreo de card extendido

function openCardExtended() {
    document.getElementById("TournamentScreen").style.height = "1000px";
    document.getElementById("TournamentScreen").style.borderStyle = "solid";
    document.getElementById("CloseButton").style.fontSize = "37px";
  }
  
  /* Close */
function closeCardExtended() {
    document.getElementById("TournamentScreen").style.height = "0";
    document.getElementById("TournamentScreen").style.borderStyle = "none";
    document.getElementById("CloseButton").style.fontSize = "0px";
}

function buildCardExtended(data){
    var x = data;
    var y = x.slice(1);
    var k = keys[y];
    var currentData = torneos[k];
    document.getElementById("FechaI").innerText = currentData.Fecha_inicial;
    document.getElementById("Nombre").innerText = currentData.Nombre;
    document.getElementById("FechaF").innerText = currentData.Fecha_final;
    document.getElementById("Lugar").innerText = currentData.Lugar;
    document.getElementById("Region").innerText = currentData.RegiónGanador;
    document.getElementById("Rango").innerText = currentData.Rango;
    document.getElementById("FirstRank").innerText = currentData.Ganador;
    document.getElementById("SecondRank").innerText = currentData.SegundoPuesto;
    document.getElementById("ThirdRank").innerText = currentData.TercerPuesto;
    document.getElementById("FourthRank").innerText = currentData.CuartoPuesto;
    document.getElementById("Participantes").innerText = currentData.Participantes;
    document.getElementById("imagenTorneo").src = "../../../assets/images/Ow/Torneos/" + currentData.Nombre + ".png";
    document.getElementById("firstImg").src = "../../../assets/images/Ow/Teams/" + currentData.Ganador + ".png";
    document.getElementById("secondImg").src = "../../../assets/images/Ow/Teams/" + currentData.SegundoPuesto + ".png";
    document.getElementById("thirdImg").src = "../../../assets/images/Ow/Teams/" + currentData.TercerPuesto + ".png";
    document.getElementById("fourImg").src = "../../../assets/images/Ow/Teams/" + currentData.CuartoPuesto + ".png";
    openCardExtended();
}