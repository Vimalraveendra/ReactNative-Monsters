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
    backgroundColor: 'red',
    width: '70%',
    height: 50,
  },
  searchText: {
    fontSize: 18,
    color: '#fff',
    padding: 10,
    width: '100%',
  },
});

export default SearchField;
