# Presentation


The aim of this test is to evaluate your knowledge on planning use cases and writing automation scripts. To do so, you will have a practical exercise to complete. The understanding of your thinking and the quality of your code will be as important as the result itself.



You will have at your disposition a user story, some mockups and acceptance criteria that can be tested on the following [Ecommerce Demo site](https://www.saucedemo.com/).



You are free to present your answers as you see fit and complete missing elements by yourself. For the coding part, you are free to use any coding language you want (preferably javascript or JAVA).



Please send us the work for the following points :

* Enumerate the uses cases that comes to your mind when reading the user stores

* Write the test scenarios you think of

* Define the data set you will need for your test cases

* Write the automation scripts :

	* Comments you will add in your code will help us understand how you built the test.

	* Add inside README file all the needed commands to execute your test on a linux / windows  local environment.

## How to send your code?  

* Fork the Github repository into your own **private** personal repository in **in Github**

* Push your code / docs into a new branch with the following name:
  * firstname_lastname
  
  * please use snake case format

*  Invite your reviewers as as **Collaborator**
  * open the following menu menu: **Settings  > Collaborators**
  * click on **Add people** button
  * add **Hazem-Ben-Khalfallah**

* Create a new pull request and set **Hazem-Ben-Khalfallah** as Reviewer

**Good luck !**

# User story
As a registered buyer, I can checkout items selected in my shopping cart so that I can complete my purchase.

## Steps
* Log into the site (using the following credentials: standard_user/secret_sauce)

* Sort the items (Lowest Price sort)

* Add two or more items to the shopping cart

* Visit the shopping cart

* Assert that the items that I added in the cart are correct

* fill Checkout details

* Assert I am purchasing the correct items

* Assert the total price

* Finish checkout

## Acceptance criteria
* First name, last name and Zip/Postal code are required when completing checkout information

* Checkout overview page should display Cart total amount which is calculated as follows:

  * Total = item total + tax

  * item total =  Σ item price * quantity

  * tax = item total * 8%

* When the checkout is complete, the cart is set back to empty

# Mockups
![Login page](images/1.png)
<sup>Login page</sup>

![Inventory page - empty cart](images/2.png)
<sup>Inventory page - empty cart</sup>

![Inventory page - some items selected](images/3.png)
<sup>Inventory page - some items selected</sup>

![Cart detail page](images/4.png)
<sup>Cart detail page</sup>

![Checkout information page](images/5.png)
<sup>Checkout information page</sup>

![Checkout information page - required fields validation](images/6.png)
<sup>Checkout information page - required fields validation</sup>

![Checkout Completion page](images/7.png)
<sup>Checkout Completion page</sup>

![Thank you page](images/8.png)
<sup>Thank you page</sup>



# 🛒 E-commerce Checkout Automation – Naoui Youssef

## 📄 Project Description

This project automates the checkout flow of the [Sauce Demo](https://www.saucedemo.com/) e-commerce site.  
It tests login, sorting products, adding items to the cart, filling out checkout information, validating total price with tax, and completing a purchase.

---

## Tech Stack

- Cypress v12+
- JavaScript (ES6+)
- Cross-platform: Linux / Windows


1. Login with valid credentials
The user logs in using valid username and password.

2. Sort items by lowest price
The user sorts products in ascending order by price to find cheaper options first.

3. Add items to the shopping cart
The user selects two or more products to add to the cart.

4. View and verify shopping cart
The user opens the cart to verify that the correct products are listed (name, price, quantity).

5. Initiate checkout process
The user clicks on checkout and is redirected to the checkout information page.

6. Fill in checkout details
The user inputs first name, last name, and zip/postal code — all of which are required.

7. Review checkout overview
The user sees the item list, subtotal, tax, and total. The tax is calculated as 8% of the item total.

8. Complete the purchase
The user clicks "Finish" to complete the checkout and sees a confirmation.

9. Empty cart after checkout
After the order is completed, the cart is automatically emptied.


-------------------------------------------------------------------------


TS01 – Login with valid credentials
Given I am on the login page

When I enter standard_user and secret_sauce

Then I should be redirected to the products/inventory page

TS02 – Sort products by lowest price
Given I am on the inventory page

When I choose "Price (low to high)" from the sort dropdown

Then The items should appear in ascending order of price

TS03 – Add multiple items to cart
Given Products are sorted by lowest price

When I click “Add to cart” on two or more items

Then The cart icon should display the correct item count

TS04 – Validate cart contents
Given I added specific items

When I visit the shopping cart page

Then I should see the correct items with matching names and prices

TS05 – Attempt checkout with missing info
Given I am on the checkout information page

When I leave one or more fields empty

Then I should see an error message saying the field is required

TS06 – Fill checkout form with valid info
Given I am on the checkout information page

When I enter first name, last name, and zip code

Then I should be able to continue to the overview page

TS07 – Validate order summary and price
Given I am on the checkout overview page

When I review the items

Then I should see:

Correct item names and prices

Item total = sum of individual prices

Tax = item total * 0.08

Total = item total + tax

TS08 – Complete the checkout process
Given I am on the overview page

When I click “Finish”

Then I should see a “Thank you” or order confirmation message

TS09 – Verify cart is emptied after checkout
Given I have completed the order

When I go back to the cart

Then The cart should be empty


| Field    | Value           |
| -------- | --------------- |
| Username | `standard_user` |
| Password | `secret_sauce`  |



| Field      | Value   |
| ---------- | ------- |
| First Name | `John`  |
| Last Name  | `McArther`   |
| Zip/Postal | `1009` |

