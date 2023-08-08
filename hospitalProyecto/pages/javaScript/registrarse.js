//Funcion de validacion

function validado(){
  //Valores de los inputs del archivo registrarse.html
    let tipoDocumento1 = document.formulario.tipoDocumento.value;

    let numeroDocumento1 = document.formulario.numeroDocumento.value;

    let nombreCompleto1 = document.formulario.nombreCompleto.value;

    let numeroTelefono1 = document.formulario.numeroTelefono.value;

    let contraseña1 = document.formulario.contraseña.value;

    let email1 = document.formulario.email.value;

//Variables para la manipulacion de las validaciones

    let minusculas = /[a-z]/g

    let mayusculas = /[A-Z]/g

    let numeros = /[1-999999999999]/g

    let validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//Combinacion de valores de los inputs con las variables de validacion

    let listTipoDocumento = tipoDocumento1.match(numeros)

    let listnumeroDocMin = numeroDocumento1.match(minusculas)

    let listnumeroDocMay = numeroDocumento1.match(mayusculas)

    let listNombreCompletoNum = nombreCompleto1.match(numeros)

    let  listNumeroTelfonoMin = numeroTelefono1.match(minusculas)

    let listNumeroTelfonoMay = numeroTelefono1.match(mayusculas)



    if(listTipoDocumento && tipoDocumento1!="Tarjeta de Identidad" && tipoDocumento1!="Tajerta de identidad"
     && tipoDocumento1!="Cedula" && tipoDocumento1!="cedula" && tipoDocumento1!="Cedula de ciudadania" 
     && tipoDocumento1!="Cedula de Ciudadania" && tipoDocumento1!="Permiso" && tipoDocumento1!="Pasaporte"){           
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El tipo de documento debe ser uno de los recurrentes aceptados en Colombia',
        confirmButtonText: "Reenviar",
        allowEnterKey:true,
        allowOutsideClick:false,
        confirmButtonColor:" rgb(61, 174, 240)"
    
      })

          return false
    }

    else if(listnumeroDocMin || listnumeroDocMay){
        
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

    else if(listNombreCompletoNum){
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre completo no puede contener numeros',
            confirmButtonText: "Reenviar",
            allowEnterKey:true,
            allowOutsideClick:false,
            confirmButtonColor:" rgb(61, 174, 240)"
        
          })

          return false
    
    }

    else if (nombreCompleto1.length<15){

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tu nombre es demasiado corto por favor indica un nombre existente',
        confirmButtonText: "Reenviar",
        allowEnterKey:true,
        allowOutsideClick:false,
        confirmButtonColor:" rgb(61, 174, 240)"
    
      })

      return false

    }

    else if(!validacionEmail.test(email1)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El email no contiene la informacion correspondiente',
            confirmButtonText: "Reenviar",
            allowEnterKey:true,
            allowOutsideClick:false,
            confirmButtonColor:" rgb(61, 174, 240)"
        
          })
  
        return  false
    }

    else if(listNumeroTelfonoMay || listNumeroTelfonoMin){
        
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El numero telefonico no puede tener letras',
          confirmButtonText: "Reenviar",
          allowEnterKey:true,
          allowOutsideClick:false,
          confirmButtonColor:" rgb(61, 174, 240)"
      
        })

        return false
  }

    else if (numeroTelefono1.length<10 || numeroTelefono1.length>10){

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El numero telefonico no puede tener mas ni menos de 10 numeros',
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

    alert("Bienvenido, has realizado el registro correctamente")

    return true

  }

}