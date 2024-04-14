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
import {Icon} from 'react-native-paper'
import { Component } from "react";

export default AboutTeficodScreen = ({ navigation }) => {
  return (
    (
      <SafeAreaView>
        <View style={styles.viewAbout}>
          <View style={styles.avatar}>
            <Image
              style={styles.imgAvatar}
              source={require("../../assets/img/logo_img.png")}
            ></Image>
          </View>
          <TouchableOpacity style={styles.version}>           
            <Text >
              Application Version
            </Text>
            <Text style={{}} >
              1.0.7.29
            </Text>
          </TouchableOpacity>
          <View style={styles.about}>
          <TouchableOpacity style={styles.detailAbout}>           
            <Text>
             WebSite
            </Text>
              <Icon source={"chevron-right"} size={20} />

          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.detailAbout}>           
            <Text style={{}} textBack>
             Youtube
            </Text>
              <Icon source={"chevron-right"} size={20} />

          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.detailAbout}>           
            <Text style={{}} textBack>
             Facebook
            </Text>
              <Icon source={"chevron-right"} size={20} />

          </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  );
};
