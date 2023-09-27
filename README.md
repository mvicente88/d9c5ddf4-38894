# codechallenge-React-J

**CODE CHALLENGE**

# RestfulReact

RestfulReact is a simple React application that demonstrates fetching and displaying user data from the Random User Generator API. Users can click on "Details" to view more information about a user, and the application includes a modal for displaying user details.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Technologies Used](#technologies-used)


## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you will need Node.js and npm (Node Package Manager) installed on your system. You can download and install them from [nodejs.org](https://nodejs.org/).

### Project Structure

The project is structured as follows:

- `src`: Contains the application source code.
  - `components`: React components used in the application.
  - `context`: Contains the React context for managing user data.
  - `modal`: Contains the modal component for displaying user details.
- `public`: Contains the public assets and the HTML template for the application.
- `cypress`: Contains end-to-end test specifications.

### Running the Application

To run the application locally, follow these steps:

1. Clone the repository to your local machine:

git clone https://github.com/your-username/restfulreact.git

2. Change into the project directory:

cd restfulreact

3. Install the project dependencies:

npm install

4. Start the development server:

npm start
The application will be available in your web browser at [http://localhost:3000](http://localhost:3000).

### Running Tests

This project includes end-to-end tests using Cypress. To run the tests, use the following command:
npm run cypress:open
Cypress will open its test runner, allowing you to select and run tests.

You can watch a recording of the tests in this video:

[Test DEMO](https://youtu.be/vKVIEVPYdVI)


### Technologies Used

This project is built with the following technologies:

- React: A JavaScript library for building user interfaces.
- Material-UI: A popular React UI framework for creating responsive web applications.
- Axios: A promise-based HTTP client for making requests to the Random User Generator API.
- Cypress: An end-to-end testing framework for testing web applications.