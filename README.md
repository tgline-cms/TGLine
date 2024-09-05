# TGLine - Website

**TGLine** specializes in the production of commercial pavilions made from sandwich panels. This project is a website that showcases the company's offer, a brief description of their business, and contact information.

## Technologies

This project was built using the following technologies:

-  ![Gatsby](https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white) **Gatsby.js** – a fast React-based framework for building static websites.
- ![DecapCMS](https://img.shields.io/badge/DecapCMS-3D3834?style=for-the-badge&logo=netlifycms&logoColor=white) **DecapCMS** – integrated CMS allowing easy content management by administrators.
- ![React-Bootstrap](https://img.shields.io/badge/React--Bootstrap-61DAFB?style=for-the-badge&logo=react&logoColor=black) **React-Bootstrap** – used for styling components and ensuring responsive design.
- ![SCSS](https://img.shields.io/badge/SCSS-hotpink?style=for-the-badge&logo=sass&logoColor=white) **SCSS** – a CSS preprocessor enabling modular and complex styling.

## Features

- **Homepage** – welcome page
- **About page** – a brief description of TGLine and their commercial pavilion products.
- **Offer page** – information about the company’s products.
- **Product details page** – detailed information about a specific product.
- **Contact page** – contact details.
- **Responsive design** – the site is fully responsive and optimized for mobile devices.
- **Content management** – with DecapCMS integration, content can be easily managed through an admin panel.

## Installation

To run the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/tgline-cms/TGLine
    ```
2. Navigate to the project folder:
    ```bash
    cd tgline-website
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run develop
    ```

The site will be available at `http://localhost:8000`.

## CMS Configuration

To use DecapCMS:

1. Configure the repository according to the DecapCMS documentation.
2. The CMS configuration file is located in the `static/admin/config.yml` directory. You can adjust the admin panel settings there.

## Styling

The project uses **SCSS** for styling, compiled into CSS. Main style files are located in the `src/style/` directory. The SCSS structure is modular to facilitate style management.

## Deployment

The project can be deployed on various static site hosting platforms (e.g., Netlify, Vercel). To deploy:

1. Build the site:
    ```bash
    npm run build
    ```
2. Deploy the `public` folder to the server or set up automatic deployment (e.g., via Netlify).

## Author

The website was created by Beata Maro for TGLine.
