# bookcart-cypress-e2e Tests
> End-to-end test automation suite for the BookCart online bookstore using Cypress

## Tech stack
- **Framework:** Cypress v15.16.0
- **Language:** Javascript
- **App under test:** [BookCart](https://bookcart.azurewebsites.net/)
- **Node.js:** v22.11.0

## Project Structure
.
├── README.md
├── cypress
│   ├── e2e
│   ├── fixtures
│   │   └── testData.json
│   └── support
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package-lock.json
└── package.json

## Configuration
- **Base URL:** https://bookcart.azurewebsites.net
- **Viewport:** 128x720
- **Default timeout:** 30 seconds
- **Page load timeout:** 60 seconds

