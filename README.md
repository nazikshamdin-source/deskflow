# DeskFlow 🎫

Ein selbst entwickeltes Ticket-Management-System als Webanwendung.  
Gebaut als Lernprojekt zur Vorbereitung auf das Praktikum in der Anwendungsentwicklung bei der Finanz Informatik (ab 01.08.2026).

---

## 🎯 Ziel des Projekts

- Praktische Erfahrung mit **Full-Stack-Entwicklung** sammeln
- **Java & Spring Boot** vor dem Praktikum kennenlernen
- Eine echte Webanwendung **online stellen**
- Vorzeigbares Projekt für Kollegen in der Anwendungsentwicklung

---

## 🛠️ Tech-Stack

| Schicht   | Technologie                           | Status     |
|-----------|---------------------------------------|------------|
| Backend   | Java 21 + Spring Boot                 | ⏳ Geplant |
| Datenbank | PostgreSQL                            | ⏳ Geplant |
| Auth      | Spring Security + JWT                 | ⏳ Geplant |
| Frontend  | React + TypeScript + Vite             | ⏳ Geplant |
| Styling   | Tailwind CSS                          | ⏳ Geplant |
| Deployment| Railway (Backend) + Vercel (Frontend) | ⏳ Geplant |

---

## ✨ Funktionen

### MVP
- [ ] Benutzer registrieren & einloggen (JWT)
- [ ] Tickets erstellen, bearbeiten, schließen
- [ ] Tickets nach Status filtern (Offen / In Bearbeitung / Gelöst)
- [ ] Kommentare auf Tickets

### Erweiterungen
- [ ] Rollen: Admin, Agent
- [ ] Dashboard mit Statistiken
- [ ] Deployment (live erreichbar)

---

## 📅 8-Wochen-Lernplan

### Woche 1 — Entwicklungsumgebung & Git
**Ziel:** Alles installieren, erstes Java-Projekt starten  
**Zeit:** ~5–6 Std. | **Status:** ⏳ Ausstehend

**Aufgaben:**
- [ ] IntelliJ IDEA Community oder VS Code + Extension Pack for Java installieren
- [ ] Java 21 (JDK) von adoptium.net installieren
- [ ] PostgreSQL + DBeaver installieren
- [ ] GitHub-Account erstellen, Git installieren, erstes Repo anlegen
- [ ] Node.js & npm installieren
- [ ] „Hello World" in Java zum Laufen bringen

**Ressourcen:** adoptium.net · postgresql.org · github.com  
**Meilenstein:** ✅ Du kannst „Hello World" in Java und JavaScript ausführen

---

### Woche 2 — Spring Boot Grundlagen
**Ziel:** Erste REST-API – Tickets erstellen & abrufen  
**Zeit:** ~6–7 Std. | **Status:** ⏳ Ausstehend

**Aufgaben:**
- [ ] start.spring.io öffnen → Projekt mit Spring Web, Spring Data JPA, PostgreSQL generieren
- [ ] Erste Entity erstellen: Ticket-Klasse mit id, title, description, status, createdAt
- [ ] REST-Controller bauen: GET /tickets, POST /tickets
- [ ] Repository-Interface anlegen (Spring JPA erledigt SQL automatisch)
- [ ] API mit Postman oder Insomnia testen

**Ressourcen:** start.spring.io · spring.io/guides · Postman (kostenlos)  
**Meilenstein:** ✅ Du kannst Tickets per HTTP-Request speichern und abrufen

---

### Woche 3 — Datenbank & vollständiges CRUD
**Ziel:** Tickets bearbeiten, löschen und filtern  
**Zeit:** ~5–6 Std. | **Status:** ⏳ Ausstehend

**Aufgaben:**
- [ ] Status-Enum einführen: OPEN, IN_PROGRESS, RESOLVED
- [ ] PUT /tickets/{id} implementieren – Ticket aktualisieren
- [ ] DELETE /tickets/{id} implementieren
- [ ] Filter nach Status: GET /tickets?status=OPEN
- [ ] DTO-Pattern kennenlernen

**Ressourcen:** baeldung.com/spring-data-jpa · docs.spring.io  
**Meilenstein:** ✅ Vollständige CRUD-API für Tickets läuft stabil

---

### Woche 4 — Authentifizierung mit JWT
**Ziel:** Benutzer registrieren, einloggen, sichere Endpunkte  
**Zeit:** ~7–8 Std. | **Status:** ⏳ Ausstehend

> ⚠️ Anspruchsvollste Woche – plane etwas mehr Zeit ein

**Aufgaben:**
- [ ] User-Entity erstellen mit email, password (BCrypt), role
- [ ] Spring Security einbinden – /auth/register und /auth/login
- [ ] JWT-Token: nach Login bekommt der User ein Token
- [ ] Endpunkte absichern: nur eingeloggte User können Tickets sehen
- [ ] Konzept stateless vs. stateful Auth verstehen

**Ressourcen:** jwt.io · baeldung.com/spring-security-jwt  
**Meilenstein:** ✅ Login/Registrierung funktioniert, geschützte Endpunkte nur mit Token erreichbar

---

### Woche 5 — React-Projekt & Login-Seite
**Ziel:** Frontend aufsetzen, erste UI-Komponenten bauen  
**Zeit:** ~6–7 Std. | **Status:** ⏳ Ausstehend

**Aufgaben:**
- [ ] Vite + React + TypeScript Projekt erstellen: `npm create vite@latest`
- [ ] Tailwind CSS installieren
- [ ] Login-Formular bauen: E-Mail, Passwort, Button
- [ ] fetch() API: POST-Request an Spring-Backend, JWT-Token speichern
- [ ] React Router: Seiten-Navigation einrichten (Login → Dashboard)

**Ressourcen:** vitejs.dev · tailwindcss.com · react-router.com  
**Meilenstein:** ✅ Login-Seite verbindet sich mit dem Backend und speichert den Token

---

### Woche 6 — Ticket-Dashboard bauen
**Ziel:** Tickets anzeigen, erstellen und filtern  
**Zeit:** ~7–8 Std. | **Status:** ⏳ Ausstehend

**Aufgaben:**
- [ ] Ticket-Liste: alle Tickets vom Backend laden und als Karten anzeigen
- [ ] Status-Badges: farbige Labels für OPEN / IN_PROGRESS / RESOLVED
- [ ] Neues Ticket: Modal oder Formular zum Erstellen
- [ ] Filter-Buttons: Tickets nach Status filtern
- [ ] useEffect & useState verstehen

**Ressourcen:** react.dev/learn  
**Meilenstein:** ✅ Dashboard zeigt alle Tickets, Filter funktioniert, neue Tickets können erstellt werden

---

### Woche 7 — Feinschliff & Rollen
**Ziel:** Admin vs. Agent, Kommentare, sauberer Code  
**Zeit:** ~6–7 Std. | **Status:** ⏳ Ausstehend

**Aufgaben:**
- [ ] Rollen-System: ADMIN kann alle Tickets sehen/löschen, AGENT nur eigene
- [ ] Kommentare auf Tickets: neue Entity Comment
- [ ] Einfaches Dashboard mit Statistiken (offene Tickets, gelöste diese Woche)
- [ ] Code aufräumen: Fehlerbehandlung verbessern
- [ ] README.md mit Setup-Anleitung vervollständigen

**Ressourcen:** keepachangelog.com  
**Meilenstein:** ✅ Projekt sieht aus wie ein echtes System, GitHub-Repo ist vorzeigbar

---

### Woche 8 — Deployment & Abschluss
**Ziel:** Projekt live stellen und präsentieren können  
**Zeit:** ~5–6 Std. | **Status:** ⏳ Ausstehend

**Aufgaben:**
- [ ] Backend auf Railway.app deployen (Spring Boot + PostgreSQL)
- [ ] Frontend auf Vercel deployen
- [ ] Umgebungsvariablen konfigurieren (Datenbank-URL, JWT-Secret)
- [ ] Lernjournal im README ergänzen
- [ ] 3-Minuten-Pitch vorbereiten: Projekt, Stack, eine technische Entscheidung erklären

**Ressourcen:** railway.app · vercel.com  
**Meilenstein:** 🎉 DeskFlow ist live! Du hast eine URL, die du jedem zeigen kannst

---

## 🚀 Lokales Setup

### Voraussetzungen
- Java 21 (JDK) – adoptium.net
- Node.js 20+ – nodejs.org
- PostgreSQL – postgresql.org
- VS Code + Extension Pack for Java + Spring Boot Extension Pack

### Backend starten
```bash
# Wird in Woche 2 ergänzt
./mvnw spring-boot:run
```

### Frontend starten
```bash
# Wird in Woche 5 ergänzt
npm run dev
```

### Datenbank einrichten
```bash
# Wird in Woche 2 ergänzt
```

---

## 📖 Lernjournal

### Woche 1
> Entwicklungsumgebung vollständig eingerichtet. Git, Java 21, Node.js, 
> PostgreSQL und DBeaver installiert. GitHub Repo mit main und dev Branch 
> angelegt. Erstes Mal mit Git Flow gearbeitet.

### Woche 2
> _Noch nicht begonnen_

### Woche 3
> _Noch nicht begonnen_

### Woche 4
> _Noch nicht begonnen_

### Woche 5
> _Noch nicht begonnen_

### Woche 6
> _Noch nicht begonnen_

### Woche 7
> _Noch nicht begonnen_

### Woche 8
> _Noch nicht begonnen_

---

## 💡 Was ich gelernt habe

_Wird laufend ergänzt._

---

## 👤 Über mich

Werkstudent bei der Finanz Informatik Münster · Studium der Wirtschaftsinformatik an der FH Münster  
Praktikum in der Anwendungsentwicklung ab 01.08.2026

---

## 📄 Lizenz

Dieses Projekt ist ein privates Lernprojekt ohne kommerzielle Nutzung.
