import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
// Modulo De Diseño
import { DashboardComponent } from './diseño/paginas/dashboard/dashboard.component';
import { SidebarComponent } from './diseño/componentes/sidebar/sidebar.component';
import { NavbarComponent } from './diseño/componentes/navbar/navbar.component';
import { ChartComponent } from './diseño/componentes/chart/chart.component';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
