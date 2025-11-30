import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import { FONT_FAMILY } from "../../utils/const";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import startIcon from '../../assets/images/star.png';
import background from '../../assets/images/react-native.png';

const styles = StyleSheet.create({
    detail: {
        fontSize: 18,
        fontFamily: FONT_FAMILY,
        color: '#fff',
    },
});

const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'Detail'> = useRoute();
    
    return (
        <ImageBackground source={background} style={{flex: 1, padding: 20}}>
            <Text style={styles.detail}>ID: {route.params?.id}</Text>
            <Text style={styles.detail}>Title: {route.params?.title}</Text>
            <Text style={styles.detail}>Content: {route.params?.content}</Text>
            <Text style={styles.detail}>
                Star: {route.params?.star}
                <Image source={startIcon} style={{width: 20, height: 20}} />
                <Image source={startIcon} style={{width: 20, height: 20}} />
                <Image source={startIcon} style={{width: 20, height: 20}} />
                <Image source={startIcon} style={{width: 20, height: 20}} />
                <Image source={startIcon} style={{width: 20, height: 20}} />
            </Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </ImageBackground>
    )
}

export default DetailScreen
    