import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../../utils/const";

const styles = StyleSheet.create({
    container: {
        fontSize: 18,
    },
});

const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.container, globalStyles.globalFont]}>About screen</Text>
        </View>
    )
}

export default AboutScreen
    