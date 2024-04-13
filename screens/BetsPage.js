import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider, Searchbar, TextInput } from 'react-native-paper';

const BetsPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [groupCode, setGroupCode] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <PaperProvider>
    <View style={styles.container}>
        <Button onPress={showModal} buttonColor='#2269f1' mode="contained">
            Start Betting
        </Button>
        <Button icon="bitcoin" mode="contained" buttonColor='#2269f1' style={styles.getSilly} onPress={() => console.log('Pressed')}>
            Get Silly (Private Event)
        </Button>
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} style={styles.modal}>
                <Searchbar
                placeholder="Search for friends"
                onChangeText={setSearchQuery}
                value={searchQuery}
                />
            </Modal>
        </Portal>
    </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        paddingTop: 70,
    },
    groupCode: {
        marginTop: 50,
    },
    getSilly: {
        marginTop: 50,
    },
    modal: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: 'white'
    }
});

export default BetsPage;
