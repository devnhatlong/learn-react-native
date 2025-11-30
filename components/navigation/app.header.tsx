import { StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { globalStyles } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/core";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6200EE',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

const AppHeader = () => {
    const navigation: any = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={{ width: 40, alignItems: 'flex-start', justifyContent: 'center' }}>
                <AntDesign 
                    name="menu" 
                    size={24} 
                    color="black" 
                    onPress={() => {navigation.toggleDrawer()}}
                />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[styles.headerText, globalStyles.globalFont]}>My App Header</Text>
            </View>
        </View>
    );
}

export default AppHeader;