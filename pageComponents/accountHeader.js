import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AccountHeader = ({ title, sillyCoinAmount }) => (
  <View style={styles.header}>
    {/* silly coin logo from assets*/}
    <Image source={require('../assets/sillyBetsLogoWords.png')} style={styles.logo} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.coinAmount}>SillyCoin: {sillyCoinAmount}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 110,
    width: '100%',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  title: {
    color: '#fff',
    fontSize: 23,
  },
  coinAmount: {
    color: '#fff',
    alignItems: 'right',
    fontSize: 18,
    top: 25,
  },
  logo: {
    alignItems: 'left',
    width: 125,
    height: 125,
    padding: 10,
    top: 0,
    left: -35,
  },
});

export default AccountHeader;