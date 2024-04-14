import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { View, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ManagerStack from '../routers/manager_stack';
import ProfileStack from '../routers/profile_stack';
import HomeScreen from '../views/home/home_screen';


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs({}) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            labeled={false}
            activeColor='#fff'
            inactiveColor='#fff'
            activeIndicatorStyle={{
                backgroundColor: "#099673",
                borderColor: "#fff",
                borderWidth: 5,
                height: 60,
                borderRadius: 50
            }}
            barStyle={{
                backgroundColor: "#0E9A75",
                position: 'absolute',

            }}
        >
            <Tab.Screen
                name="ManagerStack"
                component={ManagerStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="bars" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={ProfileStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="user-o" size={30} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}
