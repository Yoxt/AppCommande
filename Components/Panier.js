import React from 'react'
import { Text,View, TextInput, Button , FlatList } from 'react-native'
import { Input } from 'react-native-elements'


class Panier extends React.Component {
    render(){
        return(
            <View>
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