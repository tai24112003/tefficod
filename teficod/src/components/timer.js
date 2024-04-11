import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Switch } from 'react-native';
import { Icon } from 'react-native-paper';

const Timer = () => {
    const [switchValue, setSwitchValue] = useState(false);

    const toggleSwitch = () => {
        setSwitchValue(previousState => !previousState);
    };

    return (
        <View style={styles.container}>
            <View style={styles.timerPick}>
                <Text style={styles.firstTime}>
                    00 : 00 -
                </Text>
                <Text style={styles.secondTime}>
                    <Icon source={'av-timer'} color='#F7ba55' size={30} />
                    2h 0m 0s
                </Text>
                <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#0E9" }}
                        thumbColor={switchValue ? "#0E9A75" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={switchValue}
                    />
                </View>
            </View>
            <View style={styles.typeContainer}>
                <Text style={styles.typeChannel}>
                    Multi-Channel Controller - Channel
                </Text>
            </View>
            <View style={styles.level}>
                <Text style={styles.levelTitle}>
                    All days of the week
                </Text>
                <View style={[{ paddingTop: 10 }]}>
                    <Icon source={'chevron-down'} size={30} color='#0E9A75' />
                </View>

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderTopColor: '#ccc',
        borderBottomColor: '#ccc',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    timerPick: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    firstTime: {
        fontSize: 30,
        color: '#0E9A75',
        fontWeight: '700'
    },
    secondTime: {
        color: '#ccc',
        fontSize: 25
    },
    typeContainer: {
        paddingTop: 3,
        borderColor: '#0E9A75',
        borderTopWidth: 1,
        borderBottomWidth: 1

    },
    typeChannel: {
        color: '#0E9A75',
        fontSize: 22,
        fontWeight: '500'
    },
    level: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    levelTitle: {
        color: '#ccc',
        paddingTop: 10,
        fontSize: 20,
        fontWeight: '700'
    },
    switchContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
});

export default Timer;
