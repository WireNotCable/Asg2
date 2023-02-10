# Grocery

Grocery is an ecommerce website that allows users to purchase groceries and essential products, from the comfort of their homes.

**Site Deployment**: [Click here](https://wirenotcable.github.io/Asg2/)
 
## Design Process

### For E-Commerce Website:
We went with a simple lay-out to showcase the various features and products available on our store so that it is  easy and intuitive for users to find and access the services that they are looking for. As for the colour scheme, we decided to go with green, white & grey as we wanted to use colours that were calm & soothing for the eyes of our users. Moreover, the colour green is often associated with grocery stores. Therefore, we found it apt to use it as part of our colour scheme.

### For Fruits Slicer Game:
We went with a 2D (2-Dimensional) Pixelated game as we felt that it would be easy to design in a short frame of time. Moreover, upon testing out our game with various 2D and 3D layouts, we noticed that 2D pixelated images for the fruits seemed to fit well into the animation used for the explode function. Therefore, we went on to design our game completely in 2D pixel art.

### User Stories:
- As a new customer, I want to be able to navigate through the website easily to find the products I am looking for.
- As a regular customer, I want to receive promotions or offers to reduce the cost of my purchases.

### Wireframe:
Link to **Wireframe**: [Click here](https://xd.adobe.com/view/fb8966fd-4990-4537-a5d4-e07558fe6d1a-aeda/)

### Pitch: 
Link to **Pitch**: [Click here](https://drive.google.com/drive/folders/1QbsGB4L5N64DsywM0-aP97FUDTaAfbEt?usp=sharing)

## Features
 
### Existing Features
- View Products

  > To view available products in the store
- Cart

  > To store products in a certain location before proceeding on to payment
- Search

  > To search and find specific products using the name of a product or brand
- Category

  > To filter out products based on category type for the ease of locating products
- Locate us

  > To show the locations of our outlets so that customers can visit them
- Sign in / Sign up

  > To creates accounts through which customers can experience offers and promotions
- Coin / Point system

  > To reward customers with accounts for using our services, by providing them coins (each equivalent to a cent) to use as part of their payment
- Fruit Slicing Game

  > To play and earn rewards that will be credited into the points system based on points scored

### Features Left to Implement
- Products liked
- Admin Page
- Discounts & Offers
- Newsletters
- Feedback form

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  > The project uses **HTML** to construct the HTML document for the website.

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  > The project uses **CSS** for styling the website

- [JavaScript](https://www.javascript.com/)
  > The project uses **JavaScript** to add functionality to the website.

- [JQuery](https://jquery.com)
  > The project uses **JQuery** to simplify DOM manipulation.

- [Restdb.io](https://restdb.io/)
  > The project uses **restdb.io** to store details regarding aspects such as products & user accounts.

- [Google Cloud](https://cloud.google.com/)
  > The project uses **Google Cloud** to generate the API key for the map used in the About Us page.

## Testing
1. Signing up as a new user
  - Tried entering an invalid email address to check if the error message would appear
  - Tried entering passwords that did not match for the create password and confirm password sections of sign up form to check if the error message would appear

2. Cart
  - Tried adding a product to the cart and then removing it to check if the cart would be updated accordingly
  - Tried adding a product to the cart and then changing the quantity to check if the cart would be updated accordingly
  - Tried the pay button to check if the cart would be cleared
  - Tried checking if the total price would be updated accordingly

3. Point system
  - Tried checking if the total coins after signing up would be 100
  - Tried checking the total coins would be updated accordingly after a purchase is made
  - Tried checking the total coins would be updated accordingly after playing the fruit slicing game

4. Fruit Slicing Game
  - Tried checking if the game would start when the play button is clicked
  - Tried checking if the score would update everytime a fruit is sliced
  - Tried checking if the game would end when the player runs out of lives
  - Tried checking if the total coins would be updated accordingly after a score of >10 is obtained


### Extensive testing (For each feature)
Link to **Extensive testing**: [Click here](https://docs.google.com/spreadsheets/d/1VFQuwRBjnRbE1Mq0GdWLr-V5l51O4tmYuKnOBXyqfCU/edit?usp=sharing)

### W3 Validator checks for HTML & CSS:
- HTML checker produced 1 error
- CSS checker produced 4 errors

### Problems:
- RESTDB.io has a limit for the no. of requests per day. Therefore, data might not load if the limit has exceeded.
- Background of game might not fit properly on some devices depending on screen sizes.

## Credits

### Contributions
<details><summary>Xin Yin (Mainly Back-End)</summary>
<p>

- Database for user accounts and products
- JavaScript for everything other than search bar & locate us 
- HTML & CSS for sign-in / sign-up page 
- Assisted Karthik with HTML & CSS

</p>
</details>

<details><summary>Karthik (Mainly Front-End)</summary>
<p>

- HTML & CSS for everything other sign-in / sign-up page 
- JavaScript for search bar & locate us
- README.md
- Assisted Xin Yin with JavaScript and Database

</p>
</details>

### Content
- The names of products was copied from [Fairprice](https://www.fairprice.com.sg/)

### Media
- The images used for the products were obtained from [Fairprice](https://www.fairprice.com.sg/)
- The images used for the fruits in the fruits slicing game were obtained from [Itch.io](https://itch.io/)

### Acknowledgements
- We received inspiration for this project from [Fairprice](https://www.fairprice.com.sg/)
- We received inspiration for this project from [Mr. Web Designer](https://www.youtube.com/@MrWebDesignerAnas)
- We received inspiration for the sign-in / sign-up page from [Online Tutorials](https://www.youtube.com/@OnlineTutorialsYT)
- We received inspiration for the cart page from [codewithsadee](https://www.youtube.com/@codewithsadee)