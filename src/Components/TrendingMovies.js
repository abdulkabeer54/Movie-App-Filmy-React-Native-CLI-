import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {IMAGE_POSTER_URL, POSTER_IMAGE} from '../config';
import {GET} from '../Services/API';
import Styles from '../Styles';
import Loader from './Loader';

const TrendingMovies = props => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const data = await GET(props.url);
      setMovies(data.results);
      setLoading(false);
    };

    getMovies();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={Styles.heading}>{props.title}</Text>
        </View>
      )}
      <FlatList
        keyExtractor={item => item.id}
        data={movies}
        horizontal
        renderItem={item => displayMovies(item, props)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const displayMovies = ({item}, props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push('movieDetails', {movieId: item.id});
      }}
      style={{marginHorizontal: 10}}>
      <Image
        source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
        style={Styles.posterImage}
      />
      <Text style={Styles.movieTitle}>{item.original_title}</Text>
    </TouchableOpacity>
  );
};

export default TrendingMovies;
