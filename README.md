# Food in Film / Mod 3 Project Frontend

This is my Mod3 project for the PerScholas Software Engineering course.

Click [here][1] for the live site link to my project.
Click [here][3] to view the back end of the project.

## Project Description
***
For the Per Scholas Module 3 Project, we are tasked with creating a working full-stack application using the MERN stack with at least one model with full CRUD. I love watching videos where individuals try foods seen in animated movies. So, I decided to create an app where users could see how to make the delicious animated foods and write down their thoughts and opinions on it. 

![Page home page](./Screenshot%202022-09-08%20225738.jpg)

## Approach Taken
I wanted to try to achieve a simple look to the website and try to make the site look sleek and simple but also a bit interactive. I implemented the new and edit in the front-end. I wanted to implement authorization and authentication to give the user a more customized expereince so I created a user model and looked for outside resources to accomplish this task. Specifically [this][2] youtube video was helpful in understanding the logic behind authentication and authorization within a mern stack app.

## Unsolved Problems
***
There are some parts where the user has to manually refresh the page in order to see some updates. So, I will do more research on navigate and see how to solve this issue. Also, if a user reloads the edit page before submitting, the placeholder values will disappear. So, I will look into this issue as well. 

## User Stories
***
* User is able to view the index of all the recipes
* User is able to log in
* User is able to log out
* User is able to create a review
* User is able to edit a review
* User is able to delete a review
* User is able to view their review
* User is able to click on a recipe or review and view the single entity in greater detail

## Technologies Used
***
* Javascript
* NodeJS
* React

### NPM Packages Installed
* nodemon
* axios
* react
* bootstrap


## Installation
***
Fork and clone the repository
```
$ git clone https://github.com/yourusername/repositoryname
```
Go to the project directory
```
$ cd repositoryname
```
Install dependencies
```
$ npm i
```
Run nodemon and open local host in browser to see the project
```
$ npm start
```

## Future Plans
***
I wanted to include some more features in this front-end.

#### Search
* I would like to add a search and filter feature to the the foods and reviews pages. 

#### Public rating 
* Add public rating and comment feauture on each recipe so the users can interact and see others perspectives on the recipes. 

[1]:https://foodinfilm.herokuapp.com/ "live site"
[2]:https://www.youtube.com/watch?v=WsRBmwNkv3Q&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT "youtube link"
[3]:https://github.com/LarissaPortillo/food-backend "back end"

