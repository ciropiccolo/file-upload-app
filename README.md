# File Upload App

A web application for uploading, managing, and viewing files, built with SvelteKit and PostgreSQL.

## Requisites

- Docker installed

## Features

- Upload files with metadata (title, description, category, language, provider, roles)
- Secure storage of files in AWS S3 , with local static folder as fallback
- List and search uploaded files
- Backend powered by Prisma and PostgreSQL

## Project Structure

- `src/` - SvelteKit source code
- `prisma/` - Database schema and migrations
- `S3 client` - Uploaded files
- `Dockerfile` and `docker-compose.yml` - Containerization setup

## Getting Started with Docker Compose

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/file-upload-app.git
   cd file-upload-app
   ```

2. **Start the application and database using Docker Compose:**
   ```sh
   docker-compose up --build
   ```

   This will:
   - Start a PostgreSQL database container
   - Build and start the SvelteKit app container
   - Run Prisma migrations automatically

3. **Access the app:**
   - Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

The app uses a `.env` file for configuration. When running with Docker Compose, the database connection is set automatically.

## Useful Commands

- **Stop the containers:**
  ```sh
  docker-compose down
  ```
- **View logs:**
  ```sh
  docker-compose logs app