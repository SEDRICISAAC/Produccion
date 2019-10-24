import { Component, OnInit } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import Swal from 'sweetalert2';
import {Lista} from '../../../models/lista.model'

@Component({
  selector: 'app-orden-de-diseno',
  templateUrl: './orden-de-diseno.component.html',
  styleUrls: ['./orden-de-diseno.component.scss']
})
export class OrdenDeDisenoComponent implements OnInit  {

  table_header: any
  clienteForm: FormGroup
  detalleOrdenForm: FormGroup
  formularioOrden: FormGroup
  fichaTecnicaForm:FormGroup

  lista:Lista[]=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
    {id:9},
    {id:10},
    {id:11},

  ]

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.getDataTable()
    this.getDataTelas()
    this.getDataBotones()
    this.getDataHilos()
    this.getDataEtiquetas()
    this.getDataMarquillasMarca()
    this.getDataMarquillas()
    this.getDataInstrucciones()
    this.getDataMarquillasForma()
    this.getDataClientes()
    this.getDataTipoPrenda()
    this.getDataTallaPrenda()
    this.formularioCliente()
    this.formularioDetalleOrden()
    this.formulariOrden()
    ///////////////////orde
    this.getDataOrden()
    // this.getPDF()
    // ficha tecnica 
    this.formularioFicha()
    this.getDataEtiquetaBarra()
    this.getDataReata()



    this.table_header = [
      {
        id: 'N°',
        referencia: 'Referencia',
        coleccion: 'Coleccion',
        clientes: 'Cliente',
        descripcion: 'Descripcion',
        aprobacion:'Aprobado Por:',
        departamentoaprovador: 'Departamento',
        elaboracion: 'Elaborado Por:',
        departamentodis: 'Departamento',
        fechaelab : 'Fecha de elaboracion',
        // fichatecnica:'Ficha Tecnica'
        // <th>{{item.fichatecnica }}</th>

      }
    ]
  }

  formularioCliente(){
    this.clienteForm = this.fb.group({
      identificacion: ['',[Validators.required, Validators.pattern('([0|1|2]{1})([0-9]{9})')]],
      nombres: ['',[Validators.required, Validators.pattern('[A-Za-z]{1}[a-z]{3,30}')]],
      apellidos: ['',[Validators.required, Validators.pattern('[A-Za-z]{1}[a-zñ]{3,30}')]],
      telefonos: ['',[Validators.required, Validators.pattern('(((09)|(08)|(06)){1})([0-9]{8})')]],
      direcciones: ['',[Validators.required]]
    })
  }

  formularioDetalleOrden(){
    this.detalleOrdenForm = this.fb.group({
      f_tipoPrenda: ['',[Validators.required]],
      f_tallaPrenda: ['',[Validators.required]],
      f_etiquetas: ['',[Validators.required]],
      f_botones: ['',[Validators.required]],
      f_hilos: ['',[Validators.required]],
      f_telas: ['',[Validators.required]],
      f_cantidadEtiquetas: ['',[Validators.required, Validators.pattern('[0-9]{1,3}')]],
      f_cantidadBotones: ['',[Validators.required, Validators.pattern('[0-9]{1,3}')]],
      f_cantidadHilos: ['',[Validators.required, Validators.pattern('[0-9]{1,3}')]],
      f_cantidadTelas: ['',[Validators.required, Validators.pattern('[0-9]{1,3}')]]
    })
  }

  // ficha tecnica
  formularioFicha(){
    this.fichaTecnicaForm = this.fb.group({
      codigo: ['',[Validators.required]],
      tela_principal: ['',[Validators.required]],
      cantidad_tela_principal: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      combinacion1: ['',[Validators.required]],
      cantidadCombinacion1: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      combinacion2: ['',[Validators.required]],
      cantidadCombinacion2: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      hilo: ['',[Validators.required]],
      cantidadHilo: ['',[Validators.required, Validators.pattern]],
      boton18: ['',[Validators.required]],
      cantidadBoton18: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      boton14: ['',[Validators.required]],
      cantidadBoton14: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      marquilla1: ['',[Validators.required]],
      cantidadMarquilla1: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      cantidadMarquilla2: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      cantidadMarquilla3: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      cantidadMarquilla4: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      cantidadMarquilla5: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      cantidadMarquilla6: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      cantidadMarquilla7: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      marquilla8: ['',[Validators.required]],
      cantidadMarquilla8: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      instruccioncui: ['',[Validators.required,Validators.pattern]],
      etiquetas: ['',[Validators.required]],
      etiquetas1: ['',[Validators.required]],
      reata: ['',[Validators.required]],
      cantidadReata: ['',[Validators.required, Validators.pattern('[0-9]{1,8}')]],
      consumoEntretela: ['',[Validators.required]],
     
    })
  }

  //ORDEN DE DISENO
  formulariOrden(){
    this.formularioOrden = this.fb.group({
      referencia: ['',[Validators.required, Validators.pattern('([0-9]{1,30})')]],
      coleccion: ['',[Validators.required, Validators.pattern('[A-Za-z]{1}[a-z]{3,30}')]],
      clientes:  ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      aprobacion:  ['',[Validators.required]],
      departamentoaprovador: ['',[Validators.required]],
      elaboracion:  ['',[Validators.required]],
      departamentodis:  ['',[Validators.required]],
      
    })
  }
  ///////////////////////
  //PAGINA PRINCIPAL ORDEN DE TRABAJO -------------------------------------------------------------------------------
  id: number
  nuevafecha = new Date()
  fecha_orden = this.nuevafecha.getDate() + "/" + (this.nuevafecha.getMonth() +1) + "/" + this.nuevafecha.getFullYear()
  idclientes: number
  respuestaClientes: any[]
  respuesta: any[]
  // fechaelab = this.nuevafecha.getDate() + "/" + (this.nuevafecha.getMonth() +1) + "/" + this.nuevafecha.getFullYear()
  respuestaOrden:any[]
  /////////////////////////////////////////////
  
  ////////////////////////////////////////////
  dataID: number

  getDataTable = () => {
    let tabla = 'F_ordenes'
    this.http.get<any>(environment.API_URL + `${tabla}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

  ///////////////////////////////////////////////// Trae los datos de la fiche de diseño
  getDataOrden = () => {
    let tabla = 'F_fichadiseno'
    this.http.get<any>(environment.API_URL + `${tabla}`)
        .subscribe(data => {
            this.respuestaOrden  = data.datos
        })
  }
  
  ////////////////////////////////////////////////


  postDataTable = () => {
    let tabla = 'ordenes'
    let register = {tabla: tabla, datos: [{id: this.id, fecha_orden: this.fecha_orden, idclientes: this.idclientes}]}
    this.http.post(environment.API_URL, register)
    .subscribe( data => {
      // this.postData = data
    })
    window.location.reload()
  }
////////////////////////////////////////////////// envia los datos del diseño ////////////////////////////////////////////////////////////////////////////////////////////



postDataOrdenDis = () => {
  let referencia = this.formularioOrden.get('referencia').value
  let coleccion = this.formularioOrden.get('coleccion').value
  let cliente = this.formularioOrden.get('clientes').value
  let descripcion = this.formularioOrden.get('descripcion').value
  let aprobacion = this.formularioOrden.get('aprobacion').value
  let departamentoaprovador = this.formularioOrden.get('departamentoaprovador').value
  let elaboracion = this.formularioOrden.get('elaboracion').value
  let departamentodis = this.formularioOrden.get('departamentodis').value


  let tabla = 'fichadiseno'
  let register = {tabla: tabla, datos: [{ 
                                          id: this.idOrdenes, 
                                          referencia: referencia, 
                                          coleccion: coleccion,
                                          clientes: cliente, 
                                          descripcion: descripcion, 
                                          aprobacion: aprobacion,
                                          departamentoaprovador: departamentoaprovador, 
                                          elaboracion: elaboracion, 
                                          departamentodis: departamentodis, 
                                          fechaelab:this.fecha_orden

                                        }]}
  if(this.formularioOrden.valid){
    this.http.post(environment.API_URL, register)
    .subscribe( data => {
      // this.postData = data
    })
    window.location.reload()
    console.log('okdato')
  }else{
    Swal.fire('Datos Invalidos')
  }

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getDataClientes = () => {
    let tabla = 'clientes'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
    .subscribe(data => {
      this.respuestaClientes = data.datos
    })
  }

  deleteDataTable = (value) => {
    let tabla = 'ordenes'
    this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { })
    window.location.reload()
  }

  getDatabyID = (value) => {
    let tabla = 'fichadiseno'
    this.http.get<any>(environment.API_URL + `F_fichatecnica?tabla=${tabla}&&codigo=${value}`)
    .subscribe( data => { 
      this.codigo = data.datos[0].codigo
      localStorage.setItem("codigo", this.codigo.toString() )
    })
  }
  //PAGINA PRINCIPAL ORDEN DE TRABAJO -------------------------------------------------------------------------------
codigo:number
  referencia:number[]
  // GET DATA TO MODAL DETALLE ORDEN --------------------------------------------------------------------------------
  respuestaTelas: any[]
  respuestaBotones: any[]
  respuestaHilos: any[]
  respuestaEtiquetas: any[]
  respuestaTipoPrenda: any[]
  respuestaTallaPrenda: any[]
  respuestaMarquillasMarca:any[]
  respuestaMarquillas:any[]
  respuestaEtiquetaBarra:any[]
  respuestaInstrucciones:any[]
  respuestaMarquillasForma:any[]
  respuestaReatas:any[]

  
  getDataTelas = () => {
    let tabla = 'telas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaTelas = data.datos
        })
  }

  getDataBotones = () => {
    let tabla = 'botones'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaBotones = data.datos
        })
  }

  getDataHilos = () => {
    let tabla = 'hilos'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaHilos = data.datos
        })
  }

  getDataEtiquetas= () => {
    let tabla = 'etiquetas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaEtiquetas = data.datos
        })
  }
  getDataMarquillasMarca= () => {
    let tabla = 'marquillasmarca'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaMarquillasMarca = data.datos
        })
  }

  getDataMarquillas= () => {
    let tabla = 'marquillas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaMarquillas = data.datos
        })
  }

  getDataInstrucciones= () => {
    let tabla = 'instruccionescuidado'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaInstrucciones = data.datos
        })
  }


  getDataMarquillasForma= () => {
    let tabla = 'marquillasforma'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaMarquillasForma = data.datos
        })
  }
  getDataEtiquetaBarra= () => {
    let tabla = 'etiquetascodigobarra'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaEtiquetaBarra = data.datos
        })
  }
  

  getDataTipoPrenda= () => {
    let tabla = 'tipo_prendas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaTipoPrenda = data.datos
        })
  }
  getDataReata= () => {
    let tabla = 'reatas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaReatas = data.datos
        })
  }
  getDataTallaPrenda= () => {
    let tabla = 'talla_prendas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuestaTallaPrenda = data.datos
        })
  }
  // GET DATA TO MODAL DETALLE ORDEN --------------------------------------------------------------------------------
idorden:number


  // Ficha Tecnica
  postDataDetalleFicha = () => {
    let codigo = this.fichaTecnicaForm.get('codigo').value
    let tela_principal = this.fichaTecnicaForm.get('tela_principal').value
    let cantidad_tela_principal = this.fichaTecnicaForm.get('cantidad_tela_principal').value
    let combinacion1 = this.fichaTecnicaForm.get('combinacion1').value
    let cantidadCombinacion1 = this.fichaTecnicaForm.get('cantidadCombinacion1').value
    let combinacion2 = this.fichaTecnicaForm.get('combinacion2').value
    let cantidadCombinacion2= this.fichaTecnicaForm.get('cantidadCombinacion2').value
    let hilo  = this.fichaTecnicaForm.get('hilo').value
    let cantidadHilo = this.fichaTecnicaForm.get('cantidadHilo').value
    let boton18 = this.fichaTecnicaForm.get('boton18').value
    let cantidadBoton18 = this.fichaTecnicaForm.get('cantidadBoton18').value
    let boton14 = this.fichaTecnicaForm.get('boton14').value
    let cantidadBoton14 = this.fichaTecnicaForm.get('cantidadBoton14').value
    let marquilla1 = this.fichaTecnicaForm.get('marquilla1').value
    let cantidadMarquilla1 = this.fichaTecnicaForm.get('cantidadMarquilla1').value
    let cantidadMarquilla2 = this.fichaTecnicaForm.get('cantidadMarquilla2').value
    let cantidadMarquilla3 = this.fichaTecnicaForm.get('cantidadMarquilla3').value
    let cantidadMarquilla4 = this.fichaTecnicaForm.get('cantidadMarquilla4').value
    let cantidadMarquilla5 = this.fichaTecnicaForm.get('cantidadMarquilla5').value
    let cantidadMarquilla6 = this.fichaTecnicaForm.get('cantidadMarquilla6').value
    let cantidadMarquilla7 = this.fichaTecnicaForm.get('cantidadMarquilla7').value
    let instruccioncui = this.fichaTecnicaForm.get('instruccioncui').value
    let marquilla8 = this.fichaTecnicaForm.get('marquilla8').value
    let cantidadMarquilla8 = this.fichaTecnicaForm.get('cantidadMarquilla8').value
    let reata = this.fichaTecnicaForm.get('reata').value
    let cantidadReata = this.fichaTecnicaForm.get('cantidadReata').value
    let etiquetas = this.fichaTecnicaForm.get('etiquetas').value
    let etiquetas1 = this.fichaTecnicaForm.get('etiquetas1').value
    let consumoEntretela = this.fichaTecnicaForm.get('consumoEntretela').value
   
    let tabla = 'fichatecnica'
    let register = {tabla: tabla, datos: [{ 
                                            codigo: codigo , 
                                            telaprincipal:tela_principal,
                                            cantidadtelaprincipal: cantidad_tela_principal,
                                            combinacion1:combinacion1,
                                            cantidadcombinacion1:cantidadCombinacion1,
                                            combinacion2: combinacion2,
                                            cantidadcombinacion2: cantidadCombinacion2,
                                            hilo: hilo ,
                                            consumohilo: cantidadHilo,
                                            boton18: boton18,
                                            cantidadboton18: cantidadBoton18,
                                            boton14: boton14  , 
                                            cantidadboton14: cantidadBoton14 , 
                                            marquillamarca: marquilla1 , 
                                            cantidadmarquillamarca: cantidadMarquilla1 , 
                                            cantidadmarquillats: cantidadMarquilla2 , 
                                            cantidadmarquillatm: cantidadMarquilla3, 
                                            cantidadmarquillatl: cantidadMarquilla4 , 
                                            cantidadmarquillatxl: cantidadMarquilla5 ,
                                            cantidadmarquillatxxl: cantidadMarquilla6 ,  
                                            cantidadmarquillatxxxl: cantidadMarquilla7 , 
                                            instruccioncuidado:instruccioncui,
                                            marquillaforma:marquilla8,
                                            cantidadmarquillaforma:cantidadMarquilla8,
                                            reata:reata,
                                            cantidadreata:cantidadReata,
                                            etiqueta:etiquetas,
                                            etiquetacodbarras:etiquetas1,
                                            consumoentretela:consumoEntretela,
                                          }]}
    if(this.fichaTecnicaForm.valid){
      this.http.post(environment.API_URL, register)
      .subscribe( data => {
        // this.postData = data
      })
      window.location.reload()
      // console.log('superbien')
    }else{
      Swal.fire('Datos Invalidos')
    }

  }

  //POST MODAL CLIENTES -----------------------------------------------------------------------
  postDataClientes = () => {
    let identificacion = this.clienteForm.get('identificacion').value
    let nombres = this.clienteForm.get('nombres').value
    let apellidos = this.clienteForm.get('apellidos').value
    let telefonos = this.clienteForm.get('telefonos').value
    let direcciones = this.clienteForm.get('direcciones').value

    let tabla = 'clientes'
    let register = {tabla: tabla, datos: [{ 
                                            identificacion: identificacion, 
                                            nombre: nombres,
                                            apellido: apellidos, 
                                            telefono: telefonos, 
                                            direccion: direcciones
                                          }]}
    if(this.clienteForm.valid){
      this.http.post(environment.API_URL, register)
      .subscribe( data => {
        // this.postData = data
      })
      window.location.reload()
    }else{
      Swal.fire('Datos Invalidos')
    }

  }
//POST MODAL CLIENTES ------------------------------------------------------------------------

// POST MODAL DETALLE ORDEN --------------------------------------------------------------------------------
  idOrdenes: number

  postDataDetalleOrden = () => {
    let f_tipoPrenda = this.detalleOrdenForm.get('f_tipoPrenda').value
    let f_tallaPrenda = this.detalleOrdenForm.get('f_tallaPrenda').value
    let f_etiquetas = this.detalleOrdenForm.get('f_etiquetas').value
    let f_cantidadEtiquetas = this.detalleOrdenForm.get('f_cantidadEtiquetas').value
    let f_botones = this.detalleOrdenForm.get('f_botones').value
    let f_cantidadBotones = this.detalleOrdenForm.get('f_cantidadBotones').value
    let f_hilos = this.detalleOrdenForm.get('f_hilos').value
    let f_cantidadHilos = this.detalleOrdenForm.get('f_cantidadHilos').value
    let f_telas = this.detalleOrdenForm.get('f_telas').value
    let f_cantidadTelas = this.detalleOrdenForm.get('f_cantidadTelas').value

    let tabla = 'ordenes_detalle'
    let register = {tabla: tabla, datos: [{ 
                                            idtela: f_telas,
                                            idboton: f_botones,
                                            idhilo: f_hilos,
                                            idetiqueta: f_etiquetas,
                                            idtipoprenda: f_tipoPrenda,
                                            idtallaprendas: f_tallaPrenda,
                                            tela_cantidad: f_cantidadTelas,
                                            boton_cantidad: f_cantidadBotones,
                                            hilo_cantidad: f_cantidadHilos,
                                            etiqueta_cantidad: f_cantidadEtiquetas
                                          }]}
    if(this.detalleOrdenForm.valid){
      this.http.post(environment.API_URL, register)
      .subscribe( data => {
        // this.postData = data
      })
      window.location.reload()
    }else{
      Swal.fire('Datos Invalidos')
    }

  }

// POST MODAL DETALLE ORDEN --------------------------------------------------------------------------------

// JSPDF

  // docPdf: jsPDF;
  // pdfData: any[]

  // getPDF = () => {
  //   let ruta = 'pdf'
  //   this.http.get<any>(environment.API_URL + `${ruta}`)
  //   .subscribe(data => {
  //     this.pdfData = data.datos
  //   })
  //   console.log(this.pdfData)
  // }

//   pdf() {
//     let textSize=10;
//     let anchoTotal=210
//     let altoTotal=290
//     let margenSup=25
//     let margeninf=25
//     let margeniz=25
//     let margende= 25
//     let anchouso= anchoTotal-margeniz-margende
//     let altouso=altoTotal-margenSup-margeninf
//     let x=25;
//     let y=25;

//     let doc = new jsPDF({
//       orientation: 'landscape',
//       unit: 'mm',
//       format: 'A4',
//       compress: true,
//     })
//     var headers = 
//     {
//       f_clientes: "Cliente",
//       fecha_orden: "Fecha",
//       f_telas: "Tipo de tela",
//       f_botones: "Tipo de boton",
//       f_hilos: "Tipo de hilo",
//       f_etiqueta: "Tipo de etiqueta",
//       boton_cantidad: "Cantidad botones",
//       tela_cantidad: "Cantidad tela(metros)",
//       hilo_cantidad: "Cantidad hilo",
//       etiqueta_cantidad: "Cantidad etiquetas",
//       f_tipoprenda: "Tipo de prenda",
//       f_tallaprendas: "Talla de la prenda"
//     };
//     doc.autoTable({
//       head: [headers],
//       body: this.pdfData, colSpan: 2, rowSpan: 2, styles: {halign: 'center'},
//     })
//     doc.save('OrdenesProduccion.pdf')
//   }

// // JSPDF
}
