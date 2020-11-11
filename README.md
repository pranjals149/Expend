<h1 align='center'>Expend</h1>

<p align='center'><img src='https://raw.githubusercontent.com/pranjals149/acevent/75eed4a1a0a65bdde48eddf5e5c061fca26b3934/expend/expend.svg' height=400 width=400 /></p>

### Description

This is an functional e-commerce application which lets you to select a product of your choice, add it to your cart, proceed to checkout. It further allows the users to remove the item from the cart at any point before final payment. It also displays the total amount in **INR** to be paid.

### Setup on local system

1. Clone this repository
2. Now move into the project directory - `cd expend`
3. First install all the dependencies used in this project - `npm install`
4. Now, all the required dependencies are installed. Run the project on your local server by - `npm start`
   **Now your app will start on http://localhost:3000/**

### Working Screenshot

<img src='./Expend.gif' />

### Dependencies used

1. Material-UI
2. Stripe-js
3. React-stripe-js
4. axios
5. firebase
6. react-currency-format
7. React

### Working of the app

Firstly, a user need to sign up to the app. On the startup page, there are various products. If a user liked that product click on **Add to Basket**. Select various products that you like to buy and then click on the top left cart icon to open the cart. In the cart, you will see your products and the total amount to be paid. A user **remove any item** and proceed further to checkout. At the checkout page you will see the total products, total amount and the products that a user is going to buy.
