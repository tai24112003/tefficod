import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
const HeaderItem = () => {
    return (
        <View style={[styles.container]}>
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
                <Text style={[styles.title]}>
                    Multi-Channel Controller
                </Text>
                <Text style={[{ color: '#F7ba55', fontSize: 20, fontWeight: '700' }]}>
                    ?
                </Text>
            </View>

        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderColor: "#0E9A75",
        borderWidth: 2,
        borderRadius: 10,
        width: '100%'
    },
    title: {
        color: '#0E9A75',
        fontSize: 20,
        fontWeight: '700'

    }
})
export default HeaderItem;