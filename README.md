# Filmy

Filmy is a React Native CLI movie app that provides information about popular movies and actors. It leverages React Navigation and React Native Gesture Handler for smooth and intuitive user experience.

## Features

- **Home Page**:
  - **Carousel**: Displays 10 popular movies fetched from TMDB API via GET method.
  - **Lists**: Shows this week's popular actors and popular movies.
- **Movie Details Screen**:
  - Displays detailed information about the selected movie.
  - Includes a button that routes to the movie's official website, if available.

## Technologies Used

- **React Native CLI**
- **React Navigation**: For seamless navigation between screens.
- **React Native Gesture Handler**: For handling gestures smoothly.
- **TMDB API**: For fetching movie and actor data.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/filmy.git
   ```
2. Navigate to the project directory:
   ```sh
   cd filmy
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the app:
   ```sh
   npm run android   # For Android
   npm run ios       # For iOS
   ```

## API Usage

Filmy fetches data from [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api). You will need an API key to fetch data. Configure your API key in the project as shown below:

1. Create a `.env` file in the root of the project.
2. Add your TMDB API key:
   ```env
   TMDB_API_KEY=your_api_key_here
   ```

## Screenshots

### Home Page

![Home Page](screenshots/home-page.png)

### Movie Details Screen

![Movie Details Screen](screenshots/movie-details-screen.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [TMDB](https://www.themoviedb.org/) for the movie and actor data.
- [React Navigation](https://reactnavigation.org/) for navigation solutions.
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) for gesture handling.

## Contact

For any questions or suggestions, please open an issue or contact the repository owner.
```