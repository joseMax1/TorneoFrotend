import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { CrearTablaComponent } from './crear-tabla/crear-tabla.component';

const routes: Routes = [
  {
    path: 'tabla-resultados',
    component: CrearTablaComponent,
    canActivate: [ValidadorSesionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaRoutingModule { }
