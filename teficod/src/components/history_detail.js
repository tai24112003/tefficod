import { StyleSheet, Text, View } from "react-native"

const DetailItem = ({ no, start, end, status }) => (
    <View style={[style.containerCell]}>
        <View style={[style.cell]}>
            <Text style={[style.cellText]}>
                {no}
            </Text>
        </View>
        <View style={[style.cell]}>
            <Text style={[style.cellText]}>
                {start}
            </Text>
        </View>
        <View style={[style.cell]}>
            <Text style={[style.cellText]}>
                {end}
            </Text>
        </View>
        <View style={[style.cell]}>
            <Text style={[style.cellText, { paddingTop: 5 }]}>
                <View
                    style={{
                        backgroundColor: status ? "green" : "red",
                        width: 15, height: 15,
                        borderRadius: 50
                    }}
                ></View>
            </Text>
        </View>
    </View>
)

export default function HistoryDetail({ title }) {
    var details = demoDetails.map((item) => <DetailItem key={item.no} no={item.no} start={item.start} end={item.end} status={item.status}/>)
    return (
        <View style={[style.container]}>
            <View style={[style.containerTitle]}>
                <Text style={[style.titleText]}>{title}</Text>
            </View>
            {details}
        </View>
    )
}
const style = StyleSheet.create({
    containerCell: {
        flexDirection: 'row',
        justifyContent: "space-between",
        columnGap: 2
    },
    cell: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 5,
        backgroundColor: "#fff",
        borderBottomWidth: 1.5,
        borderBottomColor: "#dddddd"
    }, cellText: {
        color: "#000",
        fontSize: 18,
    },
    container: {
        alignItems: "center",
        backgroundColor: "#DDDDDD"
    },
    containerTitle: {
        paddingVertical: 10
    },
    titleText: {
        fontSize: 20,
        color: "#000"
    }
})

const demoDetails = [
    {
        no: 1,
        start: "00:00:00",
        end: "02:00:00",
        status: false
    },
    {
        no: 2,
        start: "04:00:00",
        end: "06:00:00",
        status: false
    },
    {
        no: 3,
        start: "10:00:00",
        end: "12:00:00",
        status: false
    }
]