import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const handleDelete = () => {
    // Handle save logic here
};
const Pharse = ({ index, name, gp, desc }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerIndex}>
                <Text style={styles.textIndex}>{index}</Text>
            </View>
            <View style={styles.containerContent}>
                <View style={styles.nameAndDelete}>
                    <Text style={styles.content}>
                        {name}
                    </Text>
                    <TouchableOpacity style={styles.deleteButtonContainer} onPress={handleDelete}>
                        <Text style={styles.deleteButtonText}>Delete</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.content}>
                    {gp}
                </Text>
                <Text style={styles.content}>
                    {desc}
                </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0E9A75",
        padding: 20,
        borderRadius: 10,
        margin: 10,
        flexDirection: "row"
    },
    containerIndex: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textIndex: {
        fontSize: 25,
        color: "white"
    },
    containerContent: {
        flex: 8,
        flexDirection: "column",
        fontSize: 16,
        color: "white",
    },
    nameAndDelete: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    deleteButtonContainer: {
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 5,

        alignSelf: "center"
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});


export default Pharse;