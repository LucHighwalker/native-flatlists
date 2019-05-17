import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import BreedCell from './BreedCell'
import { petTypes, cats, dogs } from './breeds';

console.log(petTypes)

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: 1
    }
  }

  renderItems({item, index}) {
    return <BreedCell 
              data={item}
              style={{}}
              breed={item.breed}/>
  }

  render() {
    return (
      <View style={styles.container}>
       <FlatList 
          style={{}}
          data={this.state.selectedIndex === 0 ? cats : dogs}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => `${index}-${item}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1
  }
});
