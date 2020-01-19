
import React from 'react'
import { StyleSheet, View, Text, Image ,TouchableOpacity} from 'react-native'

class PanierListe extends React.Component {

render() {
    const { plat} = this.props
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: plat.avatar}}
        />
        
       <View style={styles.content_container}>
          <View style={styles.header_container}>
              <Text style={styles.title_text}>{plat.name}</Text>            
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{plat.description}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>id: {plat.id}</Text>
          </View>
        </View>
      </View>
     )
    }
}

const styles = StyleSheet.create({
    main_container: {
      height: 120,
      flexDirection: 'row'
    },
    image: {
      width: 80,
      height: 80,
      margin: 5,
      backgroundColor: 'gray'
    },
    content_container: {
      flex: 1,
      margin: 5
    },
    header_container: {
      flex: 3,
      flexDirection: 'row'
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 14,
      flex: 1,
      flexWrap: 'wrap',
      paddingRight: 5
    },
    vote_text: {
      fontWeight: 'bold',
      fontSize: 26,
      color: '#666666'
    },
    description_container: {
      flex: 7
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666'
    },
    date_container: {
      flex: 1
    },
    date_text: {
      textAlign: 'right',
      fontSize: 14
    }
  })
  
export default PanierListe