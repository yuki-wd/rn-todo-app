import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>TODO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Header;
