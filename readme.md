# Session Tracker Backend

## Project Overview

The Session Tracker Backend is the server-side component of the Session Tracker project. It provides the necessary APIs to manage session data, including retrieving session information and creating new sessions.

## Technologies Used

- Node.js: A runtime environment that allows you to execute JavaScript code on the server side.
- Express.js: A minimal and flexible Node.js web application framework that simplifies handling HTTP requests and routing.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the backend directory: `cd Session-backend`
3. Install the required dependencies using npm: `npm install`

## Usage

1. Make sure the required dependencies are installed (npm install).
2. Run the backend server using the command: `npm start`
3. The server will start running on the specified port.

## API Endpoints

### Get Session Data

- **URL:** `/session`
- **Method:** `GET`
- **Response:**
  ```
  {
    success: Boolean,
    message: String,
    data: Array
  }
  ```

### Create Session

- **URL:** `/session`
- **Method:** `POST`
- **Response:**
  ```
  {
    success: Boolean,
    message: String
  }
  ```

## Project Structure

The backend codebase follows the following structure:

- `index.js`: The entry file that sets up the Express server and defines routes.
- `Routes/`: Contains route definitions for different APIs.
- `Controllers/`: Contains the controller logic for handling API requests.

