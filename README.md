# Svelte Stock Manager

Welcome to the Svelte Stock Manager project! This is a README file that provides an overview of the project and its setup instructions. 

## Project Description

Svelte Stock Manager is a web application built with the SvelteKit framework. It allows users to manage stocks and track inventory in a convenient and user-friendly manner. The application integrates with a database to store stock information, and it utilizes encryption techniques to secure sensitive data.

## Prerequisites

Before you can run the Svelte Stock Manager application, ensure that you have the following:

- Node.js (version 14 or higher) installed on your machine.
- A database URL for establishing a connection to your preferred database system (e.g., PostgreSQL, MySQL, MongoDB).

## Getting Started

To get started with the Svelte Stock Manager project, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/pedroddjkkk/SvelteStockManager.git
```

2. Navigate to the project directory:

```bash
cd SvelteStockManager
```

3. Install the dependencies using npm:

```bash
npm install
```


4. Create a `.env` file based on the provided `.env.example` file:

```bash
cp .env.example .env
```


5. Update the `.env` file with your own configurations. Make sure to replace the placeholder values with the appropriate values for your database connection and secrets.

```dotenv
DATABASE_URL='url for database connection'
AUTH_SECRET='secret for encryption'
SECRET_CREATE_TOKEN='temporary secret for creating user'
```

6. Run the application in development mode:

```bash
npm run dev
```

7. Open your browser and navigate to `http://localhost:5173/` to view the application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

The Svelte Stock Manager project is open-source software licensed under the MIT license. Feel free to use, modify, and distribute it as per the terms of the license.

## Acknowledgments

I would like to express our gratitude to the open-source community for providing the tools and frameworks that made this project possible.

If you have any questions or need further assistance, please don't hesitate to reach out. Happy managing your stocks with Svelte Stock Manager!