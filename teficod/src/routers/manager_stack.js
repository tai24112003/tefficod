import { View, Text } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { IconButton } from 'react-native-paper';
import ManagerScreen from "../views/manager/manager_screen";
import DevicesManagerScreen from "../views/manager/devices_manager_screen";
import DevicesTimerScreen from "../views/manager/devices_timer_screen";
import GrowthCycleScreen from "../views/manager/growth_cycle_screen";
import HistoryTab from "../views/manager/history_screen";
import CropsScreen from "../views/manager/crops_screen";
import styles from "../styles";
import HistoryScreen from "../views/manager/history_screen";

const IconBack = ({navigation}) => (
    <IconButton
        style={[styles.iconHeaderStyle]}
        icon="chevron-left"
        iconColor={styles.primaycolor}
        size={styles.iconHeaderSize}
        onPress={() => navigation.goBack()}
    />
)

const MStack = createNativeStackNavigator();
export default function ManagerStack() {
    return (
        <MStack.Navigator
            screenOptions={{
                headerTintColor: styles.primaycolor, // Màu sắc của icon
                headerTitleStyle: {
                    fontSize: 24, // Kích thước của icon
                },

                headerShadowVisible: false
            }}
        >
            <MStack.Screen
                name="Manager"
                component={ManagerScreen}
                options={{
                    headerShown: false
                }}
            />
            <MStack.Screen
                name="DevicesManager"
                component={DevicesManagerScreen}
                options={({ navigation }) => ({
                    title: 'Back',
                    headerLeft: ()=><IconBack navigation={navigation}/>
                    ,
                })}
            />
            <MStack.Screen
                name="DevicesTimer"
                component={DevicesTimerScreen}
                options={({ navigation }) => ({
                    title: 'Back',
                    headerLeft: () => <IconBack navigation={navigation} />
                    ,
                })}
            />
            <MStack.Screen
                name="History"
                component={HistoryScreen}
                options={({ navigation }) => ({
                    title: 'Back',
                    headerLeft: () => <IconBack navigation={navigation} />
                    ,
                })}
            />

            <MStack.Screen
                name="GrowthCycle"
                component={GrowthCycleScreen}
                options={({ navigation }) => ({
                    title: 'Back',
                    headerLeft: () => <IconBack navigation={navigation} />
                    ,
                })}
            />
            <MStack.Screen
                name="Crops"
                component={CropsScreen}
                options={({ navigation }) => ({
                    title: 'Back',
                    headerLeft: () => <IconBack navigation={navigation} />
                    ,
                })}
            />
        </MStack.Navigator>
    )
}

