package com.deskflow.backend.ticket;

// DTO für eingehende Requests (POST & PUT)
// Der Client kann nur title, description und status schicken
// id und createdAt werden IMMER vom Server gesetzt – nie vom Client
public class TicketRequest {

    private String title;
    private String description;
    private TicketStatus status;

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public TicketStatus getStatus() { return status; }
    public void setStatus(TicketStatus status) { this.status = status; }
}
