import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { UbigeoComponent } from './components/ubigeos/ubigeo.component';

const routes: Routes = [
  { path: "cliente", component: ClienteComponent },
  { path: "proveedor", component: ProveedorComponent },
  { path: "ubigeos",component:UbigeoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
