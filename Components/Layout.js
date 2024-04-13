import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import BetsPage from '../screens/BetsPage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from '../screens/Home';

const HomeRoute = () => <Home />;

const HistoryRoute = () => <Text>My Bets</Text>;

// Define BetRoute component
const BetRoute = () => <BetsPage />;

const ShopRoute = () => <Text>Shop</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const Layout = ({children}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'history', title: 'My Bets', focusedIcon: 'view-list', unfocusedIcon: 'view-list-outline'},
    { key: 'betNow', title: 'Bet Now', focusedIcon: 'emoticon-lol', unfocusedIcon: 'emoticon-lol-outline'},
    { key: 'shop', title: 'Shop', focusedIcon: 'shopping', unfocusedIcon: 'shopping-outline'},
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
    <>
        {children}
        <NavigationContainer>
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#2269f1' }} // Background color of the bottom navigation
        activeColor='#FFFFFF'
        inactiveColor='#FFFFFF'
        />
        </NavigationContainer>
    </>
  );
};

export default Layout;