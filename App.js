import React from 'react';

import {SafeAreaView, Text, StyleSheet} from 'react-native';
import SearchField from './Components/SearchField/SearchField';

class App extends React.Component {
  state = {
    monsters: [],
    searchText: '',
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
});

export default App;
