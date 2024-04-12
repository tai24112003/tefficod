import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LabelAndTextBox = ({ value, label, placeholder, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.textBoxContainer}>
                <TextInput
                    style={styles.textBox}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    placeholderTextColor="#ccc"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "black",
        minWidth: 100,
    },
    textBoxContainer: {

        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#0E9A75',
        maxHeight: 40
    },
    textBox: {
        fontSize: 16,
        color: "#ccc",

    },
});

export default LabelAndTextBox;
