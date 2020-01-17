
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class PlatDetail extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Détail du plat</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default PlatDetail