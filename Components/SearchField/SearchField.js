import React from 'react';

import {View, StyleSheet, TextInput} from 'react-native';

const SearchField = ({searchText, setSearchText}) => {
  return (
    <View style={styles.searchField}>
      <TextInput
        placeholder="Search here..."
        style={styles.searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchField: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '75%',
    height: 50,
    marginBottom: 10,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 18,
    color: '#fff',
    padding: 10,
    width: '100%',
  },
});

export default SearchField;
