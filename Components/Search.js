import React from 'react'
import {StyleSheet, Text,View, TextInput, Button , FlatList } from 'react-native'
import plats from '../Helpers/platData'
import PlatItem from './platItem'

class Search extends React.Component {

    _displayDetailForFilm = (idPlat , nom, avatar, description) => {
        console.log("Display plat with id " + idPlat)
        this.props.navigation.navigate("PlatDetail", { idPlat: idPlat , nom:nom , avatar: avatar, description:description})

      }
      _goToPanier = () =>{
          console.log("Panier:")
          this.props.navigation.navigate("Panier")
      }
    render() {
        return (
            
            <View>
              <View style={styles.panier}>
                    <Button title='Panier' onPress= {()=>this._goToPanier()}/>
                </View>
              <FlatList
                data={plats}
                renderItem={({item}) => <PlatItem plat={item} displayDetailForFilm={this._displayDetailForFilm}/>}
                />
                
                
            </View>
            
          )
    }
}
const styles = StyleSheet.create({
    panier:{      flexDirection: 'row',
      justifyContent: 'flex-end',
      top:'0%',
      right:'1%'
      }
    })
export default Search
