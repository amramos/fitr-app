import React, { Component } from 'react'
import { ScrollView, Image, View, Text, StyleSheet} from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import TabBar from '../../components/TabBar'
import { ListItem, Subheader, Toolbar, BottomNavigation } from 'react-native-material-ui'
import Home from './containers/home' 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="menu"
          centerElement="FITR"
          style={{'backgroundColor': '#000000'}}
        />
      
      <ScrollableTabView
        renderTabBar={() => <TabBar/>}
      >
        <Home tabLabel='md-home'></Home>
        <Text tabLabel='md-clipboard'>favorite</Text>
        <Text tabLabel='md-stats'>project</Text>
      </ScrollableTabView>
    </View>
  )
  }
}



  /*<BottomNavigation active="home" hidden={false} >
        <BottomNavigation.Action
          key="home"
          icon="home"
          label="Home"
          onPress={() => this.setState({ active: 'today' })}
        />
        <BottomNavigation.Action
          key="content-paste"
          icon="content-paste"
          label="Today"
          onPress={() => this.setState({ active: 'bookmark-border' })}
        />
        <BottomNavigation.Action
          key="timeline"
          icon="timeline"
          label="Details"
          onPress={() => this.setState({ active: 'settings' })}
        />
      </BottomNavigation>
      */
