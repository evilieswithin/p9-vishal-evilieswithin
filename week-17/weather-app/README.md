# Weather App

A simple weather application that provides current weather information for a specific city.

## Features

- Get the current temperature and humidity for a given city.
- Display the weather information in a user-friendly UI.

## Technologies Used

- Frontend: React
- Backend: Node.js with Express
- External API: OpenWeatherMap

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone <Add url once you are done!!>

2. Navigate to the project directory:
    
    cd weather-app

3. Navigate to the frontend folder and Install the dependencies:
   
   npm install


4. Navigate to the backend folder Start the backend server:

   node server.js

5. In a separate terminal, start the frontend development server:
  
   npm start

6. Open your browser and visit http://localhost:3000 to access the Weather App.


## Usage 

1. Enter the name of a city in the input field.
2. Click on the "Get Weather" button.
3. The application will fetch the current temperature and humidity for the specified city and display the information on the screen.


## API CONFIGURATION

This application uses the OpenWeatherMap API to retrieve weather data. To use the application, you need to sign up for a free API key from OpenWeatherMap. Once you have obtained the API key, update the .env file in the backend folder with your API key:

OPENWEATHERMAP_API_KEY=542dfbcd3efbefffc6c2ca89f368b336

## Contributing
Contributions are welcome! If you find any issues or want to enhance the application, feel free to submit a pull request.
