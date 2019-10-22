import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { HeaderPrincipalComponent } from './pagina-principal/header-principal/header-principal.component';
// pagina principal
import { InventariobotonesComponent } from './pagina-principal/Inventarios/inventariobotones/inventariobotones.component';
import { InventarioetiquetasComponent } from './pagina-principal/Inventarios/inventarioetiquetas/inventarioetiquetas.component';
import { InventariohilosComponent } from './pagina-principal/Inventarios/inventariohilos/inventariohilos.component';
import { InventarioreatasComponent } from './pagina-principal/Inventarios/inventarioreatas/inventarioreatas.component';
import { InventariotelasComponent } from './pagina-principal/Inventarios/inventariotelas/inventariotelas.component';
// modulo de diseño
import { DashboardComponent } from './diseño/paginas/dashboard/dashboard.component';
import { OrdenDeDisenoComponent } from './diseño/paginas/orden-de-diseno/orden-de-diseno.component';
//modulo de diseño insumos
import { TelasComponent } from './diseño/paginas/insumos/telas/telas.component';
import { ReatasComponent } from './diseño/paginas/insumos/reatas/reatas.component';
import { EtiquetasComponent } from './diseño/paginas/insumos/etiquetas/etiquetas.component';
import { HilosComponent } from './diseño/paginas/insumos/hilos/hilos.component';
import { BotonesComponent } from './diseño/paginas/insumos/botones/botones.component';
// tabla de insumos
import { TablaDeInsumosComponent } from './diseño/paginas/orden-de-diseno/tabla-de-insumos/tabla-de-insumos.component';
// modulo de produccion
import { OrdenDeProduccionComponent } from './produccion/paginas/orden-de-produccion/orden-de-produccion.component';
import { DashProduccionComponent } from './produccion/paginas/dash-produccion/dash-produccion.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'inicio', component: InicioComponent },
   { path: 'principal', component: PaginaPrincipalComponent },
   { path: 'headerprincipal', component: HeaderPrincipalComponent},
// pagina principal
   { path: 'Botones', component: InventariobotonesComponent },
   { path: 'Etiquetas', component: InventarioetiquetasComponent },
   { path: 'Hilos', component: InventariohilosComponent },
   { path: 'Reatas', component: InventarioreatasComponent },
   { path: 'Telas', component: InventariotelasComponent },
// modulo de diseño paginas
   { path: 'Dash', component:DashboardComponent },
   { path: 'Orden De Diseño', component: OrdenDeDisenoComponent },
   
// modulo de diseño paginas insumos
{ path: 'telas', component:TelasComponent },
{ path: 'reatas', component:ReatasComponent },
{ path: 'botones', component:BotonesComponent },
{ path: 'etiquetas', component:EtiquetasComponent },
{ path: 'hilos', component:HilosComponent },
// tabla de insumos
{ path: 'tabla de insumos', component:TablaDeInsumosComponent },

// modulo de produccion
{ path: 'OrdenProduccion', component:OrdenDeProduccionComponent },
{ path: 'DashProduccion', component:DashProduccionComponent },




   







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
