import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GET} from '../Services/API';
import Loader from './Loader';
import Styles from '../Styles';
import {IMAGE_POSTER_URL} from '../config';
import {Constants} from '../Constants';
import TrendingMovies from './TrendingMovies';
import TrendingPeople from './TrendingPeople';

const MovieDetails = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({}); // Initialize details as an object

  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${props.route.params.movieId}`);
      setDetails(data);
      setLoading(false);
    };
    getDetails();
  }, []);

  const renderGenre = ({item}) => (
    <View style={Styles.genreContainer}>
      <Text style={Styles.genre}>{item.name}</Text>
    </View>
  );

  const renderDetail = ({item}) => (
    <View style={Styles.detailContainer}>
      <Text style={Styles.heading}>{item.label}</Text>
      <Text style={Styles.details}>{item.value}</Text>
    </View>
  );

  const detailsData = [
    { id: '1', label: 'BUDGET', value: `$${details.budget}` },
    { id: '2', label: 'DURATION', value: `${details.runtime} min` },
    { id: '3', label: 'RELEASE DATE', value: details.release_date }
  ];

  return (
    <ScrollView style={Styles.sectionBg}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <View>
            <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
              style={Styles.ImageBg}
            />
            <Text style={Styles.detailsMovieTitle}>
              {details.original_title}
            </Text>
            {details.homepage ? (
              <View style={Styles.linkContainer}>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(details.homepage);
                  }}>
                  <Image
                    source={require('../../assets/link.png')}
                    style={styles.link}
                  />
                </TouchableOpacity>
              </View>
            ) : null}

            <Text style={Styles.heading}>OVERVIEW</Text>
            <Text style={Styles.overview}>{details.overview}</Text>
          </View>

          <Text style={Styles.heading}>DETAILS</Text>
          <FlatList
            horizontal
            data={detailsData}
            renderItem={renderDetail}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.detailsList}
          />

          <Text style={Styles.heading}>GENRE</Text>
          <FlatList
            horizontal
            data={details.genres}
            renderItem={renderGenre}
            keyExtractor={item => (item.id ? item.id.toString() : Math.random().toString())}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.genreList}
          />

          <TrendingPeople
            title="CAST"
            url={`/movie/${props.route.params.movieId}/credits`}
            isForPage='details'
          />

          <TrendingMovies
            title="SIMILAR MOVIES"
            navigation={props.navigation}
            url={`/movie/${props.route.params.movieId}/similar`}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  link: {
    height: 22,
    width: 22,
    color: Constants.textColor,
  },
  genreList: {
    paddingVertical: 10,
  },
  detailsList: {
    paddingVertical: 10,
  },
  detailContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
});

export default MovieDetails;
