import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Searchbar, TextInput, Button } from 'react-native-paper';

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [groupCode, setGroupCode] = React.useState("");

  return (
    <View style={styles.container}>
        <Text>Home</Text>
    </View>
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

export default Home;
