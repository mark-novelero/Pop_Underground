import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, SafeAreaView, Animated, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import CarouselFour from './CarouselFour';



const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 70; 
const ITEM_HEIGHT = height * .98
const twoElements = [ 
    {
      image: "https://cdn.urar.org/i/YWYq8bPgGVnSXvrW4iUq1jDHypoH9dGMkcfQvMtXYQvF.jpg", 
      caption: "Church facade."
    }, 
    {
      image: "https://artforum.com/uploads/upload.002/id10794/article00_1064x.jpg", 
      caption: "Interior with dancers."
    }, 
    {
      image: "https://byjuancastillo.files.wordpress.com/2020/10/unnamed.jpeg", 
      caption: "Reverand Moody"
    },  
    {
      image: "https://www.nyclgbtsites.org/wp-content/uploads/2020/01/al-carmines-nypl.jpg", 
      caption: "Reverand Carmines"
    }, 
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/41ILXqKv16L._AC_.jpg", 
      caption: "Judson Poets."
    }, 
    {
      image: "http://danceviewtimes.typepad.com/.a/6a00e39823a9018833022ad3b6f4f1200b-pi", 
      caption: "Judson Dance Stage."
    },
    {
      image: "https://static01.nyt.com/images/2019/06/07/nyregion/07stonewalljp1-print/06stonewall31-superJumbo.jpg", 
      caption: "Stonewall"
    },
    {
      image: "http://washingtonsqpark.org/wp-content/uploads/2017/06/ss-090626-stonewall_02.nbcnews-ux-1024-9001.jpg", 
      caption: "Protest Washington Square Park."
    },
    {
      image: "https://d3i6fh83elv35t.cloudfront.net/static/2019/06/Stonewall-Raid-1024x647.jpg", 
      caption: "March for LGBT rights."
    },
    {
      image: "https://static01.nyt.com/images/2012/09/14/nyregion/MOODY-obit/MOODY-obit-superJumbo.jpg", 
      caption: "Revarend Moody."
    }, 
    {
      image: "https://www.mcny.org/sites/default/files/PRIDE_hero.jpg", 
      caption: "In solidarity for LBGT rights."
    },
    {
      image: "https://live.staticflickr.com/5715/23942497382_89810ab565_b.jpg", 
      caption: "Ending Sign."
    }];



class MediaPlayer4 extends Component {

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
      const source = require('./Judson1.mp3')
  
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
            <CarouselFour twoElements = {twoElements}></CarouselFour>
        </View>
        <View style = {styles.play}>
            <TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
                {this.state.isPlaying ? (<Ionicons name='ios-pause' size={48} color='white' />) : 
                (<Ionicons name="logo-google-playstore" size={48} color="white" />)}      
            </TouchableOpacity>
        </View>
        <Button title = "Home" onPress={()=> this.props.navigation.navigate("Welcome Home")}></Button>   
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

export default MediaPlayer4