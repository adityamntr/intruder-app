import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity, Button
} from "react-native";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";
import Cctv from "../components/Cctv";
import Unlock from "../components/Unlock";
import Adduser from "../components/Adduser";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class Secured extends React.Component {
  render() {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.secureStack}>
        <ImageBackground
          source={require("/home/aditya/Desktop/IntruApp/app/assets/images/secure.png")}
          resizeMode="contain"
          style={styles.secure}
          imageStyle={styles.secure_imageStyle}
        >
          <MaterialCardWithoutImage
            titleStyle="4 person inside house "
            style={styles.materialCardWithoutImage}
          ></MaterialCardWithoutImage>
          <View style={styles.materialCardWithoutImage1Row}>
            <MaterialCardWithoutImage
              titleStyle="last entry:"
              style={styles.mi1}
            ></MaterialCardWithoutImage>
            <MaterialCardWithoutImage
              titleStyle="last exit:"
              style={styles.mi2}
            ></MaterialCardWithoutImage>
          </View>
        </ImageBackground>
        {/* <Cctv style={styles.mb1}></Cctv> */}
        <TouchableOpacity 
        style={[styles.conCCTV, styles.mb1]}
        onPress={() => this.props.navigation.navigate('VideoStream')}>
      <Icon name="cctv" style={styles.capCCTV}></Icon>
    </TouchableOpacity> 
        <Unlock style={styles.mb2}></Unlock>
        <TouchableOpacity 
        style={[styles.conUser, styles.mb3]}
        onPress={() => this.props.navigation.navigate('AddUser')}>
      <Icon name="account-box-multiple" style={styles.capUser}></Icon>
    </TouchableOpacity> 
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    borderBottomRightRadius: 0
  },
  secure: {
    top: 0,
    left: 0,
    width: 733,
    height: 543,
    position: "absolute"
  },
  secure_imageStyle: {},
  materialCardWithoutImage: {
    height: 74,
    width: 301,
    backgroundColor: "rgba(207,216,220,1)",
    opacity: 0.94,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    overflow: "hidden",
    marginTop: 301,
    marginLeft: 182
  },
  mi1: {
    height: 67,
    width: 134,
    backgroundColor: "rgba(184,233,134,1)",
    opacity: 0.94,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    overflow: "hidden"
  },
  mi2: {
    height: 67,
    width: 134,
    backgroundColor: "rgba(184,233,134,1)",
    opacity: 0.94,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    overflow: "hidden",
    marginLeft: 26
  },
  materialCardWithoutImage1Row: {
    height: 67,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 186,
    marginRight: 253
  },
  mb1: {
    height: 65,
    width: 68,
    position: "absolute",
    left: 212,
    top: 600,
    borderRadius: 8
  },
  mb2: {
    height: 66,
    width: 68,
    position: "absolute",
    top: 600,
    backgroundColor: "rgba(76,175,80,1)",
    borderRadius: 8,
    left: 299
  },
  mb3: {
    height: 66,
    width: 68,
    position: "absolute",
    left: 388,
    top: 600,
    backgroundColor: "rgba(113,38,47,1)",
    borderRadius: 8
  },
  secureStack: {
    width: 733,
    height: 607,
    marginTop: 11,
    marginLeft: -150
  },
  conCCTV: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2
  },
  capCCTV: {
    color: "#fff",
    fontSize: 24
  },
  conUser: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2
  },
  capUser: {
    color: "#fff",
    fontSize: 24
  }
});

export default Secured;
