# Webshop Application

## Description

This is a simple **Webshop** web application built with **Next.js**. The application allows users to browse products by category, add items to a cart, and view the cart contents. The app fetches product data from the **Fake Store API** and persists cart state across page reloads.

## Technical Requirements

- The application is built using **Next.js** (latest version).
- It consumes the **Fake Store API** to fetch categories and product data.
- The application runs locally and can be started using the provided commands.
- The app is **responsive** and works seamlessly on mobile, tablet, and desktop layouts.
- Cart state is **persistent** after a page reload using local storage or state management.
- The project uses **plain CSS** and **CSS modules** for styling.

## Functional Requirements

### Main Page

- Displays a list of all product categories.
- Each category is clickable and leads to the respective **Category Page**.
- The user can navigate to the **Cart Page** by clicking a basket icon at the top-right corner.

### Category Page

- Displays the category name and the total product count for the selected category.
- Lists products specific to the selected category, showing:
  - Product title
  - Price
  - Product image (if available)
- Allows users to add products to the cart.
- Includes a basket icon at the top-right corner for easy navigation to the **Cart Page**.

### Cart Page

- Displays all products added to the cart.
- Shows total price of the products added to the cart.
- Users can remove products from the cart.
- Users can change the quantity of products in the cart.

## Quality Requirements

- **Maintainability**: The code is organized and easy to modify in the future.
- **Extendibility**: The app structure allows for easy additions and feature updates.
- **Readability**: The code is clean, with clear variable names and logical structure.

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- npm or yarn

### Installation

Clone the repository:

Install dependencies:

### Running the Application Locally

To run the application locally in development mode, use the following command:

```
npm run dev
# or with yarn
yarn dev
```

```
npm install
# or if you use yarn
yarn install
```

```
git clone https://github.com/your-username/webshop-app.git
cd webshop-app
```
