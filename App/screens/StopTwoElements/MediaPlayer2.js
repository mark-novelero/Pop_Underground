import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, SafeAreaView, Animated, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import CarouselTwo from './CarouselTwo';
import BottomSheet from '@gorhom/bottom-sheet';
import { Video } from 'expo-av';




const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 70; 
const ITEM_HEIGHT = height * .9899
const twoElements = [ 
    {
      image: "https://cdn.shopify.com/s/files/1/0086/6218/8087/products/img_proxy_3225f2a0-3ec7-44a2-a1d9-7b7e5cdfa733_1280x.jpg?v=1620381276", 
      caption: "Max's Kansas City 1976."
    }, 
    {
      image: "https://d32dm0rphc51dk.cloudfront.net/VR_Ttmcek4TqcL-rYm9cow/large.jpg", 
      caption: "Iggy Pop performing at Max's Kansas City."
    }, 
    {
      image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/warhol--co-at-maxs-kansas-city-fred-w-mcdarrah.jpg", 
      caption: "Warhol and Co."
    }, 
    {
      image: "https://pbs.twimg.com/media/DPtHB5BV4AIoh4B.jpg", 
      caption: "Devo!"
    }, 
    {
      image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/inside-maxs-kansas-city-fred-w-mcdarrah.jpg", 
      caption: "Saturday night in 1974 at Max's Kansas City"
    }, 
    {
      image: "https://www.newyorksocialdiary.com/wp-content/uploads/2019/06/image.jpg", 
      caption: "Woman unknown, 1971."
    },
    {
      image: "https://www.ryebreadrodeo.com/prodimages/misfitsbook.jpg", 
      caption: "The Misfits."
    },
    {
      image: "https://www.morrisonhotelgallery.com/images/big/R-131_Max'sKansasCity1976_Gruen.jpg", 
      caption: ""
    }
     ]



class MediaPlayer2 extends Component {
  
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
      const source = require('./Max.mp3')
  
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
                <CarouselTwo twoElements = {twoElements}></CarouselTwo>
            </View>
            <View style = {styles.play}>
                <TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
                    {this.state.isPlaying ? (<Ionicons name='ios-pause' size={48} color='white' />) 
                    : ( <Ionicons name="logo-google-playstore" size={48} color="white" /> )}      
                </TouchableOpacity>
            </View>
            <Button title = "Next Stop" onPress={()=> this.props.navigation.navigate("The Factory Map")}></Button>
      
            <BottomSheet snapPoints= {[height - ITEM_HEIGHT, height * .91]}>
                <View style={styles.container}>
                    <Video
                      style={styles.video}
                      source= {require('./Max.mp4')}
                      useNativeControls
                      resizeMode="contain"
                      isLooping/>
                </View>
            </BottomSheet>
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
      marginTop: 25 
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

export default MediaPlayer2