import { useState } from "react";
import { Alert, Modal, Button, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 60,
        backgroundColor: '#f4511e',
    },
    groupInput: {
        margin: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

interface ICreateModalProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    addnew: (item: any) => void;
}

const CreateModel = (props: ICreateModalProps) => {
    const { modalVisible, setModalVisible, addnew } = props;
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        if (title.length === 0) {
            Alert.alert("Error", "Title is required");
            return;
        }

        if (rating < 1 || rating > 5) {
            Alert.alert("Error", "Rating must be between 1 and 5");
            return;
        }

        //add new
        addnew({ id: Date.now(), title, content: "content", star: rating });

        setModalVisible(false);
        setTitle("");
        setRating(0);
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.container}>
                    {/* header */}
                    <View style={styles.header}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Create todo</Text>
                        <AntDesign name="close" size={24} color="black" onPress={() => {
                            setModalVisible(false)
                            setTitle("");
                            setRating(0);    
                        }}></AntDesign>
                    </View>

                    {/* body */}
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Create modal content</Text>
                            <TextInput 
                                style={styles.input}
                                value={title}
                                onChangeText={setTitle}
                            />
                        </View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput 
                                keyboardType="numeric" 
                                style={styles.input} 
                                value={rating.toString()}
                                onChangeText={(text) => setRating(Number(text))}
                            />
                        </View>
                    </View>

                    {/* footer */}
                    <View style={{ margin: 10 }}>
                        <Button title="add" onPress={() => handleSubmit()} />
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default CreateModel;