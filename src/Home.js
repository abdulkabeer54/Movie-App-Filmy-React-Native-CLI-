import { View, ScrollView } from 'react-native';
import React from 'react';
import DiscoverMovies from './Components/DiscoverMovies';
import { Styles } from './Styles';
import TrendingPeople from './Components/TrendingPeople';
import TrendingMovies from './Components/TrendingMovies';

const Home = (props) => {
  return (
    <ScrollView contentContainerStyle={Styles.scrollViewContent}>
    <View style={Styles.sectionBg}>
      <DiscoverMovies navigation={props.navigation} />
      <TrendingPeople title="Trending People" url="/trending/person/week" />
      <TrendingMovies
          title="Trending Movies"
          url="/movie/top_rated"
          navigation={props.navigation}
        />
        <View style={Styles.bottomSpace} />
        </View>
    </ScrollView>
  );
};

export default Home;
