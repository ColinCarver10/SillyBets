import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar, TextInput, Button } from 'react-native-paper';

const BetsPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [groupCode, setGroupCode] = React.useState("");

  return (
    <View style={styles.container}>
        <Searchbar
            placeholder="Search for live events"
            onChangeText={setSearchQuery}
            value={searchQuery}
        />
        <TextInput
            label="Enter group code"
            value={groupCode}
            onChangeText={text => setGroupCode(text)}
            style={styles.groupCode}
        />
        <Button icon="bitcoin" mode="contained" style={styles.getSilly} onPress={() => console.log('Pressed')}>
            Get Silly (Private Event)
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: -120,
        paddingHorizontal: 30
    },
    groupCode: {
        marginTop: 50,
    },
    getSilly: {
        marginTop: 50,
    }
});

export default BetsPage;
