import { Dimensions, Text, TouchableOpacity, View } from "react-native"
import styles from "../styles"
import LinearGradient from "react-native-linear-gradient"
import { IconButton, Icon } from 'react-native-paper';


export default function BoxTitle({ isProduct, title, numCount, iconName, navigation }) {
    const { width, height } = Dimensions.get('window');
    const routeName = title?.replace(/\s+/g, '');
    return (
        <TouchableOpacity
            onPress={() => {
                if (!isProduct) {
                    navigation.navigate(routeName, { title: title })
                }else{
                    navigation.navigate('CropDetailScreen')
                }
            }}
        >
            <View style={[styles.boxTitle, { backgroundColor: styles.primaycolor, width: (width - 45) / 2 }]}>
                <View style={[{ alignItems: !isProduct ? "flex-start" : "flex-end" }]}>
                    {
                        !isProduct ? (numCount ?
                            <View style={[styles.containerNumCount]}>
                                <Text style={[{ color: "#fff" }]}>{numCount}</Text>
                            </View>
                            : <View style={{ height: 20 }}></View>)
                            : (
                                <View style={[{ width: 40, marginTop: -15 }]}>

                                    <IconButton
                                        icon="trash-can-outline"
                                        iconColor={"red"}
                                        size={25}
                                        onPress={() => console.log('Pressed')}
                                    />
                                </View>

                            )}
                </View>
                <View style={[{ alignItems: "center", marginVertical: 5 }]}>
                    <Icon
                        source={iconName}
                        size={styles.iconThumbnailSize}
                        color={styles.iconThumbnailColor}
                    />
                </View>
                <View style={[{ alignItems: "center" }]}>
                    <Text style={[{ color: "#fff", fontSize: 20, fontWeight: "bold" }]}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}