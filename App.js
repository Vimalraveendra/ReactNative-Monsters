import React from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import SearchField from './Components/SearchField/SearchField';
import Card from './Components/Card/Card';
import {connect} from 'react-redux';
import {fetchedMonstersData} from './redux/Monsters/Monsters.actions';
import {setDeviceOrientation} from './redux/SearchField/SearchField.actions';

class App extends React.Component {
  // state = {
  //   orientation: '',
  // };
  componentDidMount() {
    Dimensions.addEventListener('change', () => {
      const {width, height} = Dimensions.get('window');
      this.props.getOrientation(width, height);
    });
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
            style={styles.list}
            renderItem={({item}) => <Card item={item} />}
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
  getOrientation: (width, height) =>
    dispatch(setDeviceOrientation(width, height)),
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
