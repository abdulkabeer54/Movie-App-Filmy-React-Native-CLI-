import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {Constants} from '../Constants';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

const navigation = useNavigation()

    useEffect (() => {
        setTimeout(() => {
            navigation.navigate('Home')
        },2000)
    },[])
  return (
    <View
      style={{
        backgroundColor: Constants.baseColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animatable.Text animation='flipInY' style={{ color:Constants.textColor, fontSize:46, fontWeight:800}}>FILMY</Animatable.Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
