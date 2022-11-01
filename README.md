# MERN-Book-Search-Engine

## Description

This application is based on a fully functioning Google Books API search engine which was built with a RESTful API. The code was refactored to use GraphQL API and Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API.

1. The application uses an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the RESTful API from the starter code.

2. The authentication middleware was modified so it works in the context of a GraphQL API.

3. An Apollo Provider was created so that requests can communicate with an Apollo Server.

4. The application was deployed to Heroku with a MongoDB database using MongoDB Atlas.

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Screenshot

![Screenshot of deployed application on browser".](./client/assets/Screenshot.png)

## Required Packages

Install the required dependendcies with the following terminal command:
```sh
npm install
```

## Use

Users login with their user ID and password and type a search term in a search box and the results display on the screen.

Users can then save search results by clicking the "Save This Book!" button, whch saves the book to be retrieved later.

After cloning the repository and installing the required npm packages, users can start the application locally with the folloiwng terminal command:

```sh
npm run develop
```

## License 
   
   None

## Github Repository
 [github.com/HuwRichmond/MERN-Book-Search-Engine](https://github.com/HuwRichmond/MERN-Book-Search-Engine)

## Contact

Created by Huw Richmond

[Github.com/HuwRichmond](https://github.com/HuwRichmond)


