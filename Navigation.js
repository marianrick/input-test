import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, View} from 'react-native';

export default function Navigation(props) {

  const NAV = [...Array(props.amount).keys()];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fixer}>
      {NAV.map((e, i) => (
        <TouchableOpacity onPress={() => props.setTab(e)}  style={[styles.navItem, props.current === e && styles.navItemCurrent]}>
          <Text style={[styles.text, props.current === e && styles.textCurrent]}>Ex {e}</Text>
        </TouchableOpacity>
      ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9ecef',
  },
  fixer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navItemCurrent: {
    backgroundColor: '#06f',
    borderRadius: 6,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#06f'
  },
  textCurrent: {
    color: '#fff'
  }
});
