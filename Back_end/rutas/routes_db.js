;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud');
  control1 = require('../controles/telas');



api.get('/route', control.getDatos)
api.post('/route', control.postDatos)
api.put('/route', control.updateDatos )
api.delete('/route', control.deleteDatos)

api.get('/routeF_usuarios',control.getDatosUsuarios)
api.get('/routetelasAPI',control.getDatostelas)
api.get('/routeF_ordenesdetalle', control.getDatosOrdenes_detalles)
api.get('/routeF_ordenes', control.getDatosOrdenes)
api.get('/routebyid', control.getDatosbyID)
api.get('/routepdf', control.getPDFordenes)
api.get('/routeF_fichadiseno',control.getDatosDiseno)



module.exports = api