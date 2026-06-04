package com.deskflow.backend.ticket;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public List<TicketResponse> getAllTickets() {
        return ticketRepository.findAll()
                .stream()
                .map(TicketResponse::from)
                .toList();
    }

    public List<TicketResponse> getTicketsByStatus(TicketStatus status) {
        return ticketRepository.findByStatus(status)
                .stream()
                .map(TicketResponse::from)
                .toList();
    }

    public TicketResponse createTicket(TicketRequest request) {
        Ticket ticket = new Ticket();
        ticket.setTitle(request.getTitle());
        ticket.setDescription(request.getDescription());
        // status & createdAt werden automatisch via @PrePersist gesetzt
        return TicketResponse.from(ticketRepository.save(ticket));
    }

    public TicketResponse updateTicket(Long id, TicketRequest request) {
        Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket mit ID " + id + " nicht gefunden"));
        ticket.setTitle(request.getTitle());
        ticket.setDescription(request.getDescription());
        if (request.getStatus() != null) {
            ticket.setStatus(request.getStatus());
        }
        return TicketResponse.from(ticketRepository.save(ticket));
    }

    public void deleteTicket(Long id) {
        if (!ticketRepository.existsById(id)) {
            throw new RuntimeException("Ticket mit ID " + id + " nicht gefunden");
        }
        ticketRepository.deleteById(id);
    }
}