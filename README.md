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
* body-parser
* dotenv
* express
* express-handlebars
* hbs
* mongodb

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




### Users

| fullName        | userName           | email  | pw           | deladdr                                                            | contactnum                  |
| --------------- |:------------------:|:------:|:------------:|:------------------------------------------------------------------:|:---------------------------:|
| Nicole Kageyama | QueenOfTheCourt| queenNics@gmail.com |ihatehinata   |1138 Aguilar Street Sta. Cruz 1000, Manila  | +639178995055 |
| Carla Oikawa | bestsetter1| bestsetter@gmail.com |0nehandt0ss   |Unit C D M Building Durian StreetDona Josefa Subdivision Pilar 1740, Las Pinas | +639165625555|
| Anna Nijima | bestgirl | bestgirl@gmail.com |FistOfJustic3  |Cafe LeBlanc, 2/F Palarca Building Quezon Blvd. Cor. Peredes Street Sampaloc 1000 | +639194213030|
| Clarissa Shirogane | detectiveprincess | detectiveprincess@gmail.com |puzzlesRDaBomb  |15/F Ps Bank Center777 Paseo De Roxas Street1226, Makati City 1000| +639209614850|
| Ina Arisato | bestfemc| darkhour@gmail.com |door-kun   |3 Anonas Street Potrero 1470, Malabon | +639178856212 |
| Arya Stark| FacelessMan| girlwithnoface@gmail.com |noface   |260 Roosevelt Avenue, San Francisco Del Monte, 1100, Quezon City, Metro Manila| +639176276222 |



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

