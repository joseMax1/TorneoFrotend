import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  {
    path: 'mostrar-resultados',
    component: ResultadoComponent,
    canActivate: [ValidadorSesionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadoRoutingModule { }
