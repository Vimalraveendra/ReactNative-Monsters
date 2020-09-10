import React from 'react';

import {StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

const Card = ({item: {name, email, id, phone}, orientation}) => {
  return (
    <TouchableOpacity
      style={
        orientation === '' || orientation === 'portrait'
          ? stylesPortrait.card
          : stylesLandscape.card
      }>
      <Image
        source={{uri: `https://robohash.org/${id}?set=set2`}}
        style={
          orientation === '' || orientation === 'portrait'
            ? stylesPortrait.cardImage
            : stylesLandscape.cardImage
        }
      />
      <Text style={stylesPortrait.name}>Name:{name}</Text>
      <Text style={stylesPortrait.email}>Email:{email}</Text>
      <Text
        style={
          orientation === '' || orientation === 'portrait'
            ? stylesPortrait.email
            : stylesLandscape.email
        }>
        Phone:{phone}
      </Text>
    </TouchableOpacity>
  );
};

const stylesPortrait = StyleSheet.create({
  card: {
    backgroundColor: '#95dada',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: '5%',
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderRadius: 10,
    paddingVertical: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 20,
    fontWeight: '400',
    marginVertical: 10,
    fontFamily: 'Roboto-Black',
  },
  email: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
  },
});

const stylesLandscape = StyleSheet.create({
  card: {
    backgroundColor: '#95dada',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: '15%',
    width: '70%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderRadius: 10,
    paddingVertical: 5,
  },
  cardImage: {
    width: '50%',
    height: 140,
    resizeMode: 'cover',
    paddingTop: 10,
  },
  email: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
  },
});
const mapStateToProps = ({searchField: {orientation}}) => ({
  orientation,
});

export default connect(mapStateToProps, null)(Card);
