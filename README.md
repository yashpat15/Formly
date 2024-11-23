# Formly - Dynamic Form Builder

Welcome to **Formly**, a powerful yet simple application to create and manage dynamic forms with ease. Whether you need to build forms, preview them, or manage submissions, **Formly** has you covered with its intuitive React frontend and Django backend.

---

## 🚀 Features

- **Dynamic Form Creation**: Create forms with various input fields like text, checkboxes, dropdowns, and more.
- **Preview Mode**: See how your form looks in real-time before submitting.
- **Validation**: Ensure required fields are filled with client-side and backend validation.
- **Django API**: Manage form submissions securely with a robust backend.
- **React Frontend**: Seamlessly design and interact with forms on a user-friendly interface.

---

## 🛠️ Tech Stack

- **Frontend**: React.js (Tailwind CSS for styling)
- **Backend**: Django REST Framework
---


## 🚧 Prerequisites

Before getting started, ensure you have the following installed on your system:

- **Node.js** and **NPM** (for the frontend)
- **Python 3.10 or above** (for the backend)
- **Git** (for version control)

---

## 🛠️ Setup and Installation

### Backend (Django)

```bash
# Navigate to the backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Run migrations to set up the database
python manage.py migrate

# Start the Django server
python manage.py runserver
```

## Frontend (React)

```bash
# Navigate to the frontend directory:
 cd frontend

# Install NPM dependencies:
 npm install

# Start the development server:
 npm start

# Build the production files (optional):
 npm run build

```

---

## 💻 Usage
- Visit the React frontend at http://localhost:3000.
- Use the Form Builder interface to design your forms dynamically.
- Preview the forms before submitting them.
- Submit the forms, and the data will be sent to the Django backend for processing.
