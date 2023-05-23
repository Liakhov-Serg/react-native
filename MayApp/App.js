import { useFonts } from "expo-font";

// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";

export default function App() {
  
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
   if (!fontsLoaded) {
    return null;
  }
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<View style={styles.container} behavior="padding">
    <ImageBackground style={styles.image}
      source={require('./images/photoBG.jpg')}>
      
        {/* <View>
          <Text style={styles.register}>Регистрация</Text>
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>EMAIL ADRESS</Text>
        <TextInput style={styles.input} textAlign={"center"} />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.inputTitle}>PASSWORD</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <Text style={ styles.btnTitle}>SIGN IN</Text>
            </TouchableOpacity>
          </View> */}
     <LoginScreen/>  
           
    </ImageBackground>
    </View>
      // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  // register: {
  //   color: '#212121',
  //   fontSize: 30,

  // },
  text: {
    color: "white",
    fontSize: 20,
  },
  
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#f5f5dc',
  //   marginHorizontal: 0,
  //   height: 50,
  //   borderRadius: 10,
  //   color: "#fff"
  // },
//   form: {
// marginHorizontal: 40,
//   },
  // inputTitle: {
  //   color: "#f0f8ff",
  //   marginBottom: 10,
  //   fontSize: 18,
  // },
  // btn: {
  //   backgroundColor: '#ffb6c1',
  //   height: 50,
  //   borderRadius: 10,
  //   marginTop: 40,
  //   justifyContent: 'center',
  //   alignItems: 'center'

  // },
//   btnTitle: {
// color: '#fff'
//   }
});
