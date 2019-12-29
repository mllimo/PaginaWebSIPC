function muestra_oculta(id) {

    if (document.getElementById) { 

        var el = document.getElementById(id); 
        var na = document.getElementById('norte_america');
        var er = document.getElementById('europa');
        var ch = document.getElementById('china');
        var ko = document.getElementById('corea');
        var la = document.getElementById('latinoamerica');
        var oc = document.getElementById('oceania');
        var tu = document.getElementById('turquia');
        var vi = document.getElementById('vietnam');
        var ta = document.getElementById('taiwan');

        if (na === el) {
            document.getElementById('europa').style.display = 'none';
            document.getElementById('china').style.display = 'none';
            document.getElementById('corea').style.display = 'none';
            document.getElementById('latinoamerica').style.display = 'none';
            document.getElementById('oceania').style.display = 'none';
            document.getElementById('turquia').style.display = 'none';
            document.getElementById('vietnam').style.display = 'none';
            document.getElementById('taiwan').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        } else if (er === el) {
            document.getElementById('norte_america').style.display = 'none';
            document.getElementById('china').style.display = 'none';
            document.getElementById('corea').style.display = 'none';
            document.getElementById('latinoamerica').style.display = 'none';
            document.getElementById('oceania').style.display = 'none';
            document.getElementById('turquia').style.display = 'none';
            document.getElementById('vietnam').style.display = 'none';
            document.getElementById('taiwan').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        } else if (ch === el) {
            document.getElementById('norte_america').style.display = 'none';
            document.getElementById('europa').style.display = 'none';
            document.getElementById('corea').style.display = 'none';
            document.getElementById('latinoamerica').style.display = 'none';
            document.getElementById('oceania').style.display = 'none';
            document.getElementById('turquia').style.display = 'none';
            document.getElementById('vietnam').style.display = 'none';
            document.getElementById('taiwan').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        } else if (ko === el) {
            document.getElementById('norte_america').style.display = 'none';
            document.getElementById('europa').style.display = 'none';
            document.getElementById('china').style.display = 'none';
            document.getElementById('latinoamerica').style.display = 'none';
            document.getElementById('oceania').style.display = 'none';
            document.getElementById('turquia').style.display = 'none';
            document.getElementById('vietnam').style.display = 'none';
            document.getElementById('taiwan').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        } else if (la === el ) {
            document.getElementById('norte_america').style.display = 'none';
            document.getElementById('europa').style.display = 'none';
            document.getElementById('china').style.display = 'none';
            document.getElementById('corea').style.display = 'none';
            document.getElementById('oceania').style.display = 'none';
            document.getElementById('turquia').style.display = 'none';
            document.getElementById('vietnam').style.display = 'none';
            document.getElementById('taiwan').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        } else if (oc === el) {
            document.getElementById('norte_america').style.display = 'none';
            document.getElementById('europa').style.display = 'none';
            document.getElementById('china').style.display = 'none';
            document.getElementById('corea').style.display = 'none';
            document.getElementById('latinoamerica').style.display = 'none';
            document.getElementById('turquia').style.display = 'none';
            document.getElementById('vietnam').style.display = 'none';
            document.getElementById('taiwan').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        } else if (tu === el) {
            document.getElementById('norte_america').style.display = 'none';
            document.getElementById('europa').style.display = 'none';
            document.getElementById('china').style.display = 'none';
            document.getElementById('corea').style.display = 'none';
            document.getElementById('latinoamerica').style.display = 'none';
            document.getElementById('oceania').style.display = 'none';
            document.getElementById('vietnam').style.display = 'none';
            document.getElementById('taiwan').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        } else if (vi === el) {
            document.getElementById('norte_america').style.display = 'none';
            document.getElementById('europa').style.display = 'none';
            document.getElementById('china').style.display = 'none';
            document.getElementById('corea').style.display = 'none';
            document.getElementById('latinoamerica').style.display = 'none';
            document.getElementById('oceania').style.display = 'none';
            document.getElementById('turquia').style.display = 'none';
            document.getElementById('taiwan').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        } else if (ta === el) {
            document.getElementById('norte_america').style.display = 'none';
            document.getElementById('europa').style.display = 'none';
            document.getElementById('china').style.display = 'none';
            document.getElementById('corea').style.display = 'none';
            document.getElementById('latinoamerica').style.display = 'none';
            document.getElementById('oceania').style.display = 'none';
            document.getElementById('turquia').style.display = 'none';
            document.getElementById('vietnam').style.display = 'none';
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
            window.scrollTo(0,0);
        }
    }
}
