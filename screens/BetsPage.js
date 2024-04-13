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
        <Portal>
            <Modal visible={visible} onDismiss={hideModal}>
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
            </Modal>
        </Portal>
        <Button onPress={showModal} buttonColor='#2269f1' mode="contained">
            Start Betting
        </Button>
        <Button icon="bitcoin" mode="contained" buttonColor='#2269f1' style={styles.getSilly} onPress={() => console.log('Pressed')}>
            Get Silly (Private Event)
        </Button>
    </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
