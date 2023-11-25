import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetailComponent } from './clientes/cliente-detail/cliente-detail.component';
import { ClienteEditComponent } from './clientes/cliente-edit/cliente-edit.component';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';

const routes: Routes = [
  { path: 'tickets', component: TicketsListComponent },
  { path: 'tickets/:id', component: TicketDetailComponent },
  { path: 'edit-ticket', component: TicketEditComponent },
  { path: 'edit-ticket/:id', component: TicketEditComponent },
  { path: 'clientes', component: ClientesListComponent },
  { path: 'clientes/detalle/:id', component: ClienteDetailComponent },
  { path: 'clientes/editar/:id', component: ClienteEditComponent },
  { path: 'clientes/nuevo', component: ClienteEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
