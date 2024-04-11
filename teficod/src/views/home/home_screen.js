import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import HeaderItem from '../../components/headerHomeItem';
import ChildrenItem from '../../components/childrenHomeItem'
import { Icon } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const API_KEY = '26780b7cf165d5dd418bb30625a3d9e2';
var YOUR_CITY_NAME = "Ho%20Chi%20Minh%20City"
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${YOUR_CITY_NAME}&appid=${API_KEY}&units=metric`;
var sizeT = 30
const HomeScreen = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(error => console.error('Error fetching weather data:', error));
    }, []);

    const renderWeatherInfo = () => {
        if (!weatherData) {
            return <Text>Loading...</Text>;
        }

        const { main, weather, wind } = weatherData;
        return (
            <View>
                <View style={[styles.weatherContainer]}>
                    <Text style={[{ fontSize: sizeT }]}>
                        Hello TEFICOD!
                    </Text>

                    <View style={[styles.doC, { paddingRight: 30 }]}>
                        <Text style={[{ fontSize: sizeT }]}>
                            {Math.round(main.temp)} <Text style={[{ fontSize: sizeT - 15 }]}>
                                o
                            </Text>
                            C
                        </Text>
                        <Icon source='weather-partly-cloudy' size={sizeT} />
                    </View>
                    <View style={[styles.doC, { paddingRight: 25 }]}>
                        <Icon source='weather-windy' size={sizeT - 4} color='orange' />
                        <Text style={[{ fontSize: sizeT - 4 }]}>
                            {wind.speed} km/h
                        </Text>
                    </View>
                    <View style={[styles.doC, { paddingRight: 85 }]}>
                        <Text style={[{ fontSize: sizeT - 4 }]}>
                            <Text style={[{ fontSize: sizeT - 4, color: 'purple' }]}>UV</Text> {weather[0].uv_index ?? 10}
                        </Text>
                    </View>
                </View>
                <View style={[{ paddingTop: 20 }]}>
                    <Text style={[styles.title]}>
                        Devices Controller
                    </Text>
                </View>
            </View>

        );
    };

    return (
        <View style={[styles.container]}>
            {renderWeatherInfo()}
            <View style={[{ flexDirection: 'row', width: screenWidth - 50, alignItems: 'center', }]}>
                <Text style={[{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: '700',
                    marginRight: 10
                }]}>
                    1.
                </Text>
                <HeaderItem />
            </View>

            <ChildrenItem />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    weatherContainer: {
        height: screenHeight / 4,
        backgroundColor: '#0E9A75',
        padding: 15,
        alignItems: 'flex-end'
    },
    doC: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: '700'
    }

});

export default HomeScreen;
