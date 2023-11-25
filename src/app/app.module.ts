import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { FormsModule } from '@angular/forms';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { ClienteDetailComponent } from './clientes/cliente-detail/cliente-detail.component';
import { ClienteEditComponent } from './clientes/cliente-edit/cliente-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsListComponent,
    TicketDetailComponent,
    TicketEditComponent,
    ClientesListComponent,
    ClienteDetailComponent,
    ClienteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
