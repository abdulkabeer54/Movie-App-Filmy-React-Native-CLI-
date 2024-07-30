import { Dimensions, StyleSheet } from 'react-native';
import { Constants } from './Constants';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: Constants.baseColor,
    // Removed height property to let the content determine the height
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 40, // Extra space at the bottom
    backgroundColor: Constants.baseColor, // Ensure background color is consistent
  },
  bottomSpace: {
    height: 40, // Adjust this value to control the extra space at the bottom
  },
  trendingPeopleImage: {
    height: 70,
    width: 70,
    borderRadius: 500,
  },
  trendingPeopleName: {
    width: 60,
    color: Constants.textColor,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  trendingPeopleContainer: {
    margin: 10,
  },
  heading: {
    fontSize: 19,
    color: Constants.fadedColor,
    margin: 10,
  },
  posterImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  movieTitle: {
    color: Constants.textColor,
    width: 150,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 13,
  },
  ImageBg: {
    width: deviceWidth,
    height: 250,
  },
  detailsMovieTitle: {
    position: 'absolute',
    top: 0,
    width: '100%',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1,
  },
  linkContainer: {
    backgroundColor: Constants.secondaryColor,
    borderRadius: 100,
    padding: 10,
    width: 40,
    marginLeft: 20,
    marginTop: -20,
  },
  overview: {
    color: Constants.textColor,
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 16,
  },
  details: {
    color: Constants.secondaryColor,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Constants.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  genre: {
    color: Constants.textColor,
    fontSize: 16,
  },
  release_dateContainer : {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Constants.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  release_date : {
    color: Constants.textColor,
    fontSize: 16,
  },
});

export default Styles;
