import React, { component, useState } from "react";
import {
  StatusBar,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import styles from "./styles";
import { Icon } from 'react-native-paper'

export default EditProfileScreen = ({ navigation }) => {
  return (
    (<StatusBar></StatusBar>),
    (
      <View>
        <View>
          <TouchableOpacity style={styles.back}>
            <Icon source={"chevron-left"} size={30} color="#0093B0" />

            <Text style={styles.textBack} textBack>
              Back
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewProfile}>
          <View style={styles.textEditProfile}>
            <Text style={styles.styleTextEdit}>Edit Profile</Text>
          </View>
          <View style={styles.editInfo}>
            <View style={styles.editOption}>
              <Icon
                source="account-outline"
                size={30}
                color="#00ACBF"
              />

              <TextInput
                style={styles.inputEdit}
                placeholder="TEFICOD"
                placeholderTextColor={"grey"}
                color="white"
              />
            </View>
            <View style={styles.line}></View>
            <View style={styles.editOption}>
              <Icon source="home-outline" size={30} color="#00ACBF" />
              <TextInput
                style={styles.inputEdit}
                placeholder="Teficod.com"
                placeholderTextColor={"grey"}
                color="white"
              />
            </View>
            <View style={styles.line}></View>
            <View style={styles.editOption}>
              <Icon source="email-outline" size={30} color="#00ACBF" />
              <TextInput
                style={styles.inputEdit}
                placeholder="Teficod@gmail.com"
                placeholderTextColor={"grey"}
                color="white"
              />
            </View>
            <View style={styles.line}></View>
            <View style={styles.editOption}>
              <Icon
                source="phone-outline"
                size={30}
                color="#00ACBF"
              />
              <TextInput
                style={styles.inputEdit}
                placeholder="0989898989"
                placeholderTextColor={"grey"}
                color="white"
              />
            </View>
            <View style={styles.line}></View>
          </View>
          <View>
            <TouchableOpacity style={styles.btnSave} >
                <Text style={styles.textSave}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
};
