import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent implements OnInit  {
  respuesta: any[]
  table_header: any


  constructor(private http: HttpClient) { }

  ngOnInit() {
  

    // this.getDataProductos()
    this.getData()
    this.table_header = [
      {
        id: 'N°',
        nombre : 'Nombre',
        dimensiones: 'Dimensiones',
        tipo: 'Tipo de Boton',
        idforma: 'Forma Boton',
        idcolorboton: 'Color Boton',
        material: 'Material',
        proveedor: 'Proveedor',


      }
    ]
  }
 
  
  respuestaProductos:any[]

  // getDataProductos=()=>{
  //   let tabla = 'botones'
  //   this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
  //   .subscribe(data => {
  //     this.respuestaProductos = data.datos
  // })
  // }
 


  getLocalStorage(){
    let id = localStorage.getItem("id")
    return id
  }
  getData = () => {
    let tabla = 'botones'
    this.http.get<any>(environment.API_URL + `botonesAPI?tabla=${this.getLocalStorage()}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }
  }

