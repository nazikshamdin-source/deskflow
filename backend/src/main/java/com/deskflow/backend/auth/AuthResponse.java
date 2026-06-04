package com.deskflow.backend.auth;

// DTO für die Antwort nach Login/Register – enthält nur den Token
public class AuthResponse {

    private String token;

    public AuthResponse(String token) {
        this.token = token;
    }

    public String getToken() { return token; }
}
