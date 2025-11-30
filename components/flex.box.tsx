import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    item1: {
        backgroundColor: 'red',
        padding: 20,
    },
    item2: {
        backgroundColor: 'orange',
        padding: 20,
    },
    item3: {
        backgroundColor: 'cyan',
        padding: 20,
    },
    item4: {
        backgroundColor: 'yellow',
        padding: 20,
    },
});

const FlexBox = () => {
  return (
    <View style={styles.container}>
        <View style={styles.item1}>
            <Text>item 1</Text>
        </View>
        <View style={styles.item2}>
            <Text>item 2</Text>
        </View>
        <View style={styles.item3}>
            <Text>item 3</Text>
        </View>
        <View style={styles.item4}>
            <Text>item 4</Text>
        </View>
    </View>
  );
}

export default FlexBox;