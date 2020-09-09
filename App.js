import React from 'react';

import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import SearchField from './Components/SearchField/SearchField';
import renderItem from './Components/Card/Card';

class App extends React.Component {
  state = {
    monsters: [],
    searchText: '',
  };

  componentDidMount() {
    this.fetchMonsters();
  }
  fetchMonsters = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({monsters: data});
  };

  setSearchText = (text) => {
    this.setState({
      searchText: text,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Monsters</Text>
        <SearchField
          searchText={this.state.searchText}
          setSearchText={this.setSearchText}
        />
        <FlatList
          data={this.state.monsters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          style={styles.list}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
  },
  list: {
    width: '80%',
  },
});

export default App;
