# Portfolio Website

This is my personal portfolio website built using React and Tailwind CSS. The website showcases my projects, work experience, and provides an easy way to switch between multiple languages (English, German, Italian). Definitely overkill using React, but it was fun to try it out using this library.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Multi-language Support**: Users can switch between English, German, and Italian.
- **Responsive Design**: Fully responsive design ensuring usability on different devices.
- **Project Showcase**: Displays a list of my projects with descriptions and technologies used.
- **Work Experience**: Provides an overview of my work experience with details on each role.
- **Social Media Links**: Includes links to my GitHub, LinkedIn, Instagram, Twitter, and Medium profiles.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **i18next**: Internationalization framework for React.
- **React-i18next**: Integration of i18next for React.
- **Vercel**: Hosting platform for modern web projects.

## Setup

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/YourUsername/portfolio.git
   cd portfolio

2. **Install dependencies:**
   ```sh
    npm install
    # or
    yarn install

3. **Start the development server:**
    ```sh
    npm start
    # or
    yarn start

4. **Open your browser and navigate to:**
   ```sh
   http://localhost:3000

## Usage

- **Change Language**: Use the language buttons in the header to switch between English, German, and Italian.
- **Navigate Sections**: Use the navigation links to jump to different sections of the page (About, Experience, Projects).
- **View Projects**: Click on project links to view details and visit the live projects or repositories.

## Project Structure

```sh
portfolio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── i18n/
│   │   └── ...
│   ├── images/
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md

## Components
    
    ### MainPage:
        The main component containing all sections of the portfolio.
    
    ### i18n:
         Directory for i18n configuration and language JSON files.

## Contributing

1. **Fork the repository**

2. **Create your feature branch:**

   ```sh
   git checkout -b feature/your-feature

3. **Commit your changes:**
   
    ```sh
    git commit -m 'Add some feature'

4. **Push to the branch:**
    
    ```sh
    git push origin feature/your-feature

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.







