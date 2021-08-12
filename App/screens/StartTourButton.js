import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'



const StartTourButton = ( {navigation}) => {

  const content = (
    <View style= {[styles.button, {backgroundColor: "red"}]}>
        <Text style = {styles.text}>Start Tour</Text>
    </View>
  )
  return <TouchableOpacity onPress= {() => navigation.navigate("The Chelsea Hotel Map")}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
   flex: 1,
   padding: 16, 
   borderRadius: 24,
   alignItems: "center"
  }, 
  text: {
    color: "white", 
    fontSize: 10
  }
})

export default StartTourButton