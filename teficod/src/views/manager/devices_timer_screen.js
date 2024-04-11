import React, { useState } from 'react';
import { Alert, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';
import Timer from '../../components/timer';
import Modal from 'react-native-modal';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DevicesTimerScreen = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleAlert = () => {
        setIsModalVisible(true);
    };

    return (
        <View style={[styles.container]}>
            <View style={[styles.headerContain]}>
                <Text style={[styles.header]}>
                    Devices Timer
                </Text>
                <TouchableOpacity style={[styles.dropDown]} onPress={handleAlert}>
                    <Text style={[styles.type]}>
                        All
                    </Text>
                    <Icon source={'chevron-down'} size={30} color='#0E9A75' />
                </TouchableOpacity>
            </View>
            <Timer />
            <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} backdropColor="rgba(0, 0, 0, 0.5)" backdropOpacity={0.5}>
                <View style={styles.modalContainer}>

                    <TouchableOpacity style={styles.modalOption} onPress={() => console.log('All Pressed')}>
                        <Text style={styles.modalOptionText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalOption1} onPress={() => console.log('Multi-Channel Controller Pressed')}>
                        <Text style={styles.modalOptionText}>Multi-Channel Controller</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cancelOption]} onPress={toggleModal}>
                        <Text style={[styles.modalOptionText, styles.cancelOptionText]}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.addButtonContainer}>
                <TouchableOpacity style={styles.addButton}>
                    <Icon source="plus" size={50} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: screenWidth,
        height: screenHeight - 150,
        backgroundColor: 'white',
    },
    headerContain: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        alignItems: 'center'
    },
    header: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
    },
    dropDown: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5
    },
    type: {
        color: "#0E9A75",
        fontSize: 20
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 20,
        marginBottom: 20,
    },
    modalOption: {
        width: '90%',
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 20,
        borderColor: '#ccc',
        borderBottomWidth: 1
    }, modalOption1: {
        width: '100%',

        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 20,
        borderColor: '#0E9A75',
        borderBottomWidth: 1
    },
    modalOptionText: {
        fontSize: 18,
        color: 'black',
    },
    cancelOption: {
        marginTop: 10,
        borderRadius: 5,
    },
    cancelOptionText: {
        color: '#0E9A75',
        fontWeight: '700',
        paddingVertical: 5
    },
    addButtonContainer: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    addButton: {
        backgroundColor: '#F7ba55',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DevicesTimerScreen;
