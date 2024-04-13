import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Avatar, Searchbar, TextInput, Button } from 'react-native-paper';

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [groupCode, setGroupCode] = React.useState("");
  const [sillyCoin, setSillyCoin] = React.useState(0);


  return (

    <View style={styles.container}>
        <View style={styles.avatar}>
            <TouchableOpacity onPress={null}>
                <Image style={styles.buttonImage} source={require('../assets/defaultAvatar.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={() => setSillyCoin(sillyCoin + 1)}>
                <Image style={styles.buttonImage} source={require('../assets/trophyImage.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSillyCoin(0)}>
                <Image style={styles.buttonImage} source={require('../assets/addFriend.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={() => setSillyCoin(sillyCoin + 1)}>
                <Image style={styles.buttonImage} source={require('../assets/settingsIcon.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSillyCoin(0)}>
                <Image style={styles.buttonImage} source={require('../assets/distributionsIcon.png')} />
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 30
    },
    avatar: {
      alignItems: 'center',
      marginTop: '25%',
      marginBottom: '0%',
    },
    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 50,
    },
    buttonImage: {
      width: 150,
      height: 150,
    }
  });

export default Home;
