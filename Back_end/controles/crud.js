;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let getDatos = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    db.select(campo).from(tabla)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let getDatosbyID = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    let id = req.query.id
    db.select(campo).from(tabla).where('id', id)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let postDatos = (req, res) => {
    let tabla = req.body.tabla
    let datos = req.body.datos
    db(tabla).returning('id').insert(datos)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let updateDatos = (req, res) => {
    let tabla = req.body.tabla
    let datos = req.body.datos
    datos.forEach( element => {
        db(tabla).where('id', element.id).update(element)
        .then( resultado => {
            return res.status(200).json({
                ok: true,
                datos: resultado
            })
        })
        .catch((error) => {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: `Error del servidor: ${error}` 
            })
        })
    })
}

let deleteDatos = (req, res) => {
    let tabla = req.query.tabla
    let id = req.query.id
    db(tabla).where('id', id).delete()
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let getDatosOrdenes_detalles = (req, res) => {
    let idordenes = req.query.idordenes
    db.raw(`select id, (select f_telas(idtela)) as idtela, (select f_hilos(idhilo)) as idhilo, (select f_etiqueta(idetiqueta)) as idetiqueta, f_botones(idboton) as idboton, idordenes, (select f_tipoprenda(idtipoprenda)) as idtipoprenda, (select f_tallaprendas(idtallaprendas)) as idtallaprendas, tela_cantidad, boton_cantidad, hilo_cantidad, etiqueta_cantidad from ordenes_detalle where idordenes = ${idordenes} order by id desc`)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}
// -----------------------------------------------------------------------------------------fichatecnica
let getDatosfichatecnica = (req, res) => {
    let codigo = req.query.codigo
    db.raw(`select id,codigo,
    (select tela_principal(telaprincipal)) as telaprincipal, cantidadtelaprincipal ,
    (select combinacion1(combinacion1)) as combinacion1, cantidadcombinacion1 ,
    (select combinacion2(combinacion2)) as combinacion2 , cantidadcombinacion2,
    (select hilo(hilo)) as hilo, consumohilo,
    (select boton18(boton18)) as boton18, cantidadboton18,
    (select boton14(boton14)) as boton14, cantidadboton14,
    (select marquilla1(marquillamarca)) as marquillamarca,cantidadmarquillamarca,
    cantidadmarquillats,cantidadmarquillatm ,cantidadmarquillatl ,cantidadmarquillatxl,cantidadmarquillatxxl,cantidadmarquillatxxxl,
    (select instruccioncui(instruccioncuidado)) as  instruccioncuidado,
    (select marquilla8(marquillaforma)) as marquillaforma,cantidadmarquillaforma,
    (select reata(reata)) as reata,cantidadreata,
    (select etiquetas(etiqueta)) as etiqueta,
    (select etiquetas1(etiquetacodbarras)) as etiquetacodbarras,
    consumoentretela from fichatecnica where codigo = ${codigo} order by id asc `)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}









let getDatosOrdenes = (req, res) => {
    db.raw('select id, f_clientes(idclientes) as idclientes, fecha_orden from ordenes order by id desc')
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

//get datos usuarios
let getDatosUsuarios =(req,res)=>{
    db.raw('select id,nombre,apellido,correo,contraseña,fechanacimiento,rol from usuarios')
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

//fin get datos usuarios

//get datos diseño
let getDatosDiseno =(req,res)=>{
    db.raw('select id,referencia,coleccion, f_clientes(clientes) as clientes,descripcion,aprobacion,departamentoaprovador,elaboracion,departamentodis, fechaelab from fichadiseno')
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}



let getDatosbotones =(req,res)=>{
    db.raw((`select  botones.id ,botones.nombre as nombre, botones.dimensiones as dimensiones,botones.tipo as tipo ,formabotones.descripcion as idforma,colorbotones.color as idcolorboton,
    materialbotones.material as material,proveedores.nombre as proveedor
    from botones 
    join formabotones
    on botones.idforma=formabotones.id
    join colorbotones
    on botones.idcolorboton=colorbotones.id
    join materialbotones
	on botones.idmaterialboton=materialbotones.id 
    join proveedores
    on botones.idproveedor=proveedores.id
    `))
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}



let getDatosetiquetas =(req,res)=>{
    db.raw(`select  id,nombre,comentario from etiquetas`)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}


let getDatoshilos =(req,res)=>{
    db.raw(`select hilos.id, hilos.nombre,hilos.material as materialhilos,hilos.tipo,
	colorhilos.nombre as colorhilos,proveedores.nombre as proveedor
	from hilos
	join colorhilos
	on hilos.idcolorhilo=colorhilos.id
	join proveedores
	on hilos.idproveedor=proveedores.id
	`)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let getDatosreatas =(req,res)=>{
    db.raw(`select id,nombre,caracteristica from reatas`)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

//fin get datos diseño
let getPDFordenes = (req, res) => {
    db.raw('select f_clientes(ordenes.idclientes), ordenes.fecha_orden, f_botones(ordenes_detalle.idboton), ordenes_detalle.boton_cantidad, f_telas(ordenes_detalle.idtela), ordenes_detalle.tela_cantidad, f_hilos(ordenes_detalle.idhilo), ordenes_detalle.hilo_cantidad, f_etiqueta(ordenes_detalle.idetiqueta), ordenes_detalle.etiqueta_cantidad, f_tipoprenda(tipo_prendas.id), f_tallaprendas(talla_prendas.id) from clientes join ordenes on clientes.id = ordenes.idclientes join ordenes_detalle on ordenes.id = ordenes_detalle.idordenes join tipo_prendas on tipo_prendas.id = ordenes_detalle.idtipoprenda join talla_prendas on talla_prendas.id =  ordenes_detalle.idtallaprendas')
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}


// telas
let getDatostelas = (req, res) => {
    // let telasid = req.query.telasid
    db.raw(`select  telas.id ,telas.textura, telas.nombre as NombreTela, diseñotelas.diseño as diseno, colortelas.nombre as ColorTela,materialtelas.material,proveedores.nombre as proveedor
    from diseñotelas 
    join telas 
    on telas.iddiseñotela=diseñotelas.id
    join colortelas
    on telas.idcolortelas=colortelas.id
    join materialtelas
	on telas.idmaterialtela=materialtelas.id 
    join proveedores
    on telas.idproveedor=proveedores.id
    
    `)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

// select id as telasid , telas.telasid , telas.nombre as NombreTela, materialtelas.material, diseñotelas.diseño, proveedores.nombre as NombreProveedor, colortelas.nombre as ColorTela
//     from telas 
//     join diseñotelas 
//     on telas.iddiseñotela=diseñotelas.id
//     join colortelas
//     on telas.idcolortelas=colortelas.id
//     join materialtelas
//     on telas.idmaterialtela=materialtelas.id
//     join proveedores
//     on telas.idproveedor=proveedores.id
//     where telas.id= ${telasid}


module.exports = {
    getDatostelas,
    getDatos,
    postDatos,
    updateDatos,
    deleteDatos,
    getDatosOrdenes_detalles,
    getDatosOrdenes,
    getDatosbyID,
    getPDFordenes,
    getDatosDiseno,
    getDatosUsuarios,
    getDatosfichatecnica,
    getDatosbotones,
    getDatosetiquetas,
    getDatoshilos,
    getDatosreatas
}