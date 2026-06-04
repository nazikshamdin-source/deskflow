package com.deskflow.backend.ticket;

import java.time.LocalDateTime;

// DTO für ausgehende Responses (GET, POST, PUT)
// Kontrolliert exakt was der Client zu sehen bekommt
public class TicketResponse {

    private Long id;
    private String title;
    private String description;
    private TicketStatus status;
    private TicketPriority priority;
    private LocalDateTime createdAt;

    // Statische Factory-Methode: wandelt Entity → DTO um
    public static TicketResponse from(Ticket ticket) {
        TicketResponse dto = new TicketResponse();
        dto.id = ticket.getId();
        dto.title = ticket.getTitle();
        dto.description = ticket.getDescription();
        dto.status = ticket.getStatus();
        dto.priority = ticket.getPriority();
        dto.createdAt = ticket.getCreatedAt();
        return dto;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public TicketStatus getStatus() { return status; }
    public TicketPriority getPriority() { return priority; }
    public LocalDateTime getCreatedAt() { return createdAt; }
}
