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
import { ModulodeDisenoComponent } from './modulo-de-diseño/modulode-diseno/modulode-diseno.component';
import { FichaDeDisenoComponent } from './modulo-de-diseño/modulode-diseno/ficha-de-diseno/ficha-de-diseno.component';



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
// modulo de diseño
   { path: 'Diseño', component: ModulodeDisenoComponent },
   { path: 'Ficha De Diseño', component: FichaDeDisenoComponent },

   







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
