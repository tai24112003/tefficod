import { ScrollView, Text, View, TouchableOpacity, Button } from "react-native"
import styles from "../../styles"
import BoxTitle from "../../components/box_title"

export default function CropsScreen({ navigatio, route }) {
    return (
        <ScrollView style={[styles.containerScreen]}>
            <View style={[{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}>
                <Text style={[styles.textHeader]}>
                    {route.params.title}
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => console.log("press")}
                    style={[{
                        backgroundColor: styles.primaycolor, alignSelf: "flex-end",
                        paddingHorizontal: 15, paddingVertical: 5,
                        borderRadius: 50
                    }]}
                >
                    <Text style={[{ fontSize: 18, color: "#fff", fontWeight: "bold" }]}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={[{flexDirection: "row", flexWrap:"wrap", gap:15, marginTop: 20}]}>
                <BoxTitle isProduct={true} title={"Dâu tằm "} iconName="flower-outline" navigation={navigatio} />
                <BoxTitle isProduct={true} title={"Dâu tằm 2"} iconName="flower-outline" navigation={navigatio} />
                <BoxTitle isProduct={true} title={"Dâu tằm 3"} iconName="flower-outline" navigation={navigatio} />
                <BoxTitle isProduct={true} title={"Xà lách thủy tinh"} iconName="flower-outline" navigation={navigatio} />
            </View>
        </ScrollView>
    )
}