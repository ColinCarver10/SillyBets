import * as React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Image} from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider, Searchbar, TextInput } from 'react-native-paper';

const ExampleBetsPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [groupCode, setGroupCode] = React.useState("");
  const [visibleSearch, setVisibleSearch] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);

  const [betVisible, setBetVisible] = React.useState(false);

  const showSearchModal = () => setVisibleSearch(true);
  const hideSearchModal = () => setVisibleSearch(false);

  const showBetModal = () => setBetVisible(true);
  const hideBetModal = () => setBetVisible(false);

  const onChangeSearch = query => {
    setSearchQuery(query);
    // Perform search based on the query
    // For example, fetch data from an API or filter local data
    // For demonstration purposes, I'll just filter some dummy data
    const filteredData = dummyData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  const dummyData = [
    {id: '1', title: 'Cam Sloss'}
  ]

  const handleItemClick = item => {
    // Handle item click here
    setBetVisible(true); // Open the new modal
    setVisibleSearch(false);
  }
  return (
    <PaperProvider>
    <View style={styles.container}>
        <Button onPress={showSearchModal} buttonColor='#2269f1' mode="contained">
            Start Betting
        </Button>
        <Button mode="contained" buttonColor='#2269f1' style={styles.getSilly} onPress={() => console.log('Pressed')}>
            Enter Group Code
        </Button>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/pong.jpg')} resizeMode='contain' style={styles.image}/>
        </View>
        <Portal>
            <Modal visible={visibleSearch} onDismiss={hideSearchModal} style={styles.modal}>
                <Searchbar
                placeholder="Search for friends"
                onChangeText={onChangeSearch}
                value={searchQuery}
                />
                <FlatList
                data={searchResults}
                renderItem={({ item }) =>
                <TouchableOpacity onPress={() => handleItemClick(item)}>
                    <Text style={styles.item}>{item.title}</Text>
                </TouchableOpacity>}
                keyExtractor={item => item.id}
                />
            </Modal>
        </Portal>
        <Portal>
            <Modal visible={betVisible} onDismiss={hideBetModal} style={styles.modal}>

            </Modal>
        </Portal>
        <Portal>
            <Modal visible={visibleSearch} onDismiss={hideSearchModal} style={styles.modal}>
                <Searchbar
                placeholder="Search for friends"
                onChangeText={onChangeSearch}
                value={searchQuery}
                />
                <FlatList
                data={searchResults}
                renderItem={({ item }) =>
                <TouchableOpacity onPress={() => handleItemClick(item)}>
                    <Text style={styles.item}>{item.title}</Text>
                </TouchableOpacity>}
                keyExtractor={item => item.id}
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
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        marginTop: 10,
        borderBottomWidth: 1, // Add a bottom border
        borderBottomColor: 'gray', // Specify the color of the border
    },
});

export default ExampleBetsPage;
