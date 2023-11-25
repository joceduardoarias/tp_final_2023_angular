import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../models/ticket.model';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent {
  ticket!: Ticket;

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadTicket();
  }

  loadTicket(): void {
    const ticketId = this.route.snapshot.paramMap.get('id');
    if (ticketId) {
      this.ticketService.getTicketById(ticketId).subscribe(
        ticket => this.ticket = ticket,
        error => console.error('Error al cargar el ticket', error)
      );
    }
  }

  onSubmit(): void {
    this.ticketService.editarTicket(this.ticket).subscribe(
      response => {
        console.log('Ticket actualizado', response);
        this.router.navigate(['/ticket-detail', this.ticket.ticketId]);
      },
      error => console.error('Error al actualizar el ticket', error)
    );
  }
}
