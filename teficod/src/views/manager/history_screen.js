import { ScrollView, Text, View, TouchableOpacity } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from "../../styles"



const HDate = () => (
    <View>
        <Text style={[{ color: "#000" }]}>Dateeeeeee</Text>
    </View>
)

const HWeek = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[{ color: "#000" }]}>Week</Text>
    </View>
)
const HMonth = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[{ color: "#000" }]}>Month</Text>
    </View>
)
const HYear = () => (
    <View style={[{backgroundColor:"#000", flex:1}]}>
        <Text style={[{color:"#000"}]}>Year</Text>
    </View>
)
const HistoryTab = createMaterialTopTabNavigator();
export default function HistoryScreen({ navigatio, route }) {
    
    return (
        <ScrollView style={[styles.containerScreen]}>
            <View style={[{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}>
                <Text style={[styles.textHeader]}>
                    {route.params.title} [Multi-Channel Controller]
                </Text>
            </View>
            <HistoryTab.Navigator>
                <HistoryTab.Screen name="Date" component={HDate} />
                <HistoryTab.Screen name="Week" component={HWeek} />
                <HistoryTab.Screen name="Month" component={HMonth} />
                <HistoryTab.Screen name="Year" component={HYear} />
            </HistoryTab.Navigator>
        </ScrollView>
    )
}

