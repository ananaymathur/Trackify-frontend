# Trackify - Job Application Tracker

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Trackify is a modern, full-featured job application tracking web application designed to help users manage their job search process. It includes features such as authentication, session management, and an intuitive interface to track job applications efficiently.


## Features

- **Authentication**: Secure user authentication with JWT token-based sessions.
- **Dashboard**: View and manage your job applications in a clean and intuitive interface.
- **Session Management**: Automatic handling of session expiration and user redirection.
- **Responsive Design**: Fully responsive layout that works across all devices.
- **Protected Routes**: Access control with protected routes for logged-in users only.

## Built With

- **React**: Frontend library for building user interfaces.
- **React Router**: For handling navigation and routing within the app.
- **Axios**: For making HTTP requests to the backend.
- **CSS Modules**: For component-level styling.
- **JWT (JSON Web Tokens)**: For secure user authentication and session management.


## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

- **Node.js** (v14+)
- **npm** (v6+) or **yarn** (v1.22+)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ananaymathur/Trackify-frontend.git
   cd Tarckify-frontend
    ```


2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a .env file in the root directory and add the following:

    ```plaintext
    REACT_APP_API_URL=http://your-backend-api-url.com
    ```

    Replace http://your-backend-api-url.com with your actual backend URL.

4. **Run the application**

    ```bash
    npm start
    ```

    or with Yarn:

    ```bash
    yarn start
    ```

    Open in your browser

    The app will run on http://localhost:3000 by default.

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/NewFeature)
3. Commit your Changes (git commit -m 'Add some feature')
4. Push to the Branch (git push origin feature/NewFeature)
5. Open a Pull Request


