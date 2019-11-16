import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class LinksScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true }
  }

  componentDidMount(){
    return fetch('http://172.20.10.2:3001/api/all')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          items: responseJson.items.item,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.items}
          renderItem={({ item }) => <Text>{item.id}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

// data={this.state.dataSource}
// renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
// keyExtractor={({id}, index) => id}
