import { View, Text, ScrollView } from "react-native";
import styles from "../../styles";
import BoxTitle from "../../components/box_title";

export default function ManagerScreen({ navigation }) {
    return (
        <ScrollView style={[styles.containerScreen, { paddingTop: 20 }]}>
            <View style={[{marginBottom:20}]}>
                <Text style={[styles.textHeader]}>Manager</Text>
            </View>
            <View style={{ flexWrap: "wrap", flexDirection: "row", columnGap: 15, rowGap: 15 }}>
                <BoxTitle navigation={navigation} isProduct={false} iconName="devices" numCount={1} title="Devices Manager" />
                <BoxTitle navigation={navigation} isProduct={false} iconName="camera-timer" numCount={10} title="Devices Timer" />
                <BoxTitle navigation={navigation} isProduct={false} iconName="calendar-month" title="History" />
                <BoxTitle navigation={navigation} isProduct={false} iconName="rotate-3d-variant" title="Growth Cycle" />
                <BoxTitle navigation={navigation} isProduct={false} iconName="flower-outline" title="Crops" />
            </View>


        </ScrollView>
    )
}