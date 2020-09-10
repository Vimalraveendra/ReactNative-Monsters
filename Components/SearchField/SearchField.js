import React from 'react';

import {View, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {searchChange} from '../../redux/SearchField/SearchField.actions';

const SearchField = ({searchText, setSearchText, orientation}) => {
  return (
    <View
      style={
        orientation === '' || orientation === 'portrait'
          ? stylesPortrait.searchField
          : stylesLandscape.searchField
      }>
      <TextInput
        placeholder="Search Robots here..."
        style={stylesPortrait.searchText}
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

const stylesPortrait = StyleSheet.create({
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
const stylesLandscape = StyleSheet.create({
  searchField: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '40%',
    height: 40,
    marginBottom: 10,
    borderRadius: 10,
  },
});

const mapStateToProps = ({searchField: {searchText, orientation}}) => ({
  searchText,
  orientation,
});
const mapDispatchToProps = (dispatch) => ({
  setSearchText: (text) => dispatch(searchChange(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
