
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../review/home';
import DetailScreen from '../review/detail';
import AboutScreen from '../review/about';
import AppHeader from './app.header';

const HomeLayout = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <AppHeader /> }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ header: () => <AppHeader /> }} />
            <Stack.Screen name="About" component={AboutScreen} options={{ header: () => <AppHeader /> }} />
        </Stack.Navigator>
    )
}

const AppNavigation = () => {
    
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen 
                name="Home" 
                component={HomeLayout} 
                options={{ header: () => null }}
            />
            <Drawer.Screen name="Detail" component={DetailScreen} options={{ header: () => <AppHeader /> }}/>
            <Drawer.Screen name="About" component={AboutScreen} options={{ header: () => <AppHeader /> }}/>
        </Drawer.Navigator>
    );
}

export default AppNavigation;