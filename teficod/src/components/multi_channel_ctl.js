import { Text, View, TouchableOpacity, Animated, Easing } from "react-native"
import styles from "../styles"
import { Icon, IconButton } from 'react-native-paper';
import { useState, useRef } from "react";

export default function MultiChannelController({sn, model, firmwareV, mfg, status}) {
    const [isVisible, setIsVisible] = useState(false);
    const heightAnim = useRef(new Animated.Value(0)).current;
    const paddingAnim = useRef(new Animated.Value(0)).current;
    const borderAnim = useRef(new Animated.Value(0)).current;

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        Animated.parallel([
            Animated.timing(
                heightAnim,
                {
                    toValue: isVisible ? 0 : 115,
                    duration: 50,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                paddingAnim,
                {
                    toValue: isVisible ? 0 : 8,
                    duration: isVisible ? 500 : 0,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                borderAnim,
                {
                    toValue: isVisible ? 0 : 1.5,
                    duration: isVisible ? 50 : 0,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }
            )
        ]).start();
    };

    return (
        <View style={[{ flexGrow: 1 }]}>
            <TouchableOpacity
                onPress={() => {
                    toggleVisibility()
                }

                }
                style={[{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 8,
                    paddingHorizontal: 5,
                    borderRadius: 6,
                    backgroundColor: styles.primaycolor
                }]}
            >
                <Text style={[{ fontSize: 20, color: "#fff", fontWeight: "bold" }]}>Multi-Channel Controller</Text>
                <Icon source={!isVisible ? "chevron-down" : "chevron-up"} size={30}
                    color="#fff"
                />
            </TouchableOpacity>
            <Animated.View style={[{
                marginHorizontal: 10,
                borderColor: styles.primaycolor,
                borderBottomEndRadius: 6,
                borderBottomStartRadius: 6,
                borderWidth: borderAnim,
                paddingHorizontal: paddingAnim,
                borderTopWidth: 0,
                overflow: 'hidden', // Không cho phần tử vượt ra ngoài khung
                height: heightAnim, // Áp dụng chiều cao từ animation
                // display:isVisible?'none':"flex"
            }]}>
                <View style={[{ flexDirection: "row", justifyContent: "space-between" }]}>
                    <View>

                        <Text style={[{ fontSize: 16, fontWeight: "bold", color: "#000" }]}>
                            SN: <Text style={[{ fontSize: 16, fontWeight: "normal", color: "#000" }]}>
                                MCCD012130140246184112
                            </Text>
                        </Text>
                        <Text style={[{ fontSize: 16, fontWeight: "bold", color: "#000" }]}>
                            Model: <Text style={[{ fontSize: 16, fontWeight: "normal", color: "#000" }]}>
                                Multi-Channel Controller
                            </Text>
                        </Text>
                        <Text style={[{ fontSize: 16, fontWeight: "bold", color: "#000" }]}>
                            Firmware Version: <Text style={[{ fontSize: 16, fontWeight: "normal", color: "#000" }]}>
                                100
                            </Text>
                        </Text>
                        <Text style={[{ fontSize: 16, fontWeight: "bold", color: "#000" }]}>
                            MFG: <Text style={[{ fontSize: 16, fontWeight: "normal", color: "#000" }]}>
                                NaN-NaN-NaN
                            </Text>
                        </Text>
                        <Text style={[{ fontSize: 16, fontWeight: "bold", color: "#000"}]}>
                            Status: <View style={[{width:18, height:18, backgroundColor:status ?styles.primaycolor:"red", borderRadius:50,  }]}></View>
                        </Text>
                    </View>
                    <View style={[{ width: 50, flexDirection: "column", justifyContent: "space-between" }]}>
                        <IconButton
                            icon="information-outline"
                            iconColor={styles.primaycolor}
                            size={35}
                            onPress={() => console.log('Pressed')}
                        />
                        <IconButton
                            icon="trash-can-outline"
                            iconColor={"red"}
                            size={35}
                            onPress={() => console.log('Pressed')}
                        />
                    </View>

                </View>

            </Animated.View>
        </View>
    )
}
