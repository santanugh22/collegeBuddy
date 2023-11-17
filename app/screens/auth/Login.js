import { useLayoutEffect } from 'react'
import { StyleSheet, Text, View,SafeAreaView,ImageBackground, Dimensions,TextInput,KeyboardAvoidingView, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";




const {height:HEIGHT,width:WIDTH}=Dimensions.get('screen')

const Login = () => {
  const navigation=useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
      
    })
  
    
  },[])
 



  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36454f" }}>
      <ImageBackground
        source={require("../../assets/login-bg.jpg")}
        style={styles.topImageBackground}
        blurRadius={5}
      >
        {/* This is the Top Sections of the App */}
        <View style={styles.topSection}>
          {/* <Ionicons name="ios-compass-outline" size={50} color="black" /> */}
        </View>
        {/* Top Section ENDS */}

        {/* Middle Section containing Login */}
        <KeyboardAvoidingView style={styles.middleSection}>
          <LoginContainer />
        </KeyboardAvoidingView>
        {/* MiddleSection END */}

        {/* Bottom Section */}

        <View style={styles.bottomSection}></View>
      </ImageBackground>
    </SafeAreaView>
  );
}
export default Login
const styles = StyleSheet.create({
  topImageBackground: {
    height: HEIGHT,
    width: WIDTH,
    objectFit: "cover",
  },
  topSection: {
    height: WIDTH*0.2,
    zIndex: 999,
    shadowColor: "#fff",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    justifyContent: "center",
    alignItems: "center",
    marginTop:30
  },
  middleSection: {
    height: HEIGHT*0.4,
    width: 0.5 * WIDTH,
    backgroundColor: "#F8F8FF",
    alignSelf: "center",
    marginTop: 12,
    borderRadius: 12,
    shadowColor: "#fff",
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.6,


  },
  bottomSection: {
    height: HEIGHT / 5,
    width: WIDTH*0.7,
    backgroundColor: "#F0F8FF",
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 12,



  },
});


// this is the login Container

function LoginContainer(){
  return (
    <View style={{ flex: 1, gap: 20 ,width:0.7*WIDTH}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          marginTop: 20,
        }}
      >
        <AntDesign name="rightcircle" size={40} color="black" />
        <Text style={{ fontSize: 22, fontStyle: "italic" }}>
          Enter the Matrix
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          top: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Entypo
          name="email"
          size={30}
          color="black"
          style={{ marginLeft: 12 }}
        />
        <TextInput
          placeholder="Email"
          style={{
            height: 50,
            width: WIDTH * 0.5,
            borderRadius: 2,
            borderColor: "grey",
            borderWidth: 2,
            fontSize: 22,
            marginLeft: 10,
            padding: 7,
            borderRadius: 10,
          }}
          placeholderTextColor={"black"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          top: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="form-textbox-password"
          size={35}
          color="black"
        />
        <TextInput
          placeholder="Password"
          style={{
            height: 50,
            width: WIDTH * 0.8,
            borderRadius: 2,
            borderColor: "grey",
            borderWidth: 2,
            fontSize: 22,
            marginLeft: 10,
            padding: 7,
            borderRadius: 10,
          }}
          placeholderTextColor={"black"}
        />
      </View>
      <View style={{ marginTop: 30, alignSelf: "center" }}>
        <Pressable>
          <View
            style={{
              height: 70,
              width: 300,
              backgroundColor: "#6495ED",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
              shadowColor: "#fff",
              shadowOffset: {
                height: 2,
                width: 1,
              },
              shadowOpacity: 0.8,
              shadowRadius: 5,


            }}
          >
            <Text style={{ fontSize: 30, fontWeight: 500, color: "#F0F8FF" }}>
              Enter
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

