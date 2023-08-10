function buscar(){

    var busqueda = document.getElementById("barra");

    var enlaces = document.querySelectorAll('.barraBuscar a');

    if(busqueda.value == 'Descubre Lions' || busqueda.value == 'descrubir lions' || busqueda.value == 'descripcion' || busqueda.value == 'Descripcion'
        || busqueda.value == 'Descrubir Lions' || busqueda.value == "Sobre nosotros" || busqueda.value == "Sobre Nosotros" || busqueda.value == "Bibliografia"){

            document.getElementById("Descripcion").style.display="block";

            document.getElementById("serviciosIncluidos").style.display = "none";
        
            document.getElementById("Recursos").style.display = "none";

            busqueda.value = "";

        return true
    }

    else if(busqueda.value == 'Servicios Lions' || busqueda.value == 'Servicios' || busqueda.value == 'Servicios Incluidos' || 
        busqueda.value=='servicios lions' || busqueda.value == 'servicios' || busqueda.value == 'servicios incluidos' || busqueda.value == "Servicios incluidos"){

            document.getElementById("Descripcion").style.display="none";

            document.getElementById("serviciosIncluidos").style.display = "block";

            document.getElementById("Recursos").style.display = "none";

            document.getElementById("serviciosIncluidos").style.marginTop="-80px";

            busqueda.value = "";

        return true

    }

    else if(busqueda.value == "Recursos Lions" || busqueda.value == "recursos" || busqueda.value == "recursos lions" || busqueda.value == "Recursos"){

        document.getElementById("Descripcion").style.display="none";

        document.getElementById("serviciosIncluidos").style.display = "none";

        document.getElementById("Recursos").style.display = "block";

        document.getElementById("Recursos").style.marginTop="-30px";

        busqueda.value = "";

        return true
    }

    else{            
            document.getElementById("Descripcion").style.display="block";

            document.getElementById("serviciosIncluidos").style.display = "block";

            document.getElementById("Recursos").style.display = "block";

            document.getElementById("serviciosIncluidos").style.marginTop="0px";

            document.getElementById("Recursos").style.marginTop="0px";

            busqueda.value = "";

        return true
    }

}