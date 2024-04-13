import * as React from 'react';


import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BottomNavigation, Text, Appbar, Button, Avatar, IconButton} from 'react-native-paper';
import BetsPage from '../screens/BetsPage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from '../screens/Home';
import ExampleBetsPage from '../screens/ExampleBetsPage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfilePage from '../screens/ProfilePage';


const HomeRoute = () => <Home />;
const HistoryRoute = () => <Text>My Bets</Text>;

// Define BetRoute component
const BetRoute = () => <ExampleBetsPage />;

const ShopRoute = () => <Text>Shop</Text>;
const ProfileRoute = () => <ProfilePage />;

const Layout = ({ children, title, sillyCoinAmount }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'history', title: 'My Bets', focusedIcon: 'view-list', unfocusedIcon: 'view-list-outline' },
    { key: 'betNow', title: 'Bet Now', focusedIcon: 'emoticon-lol', unfocusedIcon: 'emoticon-lol-outline' },
    { key: 'shop', title: 'Shop', focusedIcon: 'shopping', unfocusedIcon: 'shopping-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    history: HistoryRoute,
    betNow: BetRoute,
    shop: ShopRoute,
    profile: ProfileRoute,
  });
  return (
    <View style={styles.container}>
    <Appbar.Header style={styles.header}>
      <View style={styles.leftContainer}>
        {/* Logo */}
        <Image  source={require('../assets/sillybets_text.png')} style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={styles.rightContainer}>
        {/* Add Friends Button */}
        <IconButton icon="account-plus" iconColor='white' containerColor='#2269f1'
        /*onPress={onAddFriendsPress}*/ />

        {/* Settings Button */}
        <IconButton icon="cog" iconColor='white' containerColor='#2269f1' /*onPress={onSettingsPress}*/ />

        {/* Account Balance */}
        <Button icon={() => <Image source={require('../assets/sillyCoinLogoSmall.png')} style={styles.customIcon} size={30} />} 
        mode='contained' buttonColor='#2269f1' onPress={() => {}}>10</Button>
      </View>
    </Appbar.Header>
      <NavigationContainer>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          activeColor='#000000'
          inactiveColor='#000000'
        />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#021f54',
    borderBottomWidth: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  customIcon: {
    width: 25,
    height: 25,
  },
  logo:{
    width: 150,
    height: 100,
  }
});

export default Layout;