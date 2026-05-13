<<<<<<< HEAD

# Expense Tracker

A simple Expense Tracker web application built using Node.js, Express.js, HTML, CSS, and JavaScript.

## Features

- Add transactions
- Track income and expenses
- Delete transactions
- Store data using JSON file
- Simple and clean UI
- Color indicators for income and expense

---

## Technologies Used

- Node.js
- Express.js
- HTML
- CSS
- JavaScript

---

## Project Structure

```bash
expense-tracker/
│
├── data/
│   └── transaction.json
│
├── routes/
│   └── transaction.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── index.js
│
├── server.js
├── package.json
└── README.md
````

---

## Installation

1. Clone the repository

```bash
git clone <your-github-repo-link>
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
npm start
```

4. Open in browser

```bash
http://localhost:5000
```

---

## API Endpoints

### Get Transactions

```http
GET /transaction
```

### Add Transaction

```http
POST /transaction
```

### Delete Transaction

```http
DELETE /transaction/:id
```

---


## Future Improvements

* Edit transaction
* Total balance calculation
* Filter by category
* Monthly reports
* Database integration

---

## Author

Uday

````
=======
# expense-tracker
>>>>>>> f0bdeb4c8e088c47c917b62249527df16b50747c
