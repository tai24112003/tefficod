import {
  StatusBar,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import styles from "./styles";
import {Icon} from 'react-native-paper'
export default ChangePasswordScreen = ({ navigation }) => {
  return (
    (
      <View>
        <View>
          <TouchableOpacity style={styles.back}>
            <View>
              <Icon source={"chevron-left"} size={30} color="#0093B0" />

            </View>
            <Text style={styles.textBack} textBack>
              Back
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewProfile}>
          <View style={styles.textEditProfile}>
            <Text style={styles.styleTextEdit}>Change Password</Text>
          </View>
          <View style={styles.editInfo}>
            <View style={styles.textTitle}>
              <Text style={styles.textOption} textBack>
                Old Pasword
              </Text>
            </View>
            <TextInput style={styles.inputChange} secureTextEntry={true} />
            <View style={styles.textTitle}>
              <Text style={styles.textOption} textBack>
                New Pasword
              </Text>
            </View>
            <TextInput style={styles.inputChange} secureTextEntry={true} />
            <View style={styles.textTitle}>
              <Text style={styles.textOption} textBack>
                Re-type Pasword
              </Text>
            </View>
            <TextInput style={styles.inputChange} secureTextEntry={true} />
          </View>
          <View>
            <TouchableOpacity style={styles.btnSave}>
              <Text style={styles.textSave}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
};
