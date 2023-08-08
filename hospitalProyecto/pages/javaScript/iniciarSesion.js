//Funcion para la validacion de los campos

function validar(){

    //Variables con los varoles de los input

    let numeroDocumento1 = document.formulario.numeroDocumento.value;

    let contraseña1 = document.formulario.contraseña.value;

    //Variables que guardan lo que los campos no deben tener

    let minusculas = /[a-z]/g

    let mayusculas = /[A-Z]/g

    //Variables que convinan el valor de los input con el arreglo de caracteres

    let listnumeroDocMay = numeroDocumento1.match(mayusculas)

    let listnumeroDocMin = numeroDocumento1.match(minusculas)

    //Inicio de condicion

    if(listnumeroDocMin || listnumeroDocMay){
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El numero de documento no puede contener letras',
            confirmButtonText: "Reenviar",
            allowEnterKey:true,
            allowOutsideClick:false,
            confirmButtonColor:" rgb(61, 174, 240)"
            
          })
          
          return false
    }

    else if(numeroDocumento1.length>10 || numeroDocumento1.length<7){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El numero de documento debe contener minimo 7 numeros y maximo 10 numeros',
        confirmButtonText: "Reenviar",
        allowEnterKey:true,
        allowOutsideClick:false,
        confirmButtonColor:" rgb(61, 174, 240)"
        
      })
      
      return false
    }

    else if (contraseña1.length<8 || contraseña1.length>16){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña debe tener minimo 8 caracteres y maximo 16 caracteres',
            confirmButtonText: "Reenviar",
            allowEnterKey:true,
            allowOutsideClick:false,
            confirmButtonColor:" rgb(61, 174, 240)"
      
          })
    
          return false
    }
        
    else{
        alert("Has iniciado sesion correctamente, bienvenido a LIONS GATE HOSPITAL")
        return true
    }

}