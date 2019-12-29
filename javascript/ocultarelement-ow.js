function muestra_oculta(id) {

    if (document.getElementById) { 

        var el = document.getElementById(id); 
        var na = document.getElementById('norte_america');
        var er = document.getElementById('europa');
        var ch = document.getElementById('china');
        var ko = document.getElementById('corea');

        if (na === el) {
            document.getElementById('europa').style.display = 'none';
            document.getElementById('china').style.display = 'none';
            document.getElementById('corea').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        } else if (er === el) {
            document.getElementById('norte_america').style.display = 'none';
            document.getElementById('china').style.display = 'none';
            document.getElementById('corea').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        } else if (ch === el) {
            document.getElementById('norte_america').style.display = 'none';
            document.getElementById('europa').style.display = 'none';
            document.getElementById('corea').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        } else if (ko === el) {
            document.getElementById('norte_america').style.display = 'none';
            document.getElementById('europa').style.display = 'none';
            document.getElementById('china').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        }
    }
}
