Coding: Todo-Frontend
Heute baut ihr das Frontend für die Todo-App. Folgt den Schritten unten:
*
* Nutze das Musterprojekt als Backend: https://github.com/neuefische/java-todo-backend
* Erstelle ein neues Frontend Modul mit Vite und nenne es frontend
* Füge in die vite.config.ts den Eintrag

  server: {
  proxy: {
  '/api': {
  target: 'http://localhost:8080',
  }
  }
  }

in Deinen axios-Requests ein. Nutze dann relative Pfade (z.B. "/api/todo" statt "http://localhost:8080/api/todo")
*
* Baue das todo-frontend mit React

