# Buzzer Beaters: NBA Stats Tracker

## Overview
**Buzzer Beaters** is a web application that tracks and displays NBA buzzer beater statistics. This app scrapes data from Basketball Reference and provides detailed information about game-winning shots, including player names, teams, game details, and shot distances. The application updates the database every 24 hours with the latest buzzer beater stats.

## Features
- **Automated Data Scraping**: Scrapes buzzer beater data from Basketball Reference and updates the database every 24 hours.
- **Comprehensive Data**: Displays statistics like player names, teams, opponents, game details, and shot distances.
- **Friendly UI**: Provides a clean, interactive UI.
- **Modular Design**: Built with a modular structure using React and Node.js.

## Project Structure
```
BuzzerBeaters/
├── public/         
├── src/
│   ├── assets/            # Fonts & images used
│   ├── backend/           # The python scraper script 
│   ├── components/        # Components such as the header
|   ├── pages/             # All the individual pages
│   └── App.js             # Main app component
└── README.md              # Project README file

```

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) 
- A [PostgreSQL](https://www.postgresql.org/) database set up and accessible. (only required for scraping).
- Chrome WebDriver installed and added to your system PATH (only required for scraping).
- [Python](https://www.python.org/) and the necessary Python packages installed for scraping.

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rfarrukh0/buzzer-beaters-app.git
   cd buzzer-beaters-app
   ```

2. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory with the following variables:
     ```
     DATABASE_URL=your_postgresql_database_url
     ```
   - Replace `your_postgresql_database_url` with your actual database URL.

## Running the Web Application

1. **Install npm Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   - The app will be running at `http://localhost:3000`.

## Running the Scraper

1. **Install Required Python Packages**:
   - Make sure you have Python and the required packages installed.

2. **Run the Scraper Manually**:
   - Navigate to the backend directory and run the scraper script:
   ```bash
   cd src/backend
   python scrape.py
   ```
   - This will scrape data from the Basketball Reference website and store it in the database.

3. **Automated Data Scraping**:
   - The scraper will automatically run every 24 hours to update the database with new buzzer beater information.
