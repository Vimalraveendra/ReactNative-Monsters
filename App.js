import React from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import SearchField from './Components/SearchField/SearchField';
import renderItem from './Components/Card/Card';

// const {width, height} = Dimensions.get('window');
// console.log('wid', width);
// console.log('high', height);

class App extends React.Component {
  state = {
    monsters: [],
    searchText: '',
    isLoading: false,
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

  filteredMonsters = () => {
    const {monsters, searchText} = this.state;
    return monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText.toLowerCase());
    });
  };
  render() {
    const {searchText, isLoading} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Monsters</Text>
        <SearchField
          searchText={searchText}
          setSearchText={this.setSearchText}
        />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#bad555"
            style={styles.loading}
          />
        ) : (
          <FlatList
            data={this.filteredMonsters()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            style={styles.list}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'BigelowRules-Regular',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
  },
  list: {
    width: '80%',
  },
});

export default App;
