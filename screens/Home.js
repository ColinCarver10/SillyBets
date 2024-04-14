import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Searchbar, TextInput, Button, Card } from 'react-native-paper';

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [groupCode, setGroupCode] = React.useState("");

  return (
    <View style={styles.container}>
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle"/>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
        </Card>
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
