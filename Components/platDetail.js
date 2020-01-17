
import React from 'react'
import { Image,StyleSheet, View, Text } from 'react-native'

class PlatDetail extends React.Component {
  render() {
    console.log(this.props.navigation)
    return (
      <View style={styles.main_container}>
           <Image
            style={styles.image}
          source={{uri: this.props.navigation.state.params.avatar}}
        />
        <Text>id du plat {this.props.navigation.state.params.idPlat}</Text>
        <Text>{this.props.navigation.state.params.nom}</Text>
        <Text>Description : {this.props.navigation.state.params.description}</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  }
})


export default PlatDetail