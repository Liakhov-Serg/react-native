// import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from "expo-font";
import {
  StyleSheet,
  // Text,
  View,
  ImageBackground,
  // TextInput,
  // TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
// import { PostsScreen } from "./Screens/PostsScreen/PostsScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Home } from './Screens/Home/Home';
// import { MapScreen } from './Screens/MapScreen/MapScreen';

const MainStack = createStackNavigator();


export default function App() {
  
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
   if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <NavigationContainer>
               <MainStack.Navigator
                  initialRouteName="Registration"
                  screenOptions={{ headerShown: false }}
               >
                  <MainStack.Screen name="Login" component={LoginScreen} />
                  <MainStack.Screen name="Registration" component={RegistrationScreen} />
                  {/* <MainStack.Screen name="Home" component={Home} /> */}
                  {/* <MainStack.Screen name="MapScreen" component={MapScreen} /> */}
               </MainStack.Navigator>
            </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",

    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    position: "absolute",
    flex: 1,
    position: "relative",
  },
});
