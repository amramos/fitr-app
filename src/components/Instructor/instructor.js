import React, { Component } from 'react';
import { ScrollView, Image, View, Text, StyleSheet} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from './tabBar';
import { ListItem, Subheader, Toolbar, BottomNavigation } from 'react-native-material-ui';

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
          centerElement="Alunos"
          searchable={{
            autoFocus: true,
            placeholder: 'Ex: João da Silva',
          }}  
        />

      <ScrollView style={styles.container}>
        <Subheader text="One line" />
        <ListItem
          divider
          centerElement="Center element as a text"
          onPress={() => {}}
        />
        <ListItem
          divider
          centerElement={{
            primaryText: 'Center element as an object',
          }}
          onPress={() => {}}
        />
      </ScrollView>

      <BottomNavigation active="home" hidden={false} >
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

    </View>
  )
  }
}
