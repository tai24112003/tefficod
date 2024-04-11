import { ScrollView, Text, View, TouchableOpacity, Dimensions } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from "../../styles"
import PickDate from "../../components/pick_date";
import HistoryDetail from "../../components/history_detail";



const HDate = () => (
    <ScrollView style={[{ backgroundColor: "#fff", }]}>
        <PickDate selectedTab={"Date"} />
        <HistoryDetail title={"Channel 1"} />
        <HistoryDetail title={"Channel 2"} />
        <HistoryDetail title={"Channel 3"} />

    </ScrollView>
)

const HWeek = () => (
    <ScrollView>
        <PickDate selectedTab={"Week"} />
    </ScrollView>
)
const HMonth = () => (
    <ScrollView>
        <PickDate selectedTab={"Month"} />
    </ScrollView>
)
const HYear = () => (
    <ScrollView>
        <PickDate selectedTab={"Year"} />
    </ScrollView>
)
const HistoryTab = createMaterialTopTabNavigator();

function HistoryTabs({ navigation, route }) {
    return (
        <HistoryTab.Navigator>
            <HistoryTab.Screen name="Date" component={HDate} />
            <HistoryTab.Screen name="Week" component={HWeek} />
            <HistoryTab.Screen name="Month" component={HMonth} />
            <HistoryTab.Screen name="Year" component={HYear} />
        </HistoryTab.Navigator>
    )
}

export default function HistoryScreen({ navigation, route }) {
    return (
        <View style={[styles.containerScreen, { paddingHorizontal: 0, height: Dimensions.get('window').height-173 }]}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={[styles.textHeader]}>
                    {route.params.title} [Multi-Channel Controller]
                </Text>
            </View>
            <HistoryTabs/>
        </View>
    )
}
