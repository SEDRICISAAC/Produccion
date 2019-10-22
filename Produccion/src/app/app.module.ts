import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Pagina Principal
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { HeaderPrincipalComponent } from './pagina-principal/header-principal/header-principal.component';
import { InventarioreatasComponent } from './pagina-principal/Inventarios/inventarioreatas/inventarioreatas.component';
import { InventarioetiquetasComponent } from './pagina-principal/Inventarios/inventarioetiquetas/inventarioetiquetas.component';
import { InventariohilosComponent } from './pagina-principal/Inventarios/inventariohilos/inventariohilos.component';
import { InventariobotonesComponent } from './pagina-principal/Inventarios/inventariobotones/inventariobotones.component';
import { InventariotelasComponent } from './pagina-principal/Inventarios/inventariotelas/inventariotelas.component';
import { HeaderInventarioComponent } from './pagina-principal/Inventarios/header-inventario/header-inventario.component';
// Modulo De Diseño Componentes
import { SidebarComponent } from './diseño/componentes/sidebar/sidebar.component';
import { NavbarComponent } from './diseño/componentes/navbar/navbar.component';
import { ChartComponent } from './diseño/componentes/chart/chart.component';
//Modulo De Diseño 
import { OrdenDeDisenoComponent } from './diseño/paginas/orden-de-diseno/orden-de-diseno.component';
import { DashboardComponent } from './diseño/paginas/dashboard/dashboard.component';

//Modulo De Diseño Insumos
import { TelasComponent } from './diseño/paginas/insumos/telas/telas.component';
import { HilosComponent } from './diseño/paginas/insumos/hilos/hilos.component';
import { BotonesComponent } from './diseño/paginas/insumos/botones/botones.component';
import { ReatasComponent } from './diseño/paginas/insumos/reatas/reatas.component';
import { EtiquetasComponent } from './diseño/paginas/insumos/etiquetas/etiquetas.component';
import { TablaDeInsumosComponent } from './diseño/paginas/orden-de-diseno/tabla-de-insumos/tabla-de-insumos.component';
import { OrdenDeProduccionComponent } from './produccion/paginas/orden-de-produccion/orden-de-produccion.component';
import { NavbarProduccionComponent } from './produccion/componentes/navbar-produccion/navbar-produccion.component';
import { SidebarProduccionComponent } from './produccion/componentes/sidebar-produccion/sidebar-produccion.component';
import { ChartProduccionComponent } from './produccion/componentes/chart-produccion/chart-produccion.component';
import { DashProduccionComponent } from './produccion/paginas/dash-produccion/dash-produccion.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PaginaPrincipalComponent,
    HeaderPrincipalComponent,
    HeaderInventarioComponent,
    InventariotelasComponent,
    InventariobotonesComponent,
    InventariohilosComponent,
    InventarioetiquetasComponent,
    InventarioreatasComponent,
    //Modulo De Diseño
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    ChartComponent,
    OrdenDeDisenoComponent,
    TelasComponent,
    HilosComponent,
    BotonesComponent,
    ReatasComponent,
    EtiquetasComponent,
    TablaDeInsumosComponent,
    OrdenDeProduccionComponent,
    NavbarProduccionComponent,
    SidebarProduccionComponent,
    ChartProduccionComponent,
    DashProduccionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
