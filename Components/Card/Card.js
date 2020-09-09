import React from 'react';

import {StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const renderItem = ({item: {name, email, id, phone}}) => {
  console.log('this', name);
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{uri: `https://robohash.org/${id}?set=set2`}}
        style={styles.cardImage}
      />
      <Text style={styles.name}>Name:{name}</Text>
      <Text style={styles.email}>Email:{email}</Text>
      <Text>Phone:{phone}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    paddingVertical: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
  },
  email: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
  },
});

export default renderItem;
