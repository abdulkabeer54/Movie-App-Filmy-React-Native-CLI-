import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Home from './src/Home';
import { Constants } from './src/Constants';
import { Image, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import MovieDetails from './src/Components/MovieDetails';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SplashScreen from './src/Components/SplashScreen';

type RootStackParamList = {
  Home: undefined;
  movieDetails: undefined;
  SplashScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Constants.baseColor} barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={screenOptions}>
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={headerStyle} 
          />
          <Stack.Screen
            name="movieDetails"
            component={MovieDetails}
            options={headerStyle}
          />
          <Stack.Screen 
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }} // Hide the header for SplashScreen
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

// Define screenOptions with the correct type
const screenOptions = ({ navigation, route }: NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>) => ({
  headerTitleAlign: 'center' as const,
  headerLeft: () => (
    <View>
      <TouchableOpacity 
        onPress={() => {
          if (route.name !== 'Home') {
            navigation.goBack();
          }
        }}
      >
        <Image 
          source={require('./assets/back.png')} 
          style={styles.icon} 
        />
      </TouchableOpacity>
    </View>
  ),
  headerRight: () => (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image 
          source={require('./assets/home.png')} 
          style={styles.icon} 
        />
      </TouchableOpacity>
    </View>
  ),
});


// Define headerStyle with the correct type
const headerStyle: NativeStackNavigationOptions = {
  title: 'Filmy',
  headerStyle: { backgroundColor: Constants.baseColor },
  headerTitleStyle: { color: Constants.textColor },
};

// Styles for the header icon
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default App;
