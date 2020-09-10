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
import {connect} from 'react-redux';
import {fetchedMonstersData} from './redux/Monsters/Monsters.actions';

// const {width, height} = Dimensions.get('window');
// console.log('wid', width);
// console.log('high', height);

class App extends React.Component {
  componentDidMount() {
    this.props.fetchMonsters();
  }

  filteredMonsters = () => {
    const {monsters, searchText} = this.props;
    return monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText.toLowerCase());
    });
  };
  render() {
    const {isLoading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Monsters</Text>
        <SearchField />
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

const mapStateToProps = ({
  searchField: {searchText},
  monstersList: {monsters, isLoading},
}) => ({
  searchText,
  monsters,
  isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMonsters: () => dispatch(fetchedMonstersData()),
});

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
