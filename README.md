# Clean Template

This is a clean template for new web based projects.

## How to use

1. Download this repository as a zip
2. Adapt to your needs
3. Push to your project repository

## Concepts

### 1. Lib folder

Code that should be unit tested.

You should put files here if:

1. The file can be tested without any mock, only with the parameters needed.
1. The file **may** be useful in other project
1. The file **does not** depend on any file outside "Lib"

Examples: React components, helpers, etc

### 2. Modules folder

The modules are the different aspects of your project. They're where the business logic should live.

The code here are good candidates for integration tests. Remember to mock API responses.

Examples:

| Type of Project |                  Modules |
| --------------- | -----------------------: |
| Multimidia      |     Catalog, Player, ... |
| Store           | Games, Music, Books, ... |
| News            |           Editorial, ... |

### 2.1. Application module folder

This especial module is where all the code that is needed for the application as a whole. Good
examples are the backend comunication and the app main layout (shell).

### 3. Pages or Routes

The code in this folder is where you should handle user input and mapping to modules.

The routes should handle all the initialization needed for the application, as well as final
rendering for the client.

## Tech Used

| Role            | Lib                           |
| --------------- | ----------------------------- |
| Routing         | NextJS                        |
| Rendering       | Preact                        |
| Test            | Jest, Testing Library         |
| Static analisis | Typescript, Eslint, stylelint |
| Formating       | Prettier, stylelint           |
