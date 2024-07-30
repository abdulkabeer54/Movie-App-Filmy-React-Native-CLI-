import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {GET} from '../Services/API';
import {IMAGE_POSTER_URL} from '../config';
import {Constants} from '../Constants';

const DiscoverMovies = props => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/discover/movie');
      const validMovies = response.results.filter(data => data.backdrop_path);
      const imageUrls = validMovies.map(
        data => `${IMAGE_POSTER_URL}${data.backdrop_path}`,
      );

      setMovies(validMovies);
      setImages(imageUrls.slice(0, 10)); // Get first 10 valid images
    };

    getMovies();
  }, []);

  return (
    <View>
      <SliderBox
        images={images}
        dotColor={Constants.secondaryColor}
        onCurrentImagePressed={index =>
          props.navigation.navigate('movieDetails', {movieId: movies[index].id})
        }
      />
    </View>
  );
};

export default DiscoverMovies;
