import React from 'react'
import { Text,View, TextInput, Button , FlatList } from 'react-native'
import { Input } from 'react-native-elements'
import PanierListe from './panierListe'
class Panier extends React.Component {
    
    render(){
        console.log(this.props.navigation.state.params.plats);
        return(
            <View>
                <FlatList
                data={this.props.navigation.state.params.plats}
                renderItem={({item}) => {
                    if(item.isChecked){
                    return(<PanierListe plat={item}/>);}
                        }
                    }
                />   
                 <Text>
                    Ou veux-tu te faire livrer ?
                </Text>
                <Input placeholder='Rue'/>
                <Input placeholder='Ville'/>
                <Input placeholder='Code postale'/>
                <Button title='Passer commande' onPress={()=>{}}/>
            </View>
        );
    }

}

export default Panier