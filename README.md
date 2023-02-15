# Expenses Tracker
A simple project, at least in the beginning, to learn the hexagonal architecture.


## Description
The expense tracker app is Rest API designed to help users keep track of their expenses. Users can create, update, and delete expense records, and view their expense history. The app allows users to categorize their expenses.


## Use cases
1. **Create an expense category**:   The user can create a new expense category in the application. They will need to provide a name for the category, and optionally, a description. The application will validate that the name is unique and does not already exist in the list of categories.
2. **Update an expense category**:   The user can update an existing expense category in the application. They will need to provide a new name and/or description. The application will validate that the new name is unique and does not conflict with any other categories.
3. **Delete an expense category**:   The user can delete an existing expense category from the application. The application will delete the expenses attached to the category.
4.  **List expense categories**:   The user can view a list of all the expense categories in the application. The list will display the name and description of each category, and the total number of expenses associated with each category.
5. **Create an expense**:   The user can enter a new expense in the application. They will need to provide a description of the expense, the amount spent, the date of the expense and, optionally, the expense category.
6. **View list of expenses**:   The user can see a list of all the expenses they have entered in the application, sorted by date. For each expense, the description, amount spent, date, and category will be displayed.
7. **Filter expenses by category**:   The user can filter the list of expenses by category, to see only the expenses that belong to a specific category.
8. **Update an expense**:   The user can update the information of an existing expense, such as the description, amount spent, date, or category.
9. **Delete an expense**:   The user can delete an existing expense from the list of expenses.

## Table of Contents

- [Expenses Tracker](#expenses-tracker)
  - [Description](#description)
  - [Use cases](#use-cases)
  - [Table of Contents](#table-of-contents)
  - [Installing](#installing)
  - [Building](#building)
  - [Testing](#testing)
    - [Jest with Testing Library](#jest-with-testing-library)
  - [Linting](#linting)

## Installing

```bash
nvm install 18.0.0
nvm use
npm install npm@8.3.0 -g
npm install
```

## Building

```bash
npm run build
```

## Testing

### Jest with Testing Library

```bash
npm run test
```

## Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```
