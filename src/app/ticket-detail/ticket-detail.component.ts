import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent {
  ticket!: Ticket;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,    
    private router: Router
  ) { }

  ngOnInit(): void {
    const ticketId = this.route.snapshot.paramMap.get('id');
  if (ticketId) {
    this.ticketService.getTicketById(ticketId).subscribe(
      ticket => {
        this.ticket = ticket;
      },
      error => {
        console.error('Error al obtener el ticket', error);
        // Manejo de errores o redireccionamiento
      }
    );
  }
  }
  editarTicket(): void {
    this.router.navigate(['/edit-ticket', this.ticket.ticketId]);
  }
}
