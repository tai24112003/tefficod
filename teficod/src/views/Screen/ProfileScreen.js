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
import styles from "./styles";
import { Icon } from 'react-native-paper'
import { Component } from "react";

export default ProfileScreen = ({ navigation }) => {
  return (
    (<StatusBar></StatusBar>),
    (
      <View style={styles.viewProfile}>
        <View style={styles.imageBackground}>
          <Image
            style={styles.imgBackground}
            source={require("../../assets/img/logo_img.png")}
          ></Image>
        </View>
        <View style={styles.avatar}>
          <Image
            style={styles.imgAvatar}
            source={require("../../assets/img/logo_img.png")}
          ></Image>
        </View>
        <View>
            <Text style={styles.source}>TEFICOD</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.option}>
            <TouchableOpacity>
                <Text style={styles.textOption}>Edit Profile</Text> 
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon source={"pencil"} size={27} color="#00ACBF" />
            </TouchableOpacity>
          </View >
          <View style={styles.line}></View>
          <View style={styles.option}>
          <TouchableOpacity>
                <Text style={styles.textOption}>Change Password</Text> 
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon source={"key"} size={27} color="#00ACBF" />
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
          <View style={styles.option}>
          <TouchableOpacity>
                <Text style={styles.textOption}>About Teficod</Text> 
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon source={"information-outline"} size={27} color="#00ACBF" />
            </TouchableOpacity>
          </View>
        </View>
        <View >
            <TouchableOpacity style={styles.logOut}>
                <View><Text style={styles.textLogOut}>Log Out</Text></View>
            <View><Icon source={"logout"} size={27} color="red" /></View>
            </TouchableOpacity>
            </View>
      </View>
    )
  );
};
