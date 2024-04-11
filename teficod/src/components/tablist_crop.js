import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const TabList = ({ tabs, defaultTab, onChange }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || 0);
    const screenWidth = Dimensions.get('window').width;

    const handleTabPress = (index) => {
        setActiveTab(index);
        if (onChange) {
            onChange(index);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.tab,
                            index === activeTab && styles.activeTab,
                            { width: screenWidth / tabs.length - 20 } // Dynamically set width
                        ]}
                        onPress={() => handleTabPress(index)}
                    >
                        <Text style={[styles.tabText, index === activeTab && { color: 'white' }]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent', // Set a default background color
    },
    activeTab: {
        backgroundColor: "#0E9A75",
    },
    tabText: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'black', // Set a default text color
    },
});

export default TabList;
