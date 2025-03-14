Descrizione del Progetto
Obiettivo:
Creare una semplice applicazione web per la gestione di attività (to-do list) in cui un utente può:

Visualizzare la lista delle attività.
Aggiungere nuove attività.
Modificare ed eliminare attività esistenti.
Tecnologie Utilizzate:

Front-end: HTML, CSS, JavaScript, jQuery, AJAX e JSON per la comunicazione asincrona.
Back-end: PHP per creare API REST che gestiscono le operazioni CRUD (Create, Read, Update, Delete).
Database: MySQL per salvare e gestire le attività.
Architettura del Progetto
Struttura del Front-end:

index.html: La pagina principale che contiene la struttura della lista e i form per aggiungere/modificare attività.
style.css: File CSS per lo styling e il responsive design.
script.js: File JavaScript che usa jQuery per effettuare chiamate AJAX alle API, aggiornare il DOM e gestire gli eventi.
Struttura del Back-end:

api/tasks.php: File PHP che funge da endpoint REST, riceve le richieste HTTP (GET, POST, PUT, DELETE) e interagisce con il database.
db/config.php: File di configurazione per la connessione al database MySQL, contenente le credenziali e le impostazioni.
Database:

Tabella tasks: Una tabella MySQL che contiene campi come id, title, description, status (ad es. "completato" o "in corso") e created_at.
Funzionalità e Flusso di Lavoro
Visualizzazione delle Attività:

Al caricamento della pagina, il JavaScript effettua una chiamata AJAX (GET) a api/tasks.php per recuperare la lista delle attività in formato JSON e visualizzarle dinamicamente.
Aggiunta di una Nuova Attività:

L'utente compila un form e, cliccando un pulsante, il JavaScript invia una richiesta AJAX (POST) con i dati dell'attività al server.
Il back-end inserisce l'attività nel database e restituisce la nuova lista o l'elemento creato.
Modifica ed Eliminazione:

Per modificare o eliminare, il front-end invia rispettivamente una richiesta AJAX (PUT o DELETE) con l'ID dell'attività da aggiornare o eliminare.
Il back-end aggiorna o rimuove l'attività dal database e conferma l'operazione.
