<p align="center">
  <img src="public/images/logo.png" width="350" title="hover text">
</p>

# Clothing & Science
##### E-commerce platform for a specific clothing brand.
---

### Members 
* Carla Jeannine Cruzada
* Anna Patricia Desembrana
* Clarissa Mae Mandadero 

### Dependencies
* bcrypt
* body-parser
* dotenv
* express
* express-handlebars
* express-validator
* express-session
* hbs
* mongodb

### Third Party Libraries
* Font Awesome

## Setting up the server
### Install the following modules
* Open Command Prompt
* Navigate to the project folder
* Type `npm install`
* Type `node add_data.js` to populate the database. 

## Running the server
#### When supervisor is installed
* Type `supervisor index.js`
* Navigate to http://localhost:3000 in your browser.
#### No supervisor installed 
* Type `node index.js`
* Navigate to http://localhost:3000 in your browser.


# Clothing and Science Database
### Admin

| userName           | email  | pw           |
|:------------------:|:------:|:------------:|
|admin | xayahsakalam@gmail.com | xAyaHandRakAn | 




### User
#### Note: Passwords of the accounts here are written in plaintext for easy access of the accounts but rest assured once add_data.js is called, these will be hashed.

| fullName        | userName           | email  | pw           | deladdr                                                            | contactnum                  |
| --------------- |:------------------:|:------:|:------------:|:------------------------------------------------------------------:|:---------------------------:|
| Nicole Kageyama | QueenOfTheCourt| queenNics@gmail.com |ihatehinata   |1138 Aguilar Street Sta. Cruz 1000, Manila  | 63917899505 |
| Anna Nijima | bestgirl | bestgirl@gmail.com |FistOfJustic3  |Cafe LeBlanc, 2/F Palarca Building Quezon Blvd. Cor. Peredes Street Sampaloc 1000 | 63919421330|
| Carla Oikawa | bestsetter1| bestsetter@gmail.com |0nehandt0ss   |Unit C D M Building Durian StreetDona Josefa Subdivision Pilar 1740, Las Pinas | 63916562555|
| Clarissa Shirogane | detectiveprincess | detectiveprincess@gmail.com |puzzlesRDaBomb  |15/F Ps Bank Center777 Paseo De Roxas Street1226, Makati City 1000| 63920961450|
| Ina Arisato | bestfemc| darkhour@gmail.com |Ms-door-kun |3 Anonas Street Potrero 1470, Malabon | 63917885212 |
| Arya Stark| FacelessMan| girlwithnoface@gmail.com |ThisGirlHasNoFace |260 Roosevelt Avenue, San Francisco Del Monte, 1100, Quezon City, Metro Manila| 63917627622 |



### Product
| pNum          | pName              | pPrice    | pQty   | pDesc                                | pColor    | pSize   | pImage          |
|---------------|:------------------:|:---------:|:------:|:------------------------------------:|:---------:|:-------:|----------------:|
| 100456 | Ultra Stretch Jeans | 1990.00 | 100 | Clothing and Science become one. This ultra stretch jeans was made possible through our newest technology. Jeans as light as feather and as smooth as baby's skin. Get yours now and become comfy and stylish today! | Blue | XS | ../images/product1a.jpg |
| 100457 | High Rise Jeans | 1490.00 | 599 | Introducing a new generation of High Rise fabric. Our most flattering and comfortable high rise jeans yet. | Black | XS | ../images/product2a.jpg |
| 100458 | Linen Open Collar Shirt | 790.00 | 658 | An open collar that makes the most out of the supple and elegant material. An item that has a tasteful, laid-back feel. | Yellow | XS | ../images/product3a.jpg |
| 100459 | Men's Socks | 390.00 | 1949 | Your toes stay warm and toasty. A textured, neat knitted fabric. | Gray |  | ../images/product4a.jpg |
| 100460 | Long Sleeve Sweatshirt | 1990.00 | 100 | Warm and comfortable brushed T-shirt. This item has been updated to make it an easy choice, even when worn on its own. | White | XS | ../images/product5a.jpg |


### Viewing the account details of a user
* http://localhost:3000/viewdetails/bestsetter1
* http://localhost:3000/viewdetails/QueenOfTheCourt
* http://localhost:3000/viewdetails/bestgirl
* http://localhost:3000/viewdetails/detectiveprincess
* http://localhost:3000/viewdetails/bestfemc
* http://localhost:3000/viewdetails/FacelessMan


### Editing the account details of a user
* http://localhost:3000/acctdetails/bestsetter1
* http://localhost:3000/acctdetails/QueenOfTheCourt
* http://localhost:3000/acctdetails/bestgirl
* http://localhost:3000/acctdetails/detectiveprincess
* http://localhost:3000/acctdetails/bestfemc
* http://localhost:3000/acctdetails/FacelessMan


### Delete account
* http://localhost:3000/delete/bestsetter1
* http://localhost:3000/delete/QueenOfTheCourt
* http://localhost:3000/delete/bestgirl
* http://localhost:3000/delete/detectiveprincess
* http://localhost:3000/delete/bestfemc
* http://localhost:3000/delete/FacelessMan

### Accessing Login page for admin
http://localhost:3000/adminlogin

