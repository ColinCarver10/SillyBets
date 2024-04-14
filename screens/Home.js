import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { Searchbar, TextInput, Button, Card, IconButton, Modal, Portal, PaperProvider } from 'react-native-paper';



const CustomCard = ({ imageSource , tag , message , onShowModal }) => {
    const showModal = () => {
        // Call the onShowModal function passed from the parent component
        if (onShowModal) {
            onShowModal(imageSource);
        }
    };
    

    return (
        <Card style={styles.cards}>
            <View style={{ flexDirection: 'row' }}>
            {/* Image Section */}
            <View style={{ width: '40%', overflow: 'hidden', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                <TouchableOpacity onPress={showModal}>
                    <Image
                    source={imageSource}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>
            {/* Text Section */}
            <View style={{ width: '60%', paddingHorizontal: 10, paddingTop: 10 }}>
                <Text>
                <Text style={{ fontWeight: 'bold', color: 'blue' }}>{tag} </Text>
                {message}
                </Text>
    
                {/* Icon Section */}
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 'auto' }}>
                {/* Add your icons here */}
                <IconButton icon="comment" iconColor='black' size={30} onPress={() => console.log('Comment')} style={{ marginRight: -10 }} />
                <IconButton icon="heart" iconColor='black' size={30} onPress={() => console.log('Like')} style={{ marginRight: -10 }} />
                <IconButton icon="account-circle" iconColor='black' size={30} onPress={() => console.log('Account')} style={{ marginRight: -10 }} />
                {/* You can add more icons as needed */}
                </View>
            </View>
            </View>
        </Card>
    );
  };

const Home = () => {
    const [visible, setVisible] = React.useState(false);
    const [modalImageSource, setModalImageSource] = React.useState(null);
    const showModal = (imageSource) => {
        setModalImageSource(imageSource);
        setVisible(true);
    };
    const hideModal = () => setVisible(false);

  return (
    <SafeAreaView style={styles.container}>
        <PaperProvider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalPopup}>
                    <Image
                    source={modalImageSource}
                    style={styles.popupImage}
                    resizeMode="cover"
                    />
                </Modal>
            </Portal>
            <ScrollView style={styles.scrollView}>
                <CustomCard 
                    imageSource={require('../assets/ethanWingsBet.png')} 
                    tag="@EthanGambles"
                    message="tried to eat an entire pan of wings - he succeeded, but was it worth it?"
                    onShowModal={showModal} // Pass showModal function as prop
                />
                <CustomCard 
                    imageSource={require('../assets/hotSauce.png')} 
                    tag="@Camsloss"
                    message="tried to drink an entire bottle of hotsauce, and lost"
                    onShowModal={showModal} // Pass showModal function as prop
                />
                <CustomCard 
                    imageSource={require('../assets/ethanTyping.png')} 
                    tag="@EthanGambles"
                    message="bet he could finish an app in a weekend... he lost"
                    onShowModal={showModal} // Pass showModal function as prop
                />
                <CustomCard 
                    imageSource={require('../assets/hannahDarts.png')} 
                    tag="@hmeberts"
                    message="bet she could beat @nickgarnett1 at darts... she was right..."
                    onShowModal={showModal} // Pass showModal function as prop
                />
                <CustomCard 
                    imageSource={require('../assets/holliBottle.png')} 
                    tag="@Holligoff"
                    message="bet she could balance a water bottle on her head - and won!"
                    onShowModal={showModal} // Pass showModal function as prop
                />
            </ScrollView>
        </PaperProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 0
    },
    scrollView: {
        marginHorizontal: 10,
    },
    cards: {
        marginTop: 20,
        height: 200,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalPopup: {
        padding: 20,
        margin: 20,
    },
    buttonImage: {
        width: 150,
        height: 150,
    },
    buttonIcon: {
        width: 50,
        height: 50,
    },
    popupImage: {
        width: '100%', 
        height: '100%',
        overflow: 'hidden', 
        borderRadius: 12,
    }
});

export default Home;
