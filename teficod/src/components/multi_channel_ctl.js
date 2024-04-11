import { Text, View, TouchableOpacity, Animated, Easing } from "react-native"
import styles from "../styles"
import { Icon } from 'react-native-paper';
import { useState, useRef } from "react";

export default function MultiChannelController() {
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
                    toValue: isVisible ? 0 : 120,
                    duration: 50,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                paddingAnim,
                {
                    toValue: isVisible ? 0 : 8,
                    duration: isVisible?500:0,
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
                onPress={()=>{
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
                borderWidth:borderAnim,
                paddingHorizontal:paddingAnim,
                borderTopWidth: 0,
                overflow: 'hidden', // Không cho phần tử vượt ra ngoài khung
                height: heightAnim, // Áp dụng chiều cao từ animation
                // display:isVisible?'none':"flex"
            }]}>
                <Text>ABC</Text>
                <Text>ABC</Text>
                <Text>ABC</Text>
                <Text>ABC</Text>
                <Text>ABC</Text>

            </Animated.View>
        </View>
    )
}
