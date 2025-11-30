import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import CreateModal from "./create.modal";

interface IDetail {
    id: number;
    title: string;
    content: string;
    star: number;
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10, 
        borderBottomWidth: 1, 
        borderBottomColor: '#ccc'
    }
});

const HomeScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const [detail, setDetail] = useState<IDetail[]>([
        {id: 1, title: "Detail 1", content: "This is detail 1", star: 5},
        {id: 2, title: "Detail 2", content: "This is detail 2", star: 4},
        {id: 3, title: "Detail 3", content: "This is detail 3", star: 3},
    ]);

    const [modalVisible, setModalVisible] = useState(false);

    const addnew = (item: IDetail) => {
        setDetail([...detail, item]);
    }

    return (
        <View>
            <Text>List todo:</Text>
            <View style={{ alignItems: 'center', padding: 10 }}>
                <AntDesign name="plus" size={24} color="orange" onPress={() => setModalVisible(true)}/>
            </View>
            <View>
                <FlatList 
                    data={detail} 
                    keyExtractor={(item) => item.id.toString()} 
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
                            <View style={style.item}>
                                <Text>{item.title}</Text>
                                <Text>{item.content}</Text>
                                <Text>Star: {item.star}</Text>
                            </View>
                        </TouchableOpacity>
                    )} 
                />
            </View>

            <CreateModal 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible}
                addnew={addnew}
            />
        </View>
    )
}

export default HomeScreen
    