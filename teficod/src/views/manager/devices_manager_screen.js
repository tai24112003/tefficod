import { ScrollView, Text, View, TouchableOpacity } from "react-native"
import styles from "../../styles"
import MultiChannelController from "../../components/multi_channel_ctl"

export default function DevicesManagerScreen({ navigatio, route }) {
    return (
        <ScrollView style={[styles.containerScreen]}>
            <View style={[{ marginBottom: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}>
                <Text style={[styles.textHeader]}>
                    {route.params.title}
                </Text>
                <TouchableOpacity>
                    <View style={[styles.containerActive]}>
                        <Text style={[styles.textActive]}>Active Device</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[{ flexDirection: "row" }]}>
                <View style={[{marginRight:15, paddingTop:8}]}>
                    <Text style={[{fontSize:20, fontWeight:"bold", color:"#000"}]}>1.</Text>
                </View>
                <MultiChannelController />
            </View>
        </ScrollView>
    )
}