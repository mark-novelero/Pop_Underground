import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import CarouselThree from './CarouselThree';
import BottomSheet from '@gorhom/bottom-sheet';
import { Video } from 'expo-av';


const twoElements = [ 
  {
    image: "https://media.vogue.fr/photos/5cc03c307004b261beefa3d3/master/w_1080,h_717,c_limit/%E2%80%98Andy%20with%20Cow%20Paper%E2%80%99,%20The%20Factory,%20New%20York,%201966..jpg", 
    caption: "Warhol."
  }, 
  {
    image: "https://i.pinimg.com/originals/28/bc/06/28bc06c7cfb78b2049ad0e4e3a1e76e3.jpg", 
    caption: "Warhol 2."
  }, 
  {
    image: "https://storage.googleapis.com/clio-images/18863.37236.jpg", 
    caption: "Warhol and Co."
  }, 
  {
    image: "https://news.artnet.com/app/news-upload/2014/08/tumblr_m3gdfl8bfG1qz83wno1_500.jpg", 
    caption: "With Basquiat."
  }, 
  {
    image: "https://d16kd6gzalkogb.cloudfront.net/magazine_images/Billy-Name-The-Velvet-Undeground.jpg", 
    caption: "The Velvet Underground."
  },
  {
    image: "https://i.pinimg.com/originals/94/db/21/94db21618cf740a2b962422835d83182.jpg", 
    caption: "Factory Party."
  },
  {
    image: "https://i.pinimg.com/originals/80/77/fe/8077fe5d714380388cb824ff68903c45.jpg", 
    caption: "Factory Party."
  },
  {
    image: "https://d32dm0rphc51dk.cloudfront.net/m4PsQfF96Sp591eUY6LRQA/large.jpg", 
    caption: "Warhol filming."
  }, 
  {
    image: "https://i.pinimg.com/originals/40/2e/e2/402ee259c66d026f6fb77532bd4bd1d8.jpg", 
    caption: "Factory Party."
  },
  {
    image: "https://www.fluxmagazine.com/wp-content/uploads/2011/11/The-Factory-Andy-Warhol-and-His-Circle_10_0002.jpg", 
    caption: "Eddie dancing"
  },
  
  {
    image: "https://i.pinimg.com/originals/1a/d4/a5/1ad4a53c8804c62a256dfc6fe2c8fdc9.jpg", 
    caption: "Marilyn"
  },
  {
    image: "https://static01.nyt.com/images/2009/10/14/arts/dylanwarholspan.jpg", 
    caption: "The Factory."
  }, 
  {
    image: "https://flashbak.com/wp-content/uploads/2016/07/Andy-Warhold-Brillo-silver-Factory-1964.jpg", 
    caption: "The Factory."
  }
    ]

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 70; 
const ITEM_HEIGHT = height * .98



class MediaPlayer3 extends Component {

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
      const source = require('./Thefactory.mp3')
  
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
            <CarouselThree twoElements = {twoElements}></CarouselThree>
        </View>
        <View style = {styles.play}>
            <TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
                {this.state.isPlaying ? ( <Ionicons name='ios-pause' size={48} color='white' />) : 
                ( <Ionicons name="logo-google-playstore" size={48} color="white" />)}      
            </TouchableOpacity>
        </View>
        <Button title = "Next Stop" onPress={()=> this.props.navigation.navigate("Judson Memorial Church Map")}></Button>
      
        <BottomSheet snapPoints= {[height - ITEM_HEIGHT, height * .91]} style = {{color: "hotpink"}}>
            <View style={styles.container}>
                <Video
                    style={styles.video}
                    source= {require('./Factory.mp4')}
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

export default MediaPlayer3