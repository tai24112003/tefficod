import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native"
import { Icon } from "react-native-paper"
import { useState } from "react";
import styles from "../styles"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
export default function PickDate({ selectedTab }) {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.info("A date has been picked: ", date);
        setSelectedDate(date);
        hideDatePicker();
    };

    const renderSelectedDate = () => {
        switch (selectedTab) {
            case "Date":
                return selectedDate ? format(selectedDate, 'dd-MM-yyyy') : "Chọn ngày";
            case "Week":
                return selectedDate ? format(selectedDate, "'Tuần' w 'năm' yyyy") : "Chọn ngày";
            case "Month":
                return selectedDate ? format(selectedDate, "'Tháng' MM-yyyy") : "Chọn ngày";
            case "Year":
                return selectedDate ? format(selectedDate, "'Năm' yyyy") : "Chọn ngày";
            default:
                return selectedDate ? format(selectedDate, 'dd/MM/yyyy') : "Chọn ngày";
        }
    };

    return (
        <View>

            <View style={[{
                flexDirection: "row", justifyContent: "space-between",
                paddingHorizontal: 10,
                marginVertical: 10
            }]}>
                <TouchableOpacity style={[{
                    flex: 1,
                    flexGrow: 1,
                    borderWidth: 1,
                    borderColor: styles.primaycolor,
                    marginRight: 10,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center"
                }]} onPress={showDatePicker}
                >
                    <Text
                        style={[{ fontSize: 18 }]}
                    >{renderSelectedDate()}</Text>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log("press")}
                    style={[{
                        backgroundColor: "#FFB32C",
                        borderRadius: 10,
                        paddingHorizontal: 30,
                        paddingVertical: 12
                    }]}>
                    <Icon
                        source="reload"
                        color="#fff"
                        size={20}
                    />
                </TouchableOpacity>
            </View>
            <View style={[style.containerTableHeader]}>
                <View style={[style.tableHeader]}>
                    <Text style={[style.headerText]}>
                        No.
                    </Text>
                </View>
                <View style={[style.tableHeader]}>
                    <Text style={[style.headerText]}>
                        Start Time
                    </Text>
                </View>
                <View style={[style.tableHeader]}>
                    <Text style={[style.headerText]}>
                        End Time
                    </Text>
                </View>
                <View style={[style.tableHeader]}>
                    <Text style={[style.headerText]}>
                        Status
                    </Text>
                </View>
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    containerTableHeader:{
        flexDirection:'row',
        justifyContent:"space-between"
    },
    tableHeader:{
        flex:1,
        borderWidth:0.5,
        alignItems:"center",
        padding:5
    }, headerText:{
        color:styles.primaycolor,
        fontSize:18,
        fontWeight:"bold"
    }
})