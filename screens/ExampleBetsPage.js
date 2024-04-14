import * as React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Image} from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider, Searchbar, TextInput, IconButton } from 'react-native-paper';
import BetContext from '../contexts/BetContext';

const ExampleBetsPage = (props) => {
  const [sillyCoins, setSillyCoins] = React.useState(10);
  const { totalSillyCoins, setTotalSillyCoins } = React.useContext(BetContext);

  const [searchQuery, setSearchQuery] = React.useState('');
  const [groupCode, setGroupCode] = React.useState("");
  const [visibleSearch, setVisibleSearch] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);

  const [betVisible, setBetVisible] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [betDescription, setBetDescription] = React.useState("");

  const showSearchModal = () => setVisibleSearch(true);
  const hideSearchModal = () => setVisibleSearch(false);

  const showBetModal = () => setBetVisible(true);
  const hideBetModal = () => setBetVisible(false);

  const dummyData = [
    {id: '1', title: 'Cam Sloss'}
  ]
  
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

  const handleItemClick = item => {
    // Handle item click here
    setUserName(item.title);
    setBetVisible(true); // Open the new modal
    setVisibleSearch(false);
  }

  const handleSubmit = () => {
    // Update totalSillyCoins in Layout component
    setTotalSillyCoins(totalSillyCoins - sillyCoins);
    hideBetModal()
  };
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
        {/* Place a bet page */}
        <Portal>
            <Modal visible={betVisible} onDismiss={hideBetModal} style={styles.modal}>
                <Text style={styles.item}>Place a bet</Text>
                <Text style={{marginTop: 20}}>Betting against: {userName}</Text>
                <TextInput
                    label="What are you betting on?"
                    value={betDescription}
                    onChangeText={text => setBetDescription(text)}
                    style={{marginTop: 20}}
                />
                <View style={styles.betContainer}>
                    <IconButton
                        icon="minus"
                        iconColor='white'
                        size={20}
                        onPress={() => setSillyCoins(sillyCoins - 1)}
                    />
                    <Image source={require('../assets/sillyCoinLogoSmall.png')} style={styles.customIcon} size={30} />
                    <Text style={{color: 'white', marginLeft: 5}}>{sillyCoins}</Text>
                    <IconButton
                        icon="plus"
                        iconColor='white'
                        size={20}
                        onPress={() => setSillyCoins(sillyCoins + 1)}
                    />
                </View>
                <Button mode="contained" buttonColor='#2269f1' style={{marginTop: 20}} onPress={() => handleSubmit()}>
                   Submit
                </Button>
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
    customIcon: {
        width: 25,
        height: 25,
    },
    betContainer: {
        flexDirection: 'row',
        backgroundColor: '#2269f1',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});

export default ExampleBetsPage;
