# Library - Gestion de Bibliothèque

Création d'un crud full-stack pour gérer une collection de livres. Construit avec ASP.NET Core (.NET 10) et React 19.

---

## Vue d'ensemble

Cette application permet de :
- Consulter tous les livres de la bibliothèque
- Ajouter de nouveaux livres
- Rechercher un livre par ID
- Modifier les informations d'un livre
- Supprimer un livre avec l'ID

---

## Architecture

```
Library/
├── Library.Api/                    # Backend ASP.NET Core
│   ├── Controllers/
│   │   └── BookController.cs       # Endpoints API REST
│   ├── Models/
│   │   └── Book.cs                 # Modèle Book
│   ├── Data/
│   │   ├── BookDbContext.cs        # DbContext EF Core
│   │   └── DataExtensions.cs       # Extensions
│   ├── Repositories/
│   │   ├── IBookRepository.cs      # Interface
│   │   └── BookRepository.cs       # Implémentation
│   ├── Migrations/                 # Migrations EF Core
│   ├── Program.cs                  # Configuration
│   └── appsettings.json            # Paramètres
│
├── Library.Client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/             # Composants React
│   │   │   ├── AddCard.jsx
│   │   │   ├── BookCard.jsx
│   │   │   ├── DeleteCard.jsx
│   │   │   ├── GetAllCard.jsx
│   │   │   ├── GetCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── UpdateCard.jsx
│   │   ├── pages/                  # Pages
│   │   │   ├── AddBookForm.jsx
│   │   │   ├── AllBooksPage.jsx
│   │   │   ├── BookPage.jsx
│   │   │   ├── DeleteBookForm.jsx
│   │   │   ├── Home.jsx
│   │   │   └── UpdateBookForm.jsx
│   │   ├── services/
│   │   │   └── api.js              # Client API
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── Library.sln                     # Solution
```

---

## Technologies

### Backend

| **.NET** Version 10 Usage Runtime 
| **ASP.NET Core** comme Framework backend
| **Entity Framework Core** en tant qu'ORM 
| **SQLite** pour la base de données légère

### Frontend
| **React Version 19.2.4** comme framework frontend
| **Vite** pour le bundler rapide

---

## Prérequis

### Pour le développement local

- **[.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)** - Environnement runtime .NET
- **[Node.js 20+](https://nodejs.org)** - Runtime JavaScript
- **npm** (inclus avec Node.js) - Package manager

### Pour Docker

- **[Docker Desktop](https://www.docker.com/products/docker-desktop)** - Conteneurisation

---

##  Démarrage Rapide

### Avec Docker (Recommandé)

```bash
# Clone le projet
git clone -b US-Dockerization https://github.com/ccelsin/Library.git

# Assurer vous d'être à la racine du projet dans le répertoire Library

# Lance tout avec Docker
docker compose up -d --build

# Accès
# Frontend  : http://localhost:5173
# API       : http://localhost:5132
```

### Développement local

#### Terminal 1 - Backend
```bash

# Clone le projet
git clone https://github.com/ccelsin/Library.git

# Se placer dans le dossier Library.Api depuis la racine du projet
cd Library.Api

# Lancer l'API
dotnet run
# API Disponible sur http://localhost:5132
```

#### Terminal 2 - Frontend
```bash
# Se placer dans le dossier Library.Client depuis la racine du projet
cd Library.Client

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# Client sur http://localhost:5173
```

---

## API REST

### Base URL
```
http://localhost:5132/api/book
```

### Endpoints

#### 1. Récupérer tous les livres
```http
GET /api/book 
Host: localhost:5132
```
**Réponse :**
```json
[
  {
    "id": 1,
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "releaseDate": "2008-01-01"
  },
  {
    "id": 2,
    "title": "The Pragmatic Programmer",
    "author": "David Thomas",
    "releaseDate": "2019-01-01"
  }
]
```

#### 2. Récupérer un livre par ID
```http
GET /api/book/1 
Host: localhost:5132
```
**Réponse :**
```json
{
  "id": 1,
  "title": "The Pragmatic Programmer",
  "author": "David Thomas",
  "releaseDate": "2019-01-01"
}
```

#### 3. Créer un livre
```http
POST /api/book
Host: localhost:5132
Content-Type: application/json

{
  "title": "Design Patterns",
  "author": "Erich Gamma",
  "releaseDate": "1994-01-01"
}
```

#### 4. Mettre à jour un livre
```http
PUT /api/book/2
Host: localhost:5132
Content-Type: application/json

{
  "title": "Clean Code - Updated",
  "author": "Robert C. Martin",
  "releaseDate": "2008-01-01"
}
```

#### 5. Supprimer un livre
```http
DELETE /api/book/2 
Host: localhost:5132
```

---

## Modèle de données

### Entité Book
```csharp
public class Book
{
    public int Id { get; set; }                    // Clé primaire
    [Required]
    public required string Title { get; set; }              // Titre du livre
    [Required]
    public required string Author { get; set; }             // Auteur
    [Required]
    public required DateOnly ReleaseDate { get; set; }      // Date de publication
}
```

## Commandes utiles

### Backend (.NET)

```bash

# Exécuter
dotnet run

# Nettoyer
dotnet clean

# Voir la version .NET
dotnet --version
```

### Frontend (React)

```bash
# Installer les dépendances
npm install

# Mode développement
npm run dev

```

### Docker

```bash
# Lancer les services
docker compose up -d --build

# Voir les logs
docker compose logs -f

# Arrêter les services
docker compose down

```

---

## Configuration

### CORS (Cross-Origin Resource Sharing)

La configuration CORS est définie dans `Program.cs` :

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});
```

---

## Troubleshooting

### Le port 5132 est déjà utilisé

```bash
# Trouver le process
netstat -ano | findstr :5132

# Résultat par exemple :
# TCP    0.0.0.0:5132   0.0.0.0:0   LISTENING   4893


# Tuer le process (remplacer PID) s'il n'est pas critique. Sinon arrêter le service associé graphiquement.

#S'il s'agit d'un conteneur Docker, arrêter le service avec `docker compose down sans tuer le process hôte`

#Exemple de commande pour tuer le process :
taskkill /PID 4893 /F
```

### Le port 5173 est déjà utilisé

```bash
# Trouver le process
netstat -ano | findstr :5173

# Résultat par exemple :
# TCP    0.0.0.0:5173   0.0.0.0:0   LISTENING   4892

# Tuer le process (remplacer PID) s'il n'est pas critique sinon arrêter le service associé graphiquement.

#S'il s'agit d'un conteneur Docker, arrêter le service avec `docker compose down sans tuer le process hôte`

#Exemple de commande pour tuer le process :
taskkill /PID 4892 /F
```

### Les node_modules sont corrompus

```bash
# Supprimer et réinstaller
rm -r node_modules package-lock.json
npm install
```

### La connexion à l'API échoue

1. Vérifier que l'API est bien lancée : `dotnet run` dans `Library.Api`
2. Vérifier les logs : `docker compose logs`
3. Vérifier la configuration CORS dans `Program.cs`
4. S'assurer que le client utilise la bonne URL : `http://localhost:5132`


---

## Structure des Pages Frontend

| Page | Route | Fonction |
|------|-------|----------|
| **Home** | `/` | Page d'accueil |
| **AllBooksPage** | `/books` | Affiche tous les livres |
| **AddBookForm** | `/add` | Formulaire d'ajout |
| **BookPage** | `/book` | Détails d'un livre |
| **UpdateBookForm** | `/update` | Formulaire de modification |
| **DeleteBookForm** | `/delete` | Confirmation de suppression |

---


Merci d'avoir lu jusqu'ici ! **
