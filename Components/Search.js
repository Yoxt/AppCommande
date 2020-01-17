import React from 'react'
import { Text,View, TextInput, Button , FlatList } from 'react-native'
import plats from '../Helpers/platData'
import PlatItem from './platItem'

class Search extends React.Component {

    _displayDetailForFilm = (idPlat) => {
        console.log("Display plat with id " + idPlat)
        this.props.navigation.navigate("PlatDetail")

      }
    render() {
        return (
            <View>
              <TextInput placeholder='Nom du plat'/>
              <Button title='Rechercher' onPress={() => {}}/>
              <FlatList
                data={plats}
                renderItem={({item}) => <PlatItem plat={item} displayDetailForFilm={this._displayDetailForFilm}/>}
                />
            </View>
            
          )
    }
}
export default Search
