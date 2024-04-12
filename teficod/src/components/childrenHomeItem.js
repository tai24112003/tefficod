import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
const Children = () => {
    return (
        <View style={[styles.container]}>
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
                <Text style={[styles.title]}>
                    Channel 1
                </Text>
                <View style={[{ marginTop: 4, borderRadius: 50, backgroundColor: '#808080', width: 17, height: 17 }]}>

                </View>
            </View>

        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginLeft: 50,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        alignContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700'

    }
})
export default Children;