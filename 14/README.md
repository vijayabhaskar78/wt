# Hospital Patient Management API

A simple RESTful API for managing hospital patients using Express.js and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on default port 27017)

## Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

1. Make sure MongoDB is running on your local machine
2. Start the server:
   ```
   npm start
   ```
   
   For development with auto-restart:
   ```
   npm run dev
   ```

3. The server will run on http://localhost:3000

## API Endpoints

### Patients

- **GET /patients** - Get all patients
- **POST /patients** - Create a new patient
- **GET /patients/:id** - Get a specific patient by ID
- **PUT /patients/:id** - Update a patient by ID
- **DELETE /patients/:id** - Delete a patient by ID

## Example Requests

### Create a patient

```bash
curl -X POST http://localhost:3000/patients \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "age": 45, "disease": "Hypertension"}'
```

### Get all patients

```bash
curl http://localhost:3000/patients
```

### Get a specific patient

```bash
curl http://localhost:3000/patients/[patient-id]
```

### Update a patient

```bash
curl -X PUT http://localhost:3000/patients/[patient-id] \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "age": 46, "disease": "Diabetes"}'
```

### Delete a patient

```bash
curl -X DELETE http://localhost:3000/patients/[patient-id]
```
