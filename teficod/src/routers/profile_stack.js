import { View, Text } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { IconButton } from 'react-native-paper';
import styles from "../styles";
import ChangePasswordScreen from "../views/profile/ChangePasswordScreen";
import EditProfileScreen from "../views/profile/EditProfileScreen";
import LoginScreen from "../views/profile/LoginScreen";
import ProfileScreen from "../views/profile/ProfileScreen";

const IconBack = ({ navigation }) => (
    <IconButton
        style={[styles.iconHeaderStyle]}
        icon="chevron-left"
        iconColor={styles.primaycolor}
        size={styles.iconHeaderSize}
        onPress={() => navigation.goBack()}
    />
)

const PStack = createNativeStackNavigator();
export default function ProfileStack() {
    return (
        <PStack.Navigator
            screenOptions={{
                headerTintColor: styles.primaycolor, // Màu sắc của icon
                headerTitleStyle: {
                    fontSize: 30, // Kích thước của icon
                },

                headerShadowVisible: false
            }}
        >
            <PStack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={({ navigation }) => ({
                    title: 'Back',
                    headerLeft: () => <IconBack navigation={navigation} />
                    ,
                })}
            />
            <PStack.Screen
                name="ChangePasswordScreen"
                component={ChangePasswordScreen}
                options={{
                    headerShown: false
                }}
            />
            <PStack.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
                options={({ navigation }) => ({
                    title: 'Back',
                    headerLeft: () => <IconBack navigation={navigation} />
                    ,
                })}
            />
            
            <PStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={({ navigation }) => ({
                    title: 'Back',
                    headerLeft: () => <IconBack navigation={navigation} />
                    ,
                })}
            />

        </PStack.Navigator>
    )
}

