const mysql = require('mysql2');

//configuración de la base de datos
const db = mysql.createPool({ 
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
});

//coneccion con la base de datos
db.getConnection((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos', err);
    } else {
        console.log(' Conexión exitosa a la base de datos');
    }
});

//operaciones de la base de datos
const CreateUsuario = (nombre,email,edad,callback)=>{
    const query = 'INSERT INTO usuario (nombre,email,edad) VALUES (?,?,?)';
    db.query(query,[nombre,email,edad],(err,result)=>{
        callback(err,result);
    });
};

const ObtenerUsuarios = (callback)=>{
    const query = 'SELECT * FROM usuario';
    db.query(query,(err,result)=>{
        callback(err,result);
    });
};

const ObtenerUsuario = (id,callback)=>{
    const query = 'SELECT * FROM usuario WHERE id = ?';
    db.query(query,[id],(err,result)=>{
        callback(err,result);
    });
};

const ActualizarUsuario = (nombre,email,edad,id,callback)=>{
    const query = 'UPDATE usuario SET nombre = ?, email = ?, edad = ? WHERE id = ?';
    db.query(query,[nombre,email,edad,id],(err,result)=>{
        callback(err,result);
    });
};

const EliminarUsuario = (id,callback)=>{
    const query = 'DELETE FROM usuario WHERE id = ?';
    db.query(query,[id],(err,result)=>{
        callback(err,result);
    });
}

module.exports = {
    CreateUsuario,
    ObtenerUsuarios,
    ObtenerUsuario,
    ActualizarUsuario,
    EliminarUsuario
}