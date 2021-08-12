import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { TouchableOpacity } from '@gorhom/bottom-sheet';



const About = ( {navigation} ) => {

 return(

    <SafeAreaView style={styles.container}>
        <Text style = {{fontSize: 20, color: "white", padding: 20}}>The 1960s to early ’70s was a pivotal time for American culture, and New York City was ground zero for seismic shifts in music, theater, art, and filmmaking. The Downtown Pop Underground takes a kaleidoscopic tour of Manhattan during this era and shows how deeply interconnected all the alternative worlds and personalities were that flourished in the basement theaters, dive bars, concert halls, and dingy tenements within one square mile of each other. Author Kembrew McLeod links the artists, writers, and performers who created change, and while some of them didn’t become everyday names, others, like Patti Smith, Andy Warhol, and Debbie Harry, did become icons. Ambitious in scope and scale, the book is fueled by the actual voices of many of the key characters who broke down the entrenched divisions between high and low, gay and straight, and art and commerce—and changed the cultural landscape of not just the city but the world.</Text>
        <TouchableOpacity style = {styles.buttons}  onPress={()=> navigation.navigate("The Chelsea Hotel Map")} >
            <View style= {[styles.buttons, {backgroundColor: "red"}]}>
                <Text style = {{fontSize: 30, color: "white", fontFamily: "AvenirNextCondensed-Heavy"}}>Continue</Text>
            </View>
        </TouchableOpacity>    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center', 
    }, 
    buttons: {
        flexDirection: 'row', 
        alignContent: "center", 
        justifyContent: "center", 
        padding: 11, 
        borderRadius: 24, 
        fontSize: 20, 
        marginTop: 3
    }
});

export default About