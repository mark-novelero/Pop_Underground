import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, SafeAreaView, Animated, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import CarouselOne from './CarouselOne';



const images = [ 
     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-514892732-1539628004.jpg?crop=1xw:1xh;center,top&resize=980:*",
     "https://i.pinimg.com/originals/03/de/d8/03ded85652e2d447970b00f24bdd3d6c.jpg" ,
     "https://i.pinimg.com/originals/5d/81/d5/5d81d5a8328f547c89216496a5554cfe.jpg",
     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-97281349-1539628128.jpg?crop=1xw:1xh;center,top&resize=980:*",
     "https://cdn.shopify.com/s/files/1/0200/7124/files/Bob_Dylan_and_Allen_Ginsberg_at_the_Chelsea_Hotel_kids_of_dada_article_grande.jpg?13917973980900604636", 
     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/4c2326bc78f4a1d0f5096bb171c3fb6c-1539628308.jpg?crop=1xw:1xh;center,top&resize=480:*", 
     "https://i.guim.co.uk/img/media/f0cbcba4d38c179a6625eb9e1dff7141adf3d6c1/0_59_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=862b186c0293c5c5c47d00e0d8f308e5", 
     "https://i.pinimg.com/originals/76/4c/a8/764ca8872fd9a3751d3644ca0c791f01.jpg", 
     "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/01/24/14/Chelsea-Hotel.jpg?width=990&auto=webp&quality=75",
     "https://static01.nyt.com/images/2021/04/18/nyregion/18jpchelseahotel30/00-chelseahotel30-mobileMasterAt3x.jpg",
     "http://2.bp.blogspot.com/-FjLoM9nz8DM/VCxeiL1kcrI/AAAAAAAChJQ/i3dieSka8Uo/s1600/debbie%2Bharry%2Bcafe.jpg",
     "https://images.squarespace-cdn.com/content/v1/56200fcee4b02025054662d7/1461030244630-FBFQTMJNVZ4AMQG1QJIH/chelsea-hotel-1.jpg?format=2500w"
     ]

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 70; 
const ITEM_HEIGHT = height * .98



class MediaPlayer1 extends Component {
  
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: false
  }

  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      })

      this.loadAudio()
    } catch (e) {
      console.log(e)
    }
  }

  async loadAudio() {
    const {currentIndex, isPlaying, volume} = this.state
  
    try {
      const playbackInstance = new Audio.Sound()
      const source = require('./Chelsea1.mp3')
  
      const status = {
        shouldPlay: isPlaying,
        volume
      }
  
      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)     
      await playbackInstance.loadAsync(source, status, false)
      this.setState({playbackInstance})
      } catch (e) {
        console.log(e)
      }
  }
  
  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering
    })
  }

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state
    isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

    this.setState({
      isPlaying: !isPlaying
    })
  }
 

 render(){

    const { container } = styles
    
    return(

        <SafeAreaView style={container}>
            <View style = {styles.title}>
                <Text style ={{fontSize: 44, color: "red"}}>.  .  .  .  .</Text>
            </View>
            <View>
                <CarouselOne images = {images}></CarouselOne>
            </View>
            <View style = {styles.play}>
                <TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
                  {this.state.isPlaying ? (<Ionicons name='ios-pause' size={48} color='white' />) : (<Ionicons name="logo-google-playstore" size={48} color="white" />)}      
                </TouchableOpacity>
            </View>
            <Button title = "Next Stop" onPress={()=> this.props.navigation.navigate("Max's Kansas City Map")}></Button>
        </SafeAreaView>
    )
  }
}

 const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: "black",
  }, 
  play: {
      alignItems: 'center',
      justifyContent: 'center', 
      marginTop: 50 
  }, 
  video: {
    alignSelf: 'center',
    width: width,
    height: 300
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom: 11
  }
})

export default MediaPlayer1