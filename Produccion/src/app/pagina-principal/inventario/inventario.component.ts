import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  respuesta: any[]
  table_header: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData()
    this.table_header = [
      {
        id: 'N°',
        nombre: 'Nombre',
        textura: 'Textura',
        idcolortelas: 'Color tela',
        iddisenotela: 'Diseño Tela',
        idmaterialtela: 'Material Tela',
        idproveedor: 'Proveedor'
      }
    ]
  }

  getData = () => {
    let tabla = 'telas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

}

