import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';
const footerData = [
    {
        name:'home',
        iconName:'home',
    },
    {
        name:'calendar',
        iconName:'calendar',
    },
    {
        name:'todo',
        iconName:'list'
    },
    {
        name:'profile',
        iconName:'user-check'
    }
]

const Footer = () => {
  const footerButtons = footerData;
  return (
    <View style={styles.footerContainer}>
      {footerButtons.map((button) => (
       <Feather key={button.iconName} name={button.iconName} size={30} color="black" />
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
    footerContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%',
        height:60,
        paddingLeft:'5%',
        paddingRight:'5%'

    }
})

export default Footer