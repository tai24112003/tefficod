import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    borderW: {
        borderWidth: 1
    },
    containerScreen: {
        paddingHorizontal: 15,
        backgroundColor: "#fff",
    },
    textHeader: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#000",
    },
    boxTitle: {
        padding: 10,
        opacity: 0.9,
        borderRadius: 10,
        minHeight: 140
    },
    containerNumCount: {
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: "#fff"
    },
    containerActive: {
        backgroundColor: "#FFB32C",
        padding:10,
        borderRadius:6
    },
    textActive: {
        color: "#fff",
        fontSize:20
    },
    iconHeaderStyle: { marginLeft: -25, marginRight: -10 },
    primaycolor: "#0E9A75",
    iconThumbnailSize: 45,
    iconHeaderSize: 40,
    iconThumbnailColor: "#fff"

})

export default styles