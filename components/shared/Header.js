import { View, Text, SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation()
  let greetings;
  const headingText = () =>{
      let currentHour = new Date().getHours();
      if (currentHour >= 0 && currentHour < 5) {
        return 'Good night!';
      } else if (currentHour >= 5 && currentHour < 12) {
        return 'Good morning!';
      } else if (currentHour >= 12 && currentHour < 18) {
        return 'Good afternoon!';
      } else {
        return 'Good evening!';
      }
  }

  return (
    
    <SafeAreaView style={styles.headerContainer}> 
      <Text style={styles.greetingText}>{headingText()}</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('NewExpense')}>
      <AntDesign name="pluscircleo" size={30} color="black" />
      </TouchableOpacity>
     
    </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
    headerContainer:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'transparent',
        width:'100%'
    },
    greetingText:{
       fontSize:30,
       fontWeight:'bold'
    },
  
})

export default Header