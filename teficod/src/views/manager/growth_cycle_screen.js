import { ScrollView, Text, View, TouchableOpacity } from "react-native"
import styles from "../../styles"

export default function GrowthCycleScreen({ navigatio, route }) {
    return (
        <ScrollView style={[styles.containerScreen]}>
            <View style={[{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}>
                <Text style={[styles.textHeader]}>
                    {route.params.title}
                </Text>
                <Text>
                    GrowthCycleScreen
                </Text>
            </View>
        </ScrollView>
    )
}