import React, { PureComponent } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { getTickers } from '../actions/tickersAction'
import { Header, Spinner } from '../common'

class Main extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: 
      <Header 
        title='Котировки'
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

  constructor(props) {
    super(props)
    this.state = { count: 0 }

    this.props.navigation.addListener(
      'willFocus',
      () => {
        this.setTimer()
      }
    )

    this.props.navigation.addListener(
      'didBlur',
      () => {
        clearInterval(this.timer) 
      }
    )
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer) 
    } 
  }

  setTimer = () => {
    this.timer = setInterval(() => {
      this.props.getTickers()
      if (this.state.count < 1) { 
        this.setState(state => ({ count: state.count + 1 }))
      }
    }, 5000)
  }

  timer = undefined

  render() {
    const { tickers, error } = this.props.tickers
    const newTickers = Object.keys(tickers)
    const { container, subContainer, h1, h2, errorStyle } = styles
    if (this.state.count < 1) { return <Spinner /> }
    return (
      <ScrollView style={container}>
        {error && <Text style={errorStyle}>Ошибка запроса!</Text>}
        {newTickers.map((obj_key) => {
          const data = tickers[obj_key]
          const { last, highestBid, percentChange } = data
          return (
            <View key={obj_key} style={subContainer}>
              <Text style={h1} numberOfLines={1} ellipsizeMode='tail'>{obj_key}</Text>
              <Text style={h2}>last: {last}</Text>
              <Text style={h2}>highestBid: {highestBid}</Text>
              <Text style={h2}>percentChange: {percentChange}</Text>
            </View>
          )
        })
        }
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10
  },
  errorStyle: {
    alignSelf: 'center',
    color: 'red' 
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    justifyContent: 'space-between',
    marginTop: 5,
    padding: 5
  },
  h1: {
    backgroundColor: 'transparent',
    flex: -1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily: 'AppleSDGothicNeo-Light',
    paddingLeft: 10,
    fontWeight: '600',
    color: '#000',
    fontSize: 17
  },
  h2: {
    backgroundColor: 'transparent',
    flex: -1,
    alignSelf: 'flex-start',
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: '300',
    paddingLeft: 10,
    color: '#8C8C8C',
    fontSize: 17
  },
  chevron: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignSelf: 'center'
  },
  listView: {
    marginTop: 10
  }
}

const mapStateToProps = state => ({
  tickers: state.tickers
})

export default connect(mapStateToProps, { getTickers })(Main)
