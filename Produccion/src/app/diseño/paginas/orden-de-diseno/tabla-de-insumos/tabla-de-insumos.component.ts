import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tabla-de-insumos',
  templateUrl: './tabla-de-insumos.component.html',
  styleUrls: ['./tabla-de-insumos.component.scss']
})
export class TablaDeInsumosComponent implements OnInit{

  respuesta: any[]
  table_header: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData()
    this.table_header = [
      {
        id: 'Nº',
        codigo: 'codigo' , 
        telaprincipal:'Tela principal',
        cantidadtelaprincipal:'Cantidad',
        combinacion1:'Combinacion 1',
        cantidadcombinacion1:'Cantidad',
        combinacion2: 'Combinacion 2',
        cantidadcombinacion2: 'Cantidad',
        hilo: 'Hilo' ,
        consumohilo: 'Cantidad',
        boton18: 'Boton 18',
        cantidadboton18: 'Cantidad',
        boton14: 'Boton 14', 
        cantidadboton14:'Cantidad' , 
        marquillamarca:'Marca' , 
        cantidadmarquillamarca: 'Cantidad' , 
        cantidadmarquillats: 'Marquilla T/S' , 
        cantidadmarquillatm: 'Marquilla T/M', 
        cantidadmarquillatl: 'Marquilla T/L' , 
        cantidadmarquillatxl: 'Marquilla T/XL' ,
        cantidadmarquillatxxl: 'Marquilla T/XXL' ,  
        cantidadmarquillatxxxl: 'Marquilla T/XXXL' , 
        instruccioncuidado:'Instruccion Cuidado',
        marquillaforma:'Forma',
        cantidadmarquillaforma:'Cantidad',
        reata:'Reata',
        cantidadreata:'Cantidad',
        etiqueta:'Etiqueta',
        etiquetacodbarras:'Etiqueta Codigo De Barras',
        consumoentretela:'Consumo Entretela',
      }
    ]
  }

  getLocalStorage(){
    let id = localStorage.getItem("codigo")
    return id
  }

  getData = () => {
    this.http.get<any>(environment.API_URL + `f_fichatecnica?codigo=${this.getLocalStorage()}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

  deleteDataTable = (value) => {
    let tabla = 'fichatecnica'
    this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { })
  }

}
