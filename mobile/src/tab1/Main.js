import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { 
  Header
} from '../common'

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: 
      <Header 
        title='О приложении'
        leftButton
        leftIcon='md-menu'
        colorLeft='gold'
        rightButton
        rightIcon='md-add'
        colorRight='gold'
        navigation={navigation} 
        screen='DrawerOpen'
      />
  })

  render() {
    const { container, h1 } = styles
    return (
      <View style={container}>
        <Text style={h1} >Welcome to one of the most active crypto exchanges in the world</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily: 'AppleSDGothicNeo-Light',
    marginBottom: 100,
    padding: 20,
    fontWeight: '600',
    color: '#000',
    fontSize: 27
  }
}

export default Main
