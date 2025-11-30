import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, TouchableOpacity, Pressable, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HomeScreen from './components/review/home';
import DetailScreen from './components/review/detail';
import AboutScreen from './components/review/about';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { FONT_FAMILY } from './utils/const';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    [FONT_FAMILY]: require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }}/>
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Chi tiết" }}/>
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
