import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import Search from '../Components/Search'
import PlatDetail from '../Components/platDetail';
import Panier from '../Components/Panier'


const SearchStackNavigator = createStackNavigator({
    Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
      screen: Search,
      navigationOptions: {
        title: 'Liste des plats'
      }
    },
    PlatDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: PlatDetail
    },
    Panier: {
        screen: Panier,
        navigationOptions:{
            title:'Votre panier'
        }
    }


  })


  export default createAppContainer(SearchStackNavigator)