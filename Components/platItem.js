
import React from 'react'
import { StyleSheet, View, Text, Image ,TouchableOpacity} from 'react-native'
import { CheckBox } from 'react-native-elements'

class PlatItem extends React.Component {
    
  constructor(props){
    super(props);
 
    this.state = {
      checked : false,
    }
 }
 _onPressCheck = () => {
  this.setState({checked: !this.state.checked});
  this.props.plat.isChecked = !this.state.checked;
  console.log(
    this.props.plat.isChecked);

}
render() {
    const { plat, displayDetailForFilm} = this.props
    return (
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForFilm(plat.id,plat.name,plat.avatar, plat.description)}>
        <Image
          style={styles.image}
          source={{uri: plat.avatar}}
        />
         <CheckBox
  checked={this.state.checked}
  onPress={() =>this._onPressCheck()}
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
      </TouchableOpacity>
     )
    }
}

const styles = StyleSheet.create({
    main_container: {
      height: 190,
      flexDirection: 'row'
    },
    image: {
      width: 120,
      height: 180,
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
      fontSize: 20,
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
  
export default PlatItem