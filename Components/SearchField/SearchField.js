import React from 'react';

import {View, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {searchChange} from '../../redux/SearchField/SearchField.actions';

const SearchField = ({searchText, setSearchText}) => {
  return (
    <View style={styles.searchField}>
      <TextInput
        placeholder="Search Robots here..."
        style={styles.searchText}
        value={searchText}
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
    padding: 15,
    width: '100%',
  },
});

const mapStateToProps = ({searchField: {searchText}}) => ({
  searchText,
});
const mapDispatchToProps = (dispatch) => ({
  setSearchText: (text) => dispatch(searchChange(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
