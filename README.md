#PROJECT 3: Full-stack MERN App: "Hop-To-It"
-------
## What is it?
Full-Stack app using MERN stack.  People can discover breweries near them or in specified area.

<!--ZAC WAS HERE AGAIN-->

## Technologies Used:
HTML5 | CSS3 | Javascript | Git | Github | Heroku | MongoDB | Express | React.js | Node.js | Milligram

## ERD
![ERD](https://i.imgur.com/m1uO8Nf.jpg)

## NPM Packages Installed
Back-end Packages installed: Bcrypt-nodejs, Mongoose, Body-parser, Jsonwebtoken, Dotenv, Express, Morgan

Front-end Packages installed: Milligram, Axios

## Wireframes
(insert photo urls here)
![Wireframes:Home Page](https://i.imgur.com/OC5hlZz.jpg?2)
![Wireframes:Brew index & User Show](https://i.imgur.com/2tr77xy.jpg?1)

## Trello
![Trello Board for Hop-To-It](https://i.imgur.com/GnAVgZH.png)

## Screenshots of App
#### Home Page
![Screenshot:Home Page](https://i.imgur.com/LLDi2Ck.png)
#### Sign Up Page
![Screenshot:Signup Page](https://i.imgur.com/kDcduoE.png)
#### Login Page
![Screenshot:Login Page](https://i.imgur.com/PSyQxM2.png)
#### Brew Index Page
![Screenshot:Brew Index Page](https://i.imgur.com/8nBPqbQ.jpg?1)
![Screenshot: Back-End Update/Patch Brewery/User Code Snippet](https://i.imgur.com/DeSveWq.png)
#####Back-end of Like/Unlike Code
Proud of our create/patch brewery logic... if Brewery already exists in the database... then check to see if the currentUser's Id already exists in the brewery's user database... if it does NOT then push the currentUser's Id into the selected brewery's users array and save, then push the selected brewery's brewId into the user's favorites array and save the updated User.

If the currentUser has already liked the brewery (currentUser's Id already exists in the brewery's users array, then search for the currentUser's id index and use that index to remove from the users' array.  Similarly do the same for searching for the brewId index in the user's favorites array and using that index to remove it from the favorites array.
#####Front-end of Like/Unlike Code
![Screenshot: Front-end Update/Patch Brewery/User Code Snippet](https://i.imgur.com/KRH6wRA.png)
![Screenshot: Front-end Render Update/Patch Brewery/User Code Snippet](https://i.imgur.com/GVlLa7F.png)
#### User Profile Page
![Screenshot:User Show/Profile Page](https://i.imgur.com/vtVI2rZ.png)
#### Edit Page
![Screenshot:User Edit Page](https://i.imgur.com/57NjRZy.png)


## Some problems we ran into:
1. Passing current user as props to our profile page.
2. Modeling our Brewery and Photo models.
3. Axios CORS block.
4. Pinging our DB from the React front end and passing data from front end to back end.
5. Adding functionality of like/unlike toggle button.
6. Heroku issue with it not findiing our ./Navbar file.


## Things I didn't get to do/finish:
1. Wanted to utilize AWS to incorporate a Photo model for users to be able to add photos to the breweries: a) Adding a third model/schema for the uploaded Photos.
2. A search feature to change the location.
3. Add a star or heart "like/favorite" button in place of the Milligram like/unlike button.
3. Use Semantic UI to re-design the site.

### Credits:
* Daniel Kang 
* Joy Serquiña

### Links:
*![Daniel & Joy's github for Project 4: Hop-to-It Full-stack-MERN app](https://github.com/dkang003/hop-To-It)