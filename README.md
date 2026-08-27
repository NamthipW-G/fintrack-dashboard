# FinTrack — Personal Finance Dashboard

FinTrack is a personal finance dashboard built with React and TypeScript. It demonstrates modern frontend development practices including global state management, REST API integration, automated testing, end-to-end testing, and continuous integration.

## Features

- Personal finance dashboard interface
- Financial summary cards for balance, spending, and remaining budget
- Transaction history with income and expense styling
- Add new transactions through an interactive form
- Persistent transaction data through a REST API
- Global state management with Redux Toolkit
- Loading and error handling for API requests
- Responsive dashboard layout
- Unit and component testing
- End-to-end user flow testing
- Automated CI pipeline with GitHub Actions

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- CSS

### State Management
- Redux Toolkit
- React Redux

### API
- REST API integration using Fetch API
- JSON Server for local API development

### Testing
- Vitest
- React Testing Library
- Testing Library User Event
- Cypress

### DevOps
- Git
- GitHub
- GitHub Actions
- Automated lint, test, and production build checks

## Architecture

```text
React Components
       │
       ▼
Redux Toolkit Store
       │
       ▼
Async Thunks
       │
       ▼
REST API
       │
       ▼
JSON Server / db.json
```

The application separates UI components, application state, and API communication. Redux Toolkit manages transaction state while asynchronous thunks communicate with the REST API.

## Project Structure

```text
src/
├── app/
│   └── store.ts
│
├── components/
│   ├── AddTransactionForm.tsx
│   ├── AddTransactionForm.test.tsx
│   ├── Sidebar.tsx
│   ├── SummaryCard.tsx
│   ├── SummaryCard.test.tsx
│   └── TransactionTable.tsx
│
├── features/
│   └── transactions/
│       ├── transactionsSlice.ts
│       └── transactionsSlice.test.ts
│
├── App.tsx
├── main.tsx
└── setupTests.ts

cypress/
└── e2e/
    └── fintrack.cy.ts

.github/
└── workflows/
    └── ci.yml
```

## Testing Strategy

FinTrack uses multiple levels of automated testing.

### Component Testing

React Testing Library verifies that UI components render the expected information.

### Interaction Testing

User Event simulates user interaction with the transaction form, including entering transaction details.

### Redux Testing

Vitest tests transaction state updates and reducer behaviour.

### End-to-End Testing

Cypress tests the complete transaction workflow:

```text
Open dashboard
      ↓
Load transactions from API
      ↓
Enter transaction details
      ↓
Submit transaction
      ↓
POST transaction to API
      ↓
Update application state
      ↓
Display transaction in table
```

## Continuous Integration

GitHub Actions automatically validates the project on pushes and pull requests to the `main` branch.

The CI pipeline performs:

1. Dependency installation
2. ESLint validation
3. Automated Vitest tests
4. Production build verification

This ensures that code pushed to the repository passes the project's quality checks.

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/NamthipW-G/fintrack-dashboard.git
cd fintrack-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the REST API

```bash
npx json-server db.json --port 3001
```

The API will run at:

```text
http://localhost:3001
```

### 4. Start the frontend

Open another terminal and run:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

## Running Tests

Run the Vitest test suite:

```bash
npm test
```

Run the tests once without watch mode:

```bash
npm test -- --run
```

Run Cypress E2E tests:

```bash
npx cypress open
```

## Quality Checks

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## What This Project Demonstrates

This project demonstrates practical experience with:

- Building React applications with TypeScript
- Designing reusable React components
- Managing global application state with Redux Toolkit
- Implementing asynchronous state management
- Consuming and updating REST APIs
- Handling loading and error states
- Persisting application data
- Writing automated component and state tests
- Building end-to-end tests for user workflows
- Configuring continuous integration with GitHub Actions
- Using Git and GitHub throughout the development lifecycle

## Future Improvements

Potential future enhancements include:

- Transaction editing and deletion
- Budget management
- Analytics and spending charts
- Transaction filtering and search
- User authentication
- Database-backed production API
- Deployment of the frontend and backend

## Author

**Namthip Wannakajeepiboon**