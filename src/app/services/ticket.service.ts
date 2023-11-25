import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'https://web-service-dz1b.onrender.com/api/tickets'; // URL de tu API

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  getTicketById(id: string): Observable<Ticket> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Ticket>(url);
  }
  editarTicket(ticket: Ticket): Observable<any> {
    const url = `${this.apiUrl}/${ticket.ticketId}`;
    return this.http.put(url, ticket);
  }
}
