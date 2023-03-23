import { StatusBar } from 'expo-status-bar';
import { Button, Linking } from 'react-native';
import React from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';
import {links} from './AllTitlesFilenames';
let listviewref;

export default function App() {
  return (
    <View style={styles.container}>
     <Image style={{marginTop:30}} source={require('./assets/Ilm.png')}/>
    <FlatList 
        horizontal
        data={links}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        ref = {(ref) => {listviewref = ref;}}
      />
      <View style={{flexDirection:'row', paddingBottom:40,}}>
      <Button 
        title= 'Start'        
        onPress={GoToStart}
      />
      <View style={{width:40,}}/>
      <Button 
        title= 'end'
        onPress={GoToEnd}
      />
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const renderItem = ({item}) => {
  return (
    <TouchableOpacity
      item={item}
      onPress={() => Linking.openURL(item.url)}>
    <Image style={styles.images} source={item.thumbnail}/>
    </TouchableOpacity>
  );
};

const GoToStart= () => {
  listviewref.scrollToOffset({offset: 0, animated:true});
}

const GoToEnd= () => {
  listviewref.scrollToEnd({animated:true});
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 250,
    height: 400,
    borderColor: 'green',
    borderRadius: 25,
    borderWidth: 5,
  },
  
});