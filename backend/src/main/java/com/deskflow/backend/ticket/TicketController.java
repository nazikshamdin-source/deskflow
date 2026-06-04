package com.deskflow.backend.ticket;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping
    public List<TicketResponse> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @GetMapping("/status/{status}")
    public List<TicketResponse> getByStatus(@PathVariable TicketStatus status) {
        return ticketService.getTicketsByStatus(status);
    }

    @PostMapping
    public ResponseEntity<TicketResponse> createTicket(@RequestBody TicketRequest request) {
        return ResponseEntity.ok(ticketService.createTicket(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TicketResponse> updateTicket(@PathVariable Long id,
                                                       @RequestBody TicketRequest request) {
        return ResponseEntity.ok(ticketService.updateTicket(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
        return ResponseEntity.noContent().build();
    }
}