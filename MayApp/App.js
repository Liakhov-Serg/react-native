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
import { PostsScreen } from "./Screens/PostsScreen/PostsScreen";

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
     <View style={styles.container}>
    <ImageBackground style={styles.image}
      source={require('./images/photoBG.jpg')}>
              
     <LoginScreen/>  
           
    </ImageBackground>
    </View>
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
