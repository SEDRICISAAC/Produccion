import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { HeaderPrincipalComponent } from './pagina-principal/header-principal/header-principal.component';
import { InventarioComponent } from './pagina-principal/inventario/inventario.component';
import { InventariotelasComponent } from './pagina-principal/inventario/inventariotelas/inventariotelas.component';
import { HeaderInventarioComponent } from './pagina-principal/inventario/header-inventario/header-inventario.component';
import { InventariobotonesComponent } from './pagina-principal/inventario/inventariobotones/inventariobotones.component';
import { InventariohilosComponent } from './pagina-principal/inventario/inventariohilos/inventariohilos.component';
import { InventarioetiquetasComponent } from './pagina-principal/inventario/inventarioetiquetas/inventarioetiquetas.component';
import { InventarioreatasComponent } from './pagina-principal/inventario/inventarioreatas/inventarioreatas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PaginaPrincipalComponent,
    HeaderPrincipalComponent,
    InventarioComponent,
    HeaderInventarioComponent,
    InventariotelasComponent,
    InventariobotonesComponent,
    InventariohilosComponent,
    InventarioetiquetasComponent,
    InventarioreatasComponent
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
