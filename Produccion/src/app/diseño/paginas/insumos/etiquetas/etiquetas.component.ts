import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.scss']
})
export class EtiquetasComponent implements OnInit  {
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
        comentario: 'Comentario',
      }
    ]
  }
 
  
  respuestaProductos:any[]

  // getDataProductos=()=>{
  //   let tabla = 'telas'
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
    let tabla = 'etiquetas'
    this.http.get<any>(environment.API_URL + `etiquetasAPI?tabla=${this.getLocalStorage()}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }
  }

