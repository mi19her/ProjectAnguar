import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // importar libreria para rutear
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PosicionBarcosComponent } from './posicion-barcos/posicion-barcos.component';
import { TableroRivalComponent } from './tablero-rival/tablero-rival.component';
import { TuTableroComponent } from './tu-tablero/tu-tablero.component';

const appRoutes: Routes = [ // areglo de rutas, que tiene un objeto de rutas
  { path: '', component: InicioComponent }, // nos indica en la url a que componente llamar
  { path: 'inicio', component: InicioComponent },
  { path: 'posicion-barcos', component: PosicionBarcosComponent },
  { path: 'tablero-rival/:uid', component: TableroRivalComponent },
  { path: 'tu-tablero', component: TuTableroComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PosicionBarcosComponent,
    TableroRivalComponent,
    TuTableroComponent
  ],
  imports: [
    BrowserModule, // los modulos lo que hace es extender  dependiendo de lo que le usuario hace, compara las rutas
    RouterModule.forRoot(appRoutes), // recibe las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
