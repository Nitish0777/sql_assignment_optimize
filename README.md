# React + Vite  SQL Editor

## 📚 Overview

The React + Vite SQL Editor is a web-based application designed to execute SQL queries and display the results in an intuitive and user-friendly interface. This application provides a robust SQL editor with features like query execution, autocomplete suggestions, and data export capabilities. Built using ReactJS and optimized for performance, the editor ensures a seamless experience for users.

## Architecture
![image](https://github.com/user-attachments/assets/0f6d7843-b687-46f5-ad9c-97fc79d4f644)

## 👨‍💻 Live Demo

<a href="https://github.com/Nitish0777/nitish-sql-queries-frontend" target="blank">
<img src="https://img.shields.io/website?url=https://www.codingspace.codes&logo=github&style=flat-square" />
</a>

Try out the website : [React + Vite SQL Editor](https://nitish-sql-queries-frontend.vercel.app/)

## ⚙️ Dependencies
The project leverages the following key dependencies:
- **@codemirror/lang-sql**
- **@codemirror/theme-one-dark**
- **react-minimal-pie-chart**
- **json-2-csv**
- **react-dom**

## 👨‍💻 Features

:white_check_mark: Users can get data of any of the predefined SQL queries on the left Sidebar from dropdown menu.\
:white_check_mark: Users can retrieve data for the queries displayed in the autocomplete dropdown within the CodeMirror SQL editor.\
:white_check_mark: Users can download the data in CSV Format in just one click.\
:white_check_mark: Visualize query results using a pie chart for better data analysis and insights. This feature is implemented using the react-minimal-pie-chart library.


## ✍️ Predefined SQL Queries

- `SELECT * FROM products;`
- `SELECT productID, productName, unitPrice FROM products ORDER BY unitPrice DESC LIMIT 10;`
- `SELECT COUNT(*) AS total_products FROM products;`
- `SELECT supplierID, COUNT(*) AS supplier_product_count FROM products GROUP BY supplierID;`

- `SELECT categoryID, COUNT(*) AS product_count FROM products GROUP BY categoryID;`

## ⏱ Page Load Time
![image](https://github.com/user-attachments/assets/69e3de80-3efe-4b7f-a05d-e76cfbc45b43)

Page Load time of this website in desktop is in the range of 0.4 s to 0.7s.

### [web.dev Report](https://pagespeed.web.dev/)

Laptop performance view

![image](https://github.com/user-attachments/assets/f4460f11-a66e-41d7-8441-9081d64b8739)

## Everything for Reference: Include all relevant materials such as the architecture diagram, ER diagram, explanation document (PDF), and video walkthrough.
(https://drive.google.com/drive/folders/1Urz7LD3Z31Jy4pR_p5wqw4KJQZz9ECvZ)


## 🪜 Steps I took to optimize the page load time

- Used Lighthouse DevTools to identify performance issues and implemented actionable suggestions.
- Deployed the application on Vercel to leverage its Edge Network for faster load times and optimized delivery.

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all the packages in package.json. This will install all the dependencies and devDependencies.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.


## 🚀 Project Output
![image](https://github.com/user-attachments/assets/573d34b4-60ca-47b6-9fb1-f121158e46be)
