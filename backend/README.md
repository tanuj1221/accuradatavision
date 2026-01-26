
# Accura Datavision Backend

This simple Node.js server handles sending emails from the Contact form using BigRock Titan Email.

## Setup

1.  **Dependencies**: Run `npm install` in this directory (if not already installed).
2.  **Configuration**: Open `.env` file and update the `EMAIL_PASS` with your actual BigRock Titan Email password.
    ```env
    PORT=5000
    EMAIL_USER=admin@acccuradatavision.com
    EMAIL_PASS=your_actual_password_here
    ```
3.  **Run Server**: Start the server with:
    ```bash
    node server.js
    ```

## API Endpoints

-   `POST /api/contact`: Accepts `{ name, email, subject, message }`. Sends email to admin and confirmation to user.
