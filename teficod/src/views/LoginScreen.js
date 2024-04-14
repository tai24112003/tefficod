import React, { component, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import styles from "./profile/styles";
import { Icon } from 'react-native-paper'

import { Component } from "react";

const showPassword = () => {};
export default login = ({ navigation }) => {
  const [getPassword, setPassword] = useState(false);
  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../assets/img/logo_img.png")}
    >
      <StatusBar></StatusBar>
      <SafeAreaView>
        <View style={styles.logo}>
          <Image
            source={require("../assets/img/logo_img.png")}
            style={styles.imageLogo}
          ></Image>
        </View>
        <View style={styles.View}>
          <View style={styles.TextInput}>
          <Icon source="account" size={27} color="white" />

            <TextInput
              style={{ width: "100%" }}
              placeholder="Email"
              placeholderTextColor={"#fff"}
              color="white"
            />
          </View>

          <View style={styles.TextInput}>
            <Icon
              source="lock"
              style={styles.icon}
              size={27}
              color="white"
            />
            <TextInput
              style={{ width: "80%" }}
              secureTextEntry={getPassword ? false : true}
              placeholder="Password"
              placeholderTextColor={"#fff"}
              color="white"
            />
            <TouchableOpacity
              onPress={() => {
                setPassword(!getPassword);
              }}
            >
              {getPassword ? (
                <Icon source={"eye-off"} size={27} color="white" />
              ) : (
                <Icon source={"eye"} size={27} color="white" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewBtn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BottomTabs");
            }}
            style={styles.btnSignIn}
          >
            <Text style={styles.textSignIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
