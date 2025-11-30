import { Button, StyleSheet, Text, View } from "react-native"
import { FONT_FAMILY } from "../../utils/const";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
    detail: {
        fontSize: 18,
        fontFamily: FONT_FAMILY,
    },
});

const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'Detail'> = useRoute();
    
    return (
        <View>
            <Text style={styles.detail}>ID: {route.params?.id}</Text>
            <Text style={styles.detail}>Title: {route.params?.title}</Text>
            <Text style={styles.detail}>Content: {route.params?.content}</Text>
            <Text style={styles.detail}>Star: {route.params?.star}</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default DetailScreen
    