
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let getDatostelas = (req, res) => {
    let id = req.query.id
    db.raw(`select id, (select f_telas(idtela)) as idtela, nombre, textura, idcolortela, iddiseñotela, idproveedor from telas where id = ${id} order by id desc`)    
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
module.exports ={
    getDatostelas
}