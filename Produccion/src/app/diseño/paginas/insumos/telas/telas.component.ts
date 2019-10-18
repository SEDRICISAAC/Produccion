import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-telas',
  templateUrl: './telas.component.html',
  styleUrls: ['./telas.component.scss']
})
export class TelasComponent implements OnInit  {
  respuesta: any[]
  table_header: any


  constructor(private http: HttpClient) { }

  ngOnInit() {
  

    this.getDataProductos()
    this.getData()
    this.table_header = [
      {
        id: 'N°',
        nombretela : 'Nombre',
        textura: 'Textura',
        colortela: 'Color tela',
        diseno: 'Diseño Tela',
        material: 'Material Tela',
        proveedor: 'Proveedor'
      }
    ]
  }
 
  
  respuestaProductos:any[]

  getDataProductos=()=>{
    let tabla = 'telas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
    .subscribe(data => {
      this.respuestaProductos = data.datos
  })
  }
 


  getLocalStorage(){
    let id = localStorage.getItem("id")
    return id
  }
  getData = () => {
    let tabla = 'telas'
    this.http.get<any>(environment.API_URL + `telasAPI?tabla=${this.getLocalStorage()}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }
  }

