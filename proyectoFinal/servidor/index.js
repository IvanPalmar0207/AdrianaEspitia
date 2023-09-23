//Importa la libreria de peticiones HTTP
const express = require('express');
const app = express();
//Se importa el paquete de MySQL para realizar la conexion o consultas a la BD
const mysql = require('mysql');
//Importa la libreria cors
const cors = require('cors');
//Se ejecuta antes de que el usuario acceda al sistema
app.use(cors());
app.use(express.json());

//Conexion a la BD
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database: 'hotelPegasusPrototipo'
});

//Metodo para registrar Usuarios
app.post("/create",(req,res)=>{
    const numeroDocumento_usu = req.body.numeroDocumento_usu;
    const nombreUsuario_usu = req.body.nombreUsuario_usu;
    const nombre_usu = req.body.nombre_usu;
    const apellido_usu = req.body.apellido_usu;
    const email_usu = req.body.email_usu;
    const contrasena_usu = req.body.constrasena_usu;
    const codigo_tpU = req.body.codigo_tpU;

//Generar la consulta de insertar los datos del usuario
    db.query('INSERT INTO tb_usuario(numeroDocumento_usu,nombreUsuario_usu,nombre_usu,apellido_usu,email_usu,contrasena_usu,codigo_tpU) VALUES(?,?,?,?,?,?,?)',[numeroDocumento_usu,nombreUsuario_usu,nombre_usu,apellido_usu,email_usu,contrasena_usu,codigo_tpU]
    ,(error,result) => {
        if(error){
            console.log(error)
        }
        else{
            res.send("El usuario se ha registrado correctamente")
        }
    }
    );
});


app.get("/usuarios",(req, res)=>{
    db.query("SELECT numeroDocumento_usu,nombreUsuario_usu,nombre_usu,apellido_usu,email_usu,contrasena_usu  FROM tb_usuario",
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }        
        }
    );
});

app.put("/updateUsuarios",(req,res)=>{
    const numeroDocumento_usu = req.body.numeroDocumento_usu;
    const nombreUsuario_usu = req.body.nombreUsuario_usu;
    const nombre_usu = req.body.nombre_usu;
    const apellido_usu = req.body.apellido_usu;
    const email_usu = req.body.email_usu;
    const contrasena_usu = req.body.constrasena_usu;


    db.query(
        "UPDATE tb_usuario SET nombreUsuario_usu = ?, nombre_usu = ?, apellido_usu = ?, email_usu = ?, contrasena_usu = ? WHERE numeroDocumento_usu = ?",[nombreUsuario_usu,nombre_usu,apellido_usu,email_usu,contrasena_usu,numeroDocumento_usu],
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
    );
});

app.delete("/delete/:numeroDocumento_usu",(req,res)=>{
    const numeroDocumento_usu = req.params.numeroDocumento_usu;

    db.query("DELETE FROM tb_usuario WHERE numeroDocumento_usu = ?",numeroDocumento_usu,
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
    );
});

app.listen(3001,()=>{
    console.log("Puerto Activo");
})

