import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import TabList from '../../components/tablist_crop';
import LabelAndTextBox from '../../components/LabelAndTextBox';
import Pharse from '../../components/Pharse';

const handleAdd = () => { };
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CropDetailScreen = () => {
    const tabs = ['Information', 'Phase'];
    const [activeTab, setActiveTab] = useState(0);
    const [name, setName] = useState('');
    const [growthPeriod, setGrowthPeriod] = useState('');
    const [desc, setDesc] = useState('');
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const handleSave = () => {
        // Handle save logic here
    };
    return (
        <View style={styles.container}>
            <TabList tabs={tabs} defaultTab={activeTab} onChange={handleTabChange} />
            <View style={styles.content}>
                {activeTab === 0 && (
                    <View style={[styles.tabContent, { width: screenWidth }]}>
                        <View style={[styles.containerContent]}>
                            <LabelAndTextBox value={name} label="Name" placeholder="Enter name" onChangeText={(value) => setName(value)} />
                            <LabelAndTextBox label="Growth period" placeholder="Enter growth period" onChangeText={(value) => setGrowthPeriod(value)} />
                            <LabelAndTextBox label="Crop characteristics" placeholder="Enter crop characteristics" />
                            <LabelAndTextBox label="Temperature" placeholder="Enter temperature" />
                            <LabelAndTextBox label="Humidity" placeholder="Enter humidity" />
                            <LabelAndTextBox label="pH" placeholder="Enter pH" />
                            <LabelAndTextBox label="Nutritional Value" placeholder="Enter nutritional value" />
                        </View>
                        <TouchableOpacity style={styles.saveButtonContainer} onPress={handleSave}>
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {activeTab === 1 && (
                    <View style={[styles.tabContent, { width: screenWidth }]}>
                        <ScrollView style={[{ height: screenHeight / 2.5 }]}>
                            <Pharse index={1} desc={"desc 1"} name={"Pharse 1"} gp={"30 (Day)"} />
                            <Pharse index={1} desc={"desc 1"} name={"Pharse 1"} gp={"30 (Day)"} />
                            <Pharse index={1} desc={"desc 1"} name={"Pharse 1"} gp={"30 (Day)"} />
                        </ScrollView>
                        <View style={[{ padding: 5 }]}>
                            <View style={styles.addTitleContainer} >
                                <Text style={styles.addTitleText}>Add Pharse</Text>
                            </View>
                            <View style={[{ flexDirection: 'row', }]}>
                                <View style={styles.textBoxContainer}>
                                    <LabelAndTextBox label="Name" placeholder="" onChangeText={(value) => setName(value)} />
                                </View>
                                <View style={[{ padding: 10 }]}></View>
                                <View style={styles.textBoxContainer}>
                                    <LabelAndTextBox label="Growth Period" placeholder="" onChangeText={(value) => setGrowthPeriod(value)} />
                                </View>
                            </View>

                            <LabelAndTextBox label="Desc" placeholder="" onChangeText={(value) => setDesc(value)} />
                            <TouchableOpacity style={[styles.saveButtonContainer, { backgroundColor: isAddButtonDisabled ? '#ccc' : '#0E9A75' }]} onPress={handleAdd} disabled={isAddButtonDisabled}>
                                <Text style={styles.saveButtonText}>Add</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                )}
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    containerContent: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 5,
        margin: 10,
    },
    saveButtonContainer: {
        backgroundColor: '#0E9A75',
        paddingVertical: 5,
        paddingHorizontal: 2,
        borderRadius: 10,
        marginTop: 10,
        width: 100,
        alignSelf: "center"
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    addTitleContainer: {
        backgroundColor: '#0E9A75',
        paddingVertical: 10,
        marginTop: 10,
        width: screenWidth,
        alignSelf: "center"
    },
    addTitleText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    textBoxContainer: {
        flex: 1,

    },
});

export default CropDetailScreen;
