import { Component } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService, private router: Router) { }
  
  gOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.getTickets().subscribe(
      (data: Ticket[]) => {
        this.tickets = data;
      },
      error => {
        console.error('Error al obtener tickets', error);
      }
    );
  }

  verDetalle(ticket: Ticket): void {
    this.router.navigate(['/tickets', ticket.ticketId]);
  }
  
}
