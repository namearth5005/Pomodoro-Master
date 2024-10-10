# AI Chat History

AI Chat History is a web application that allows users to have conversations with an AI assistant and view their chat history. The application is built using React for the frontend and Flask for the backend.

## Features

- Real-time chat with an AI assistant
- View and manage chat history
- User authentication
- Responsive design for desktop and mobile devices

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- Python (v3.7 or later)
- pip (Python package manager)

## Setup

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the frontend directory and add the following:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```
   npm start
   ```

The frontend will be available at `http://localhost:3000`.

### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```
     source venv/bin/activate
     ```

4. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

5. Create a `.env` file in the backend directory and add the following:
   ```
   FLASK_APP=app.py
   FLASK_ENV=development
   SECRET_KEY=your_secret_key_here
   DATABASE_URL=sqlite:///chat_history.db
   ```

6. Initialize the database:
   ```
   flask db upgrade
   ```

7. Start the Flask server:
   ```
   flask run
   ```

The backend API will be available at `http://localhost:5000`.

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Sign up for a new account or log in if you already have one.
3. Start chatting with the AI assistant.
4. View your chat history in the sidebar.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.