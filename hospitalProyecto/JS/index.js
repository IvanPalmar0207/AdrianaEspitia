function buscar(){
    var enlaces = document.querySelectorAll('.barraBuscar a');

    var busqueda = document.getElementById("barra");

    var lionsGateHospital = 'Lions Gate Hospital'


    if(busqueda.value == 'Registrarse' || busqueda.value == 'Registro' || busqueda.value == 'registro' || busqueda.value == 'registrarse'
        || busqueda.value == 'Realizar registro'){

            enlaces.forEach(function(element){

                element.href = '/pages/registrarse.html'
                
            });

        return true
    }

    else if(busqueda.value == 'Iniciar Sesion' || busqueda.value == 'iniciar sesion' || busqueda.value == 'Iniciar sesion' || 
        busqueda.value=='iniciar Sesion' || busqueda.value == 'inicio de sesion' || busqueda.value == 'Inicio de Sesion'){

            enlaces.forEach(function(element){

                element.href = "/pages/iniciarSesion.html"

            })

        return true

    }

    else if(busqueda.value){
        enlaces.forEach(function (element) {

            element.href = `https://www.google.com/search?q=${lionsGateHospital+" "+busqueda.value}`;
        
        });
        return true
    }
    else{
        enlaces.forEach(function (element) {

        element.href = "#";
        
        });     
        return false
    }
}