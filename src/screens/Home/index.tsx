import {styles, VIDEO_HEIGHT, SCREEN_SPACE} from './styles';
import {View, ActivityIndicator, useWindowDimensions, Alert} from 'react-native';
import YoutubeIframe, {getYoutubeMeta} from 'react-native-youtube-iframe';
import React, { useState, useCallback} from 'react';
import * as ScreenOrientation from 'expo-screen-orientation'
import { Button } from 'react-native-paper';

export function Home(){
  const [videoPronto, setVideoPronto] = useState(false);

  const {width} = useWindowDimensions();
  const VIDEO_WIDTH = width - (SCREEN_SPACE * 2);

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    console.log('isFullScreen', isFullScreen);
    if(isFullScreen){
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    }else{
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    }
  }, []); 

  function infoVideo(){
    getYoutubeMeta('0GOUF8vNqzE').then(meta => {
      Alert.alert('nao sei : ' + meta);
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <YoutubeIframe 
          videoId='0GOUF8vNqzE'
          height={videoPronto? VIDEO_HEIGHT : 0}
          width={VIDEO_WIDTH}
          onReady={() => setVideoPronto(true)}
          onFullScreenChange={onFullScreenChange}
        />
        {!videoPronto && <ActivityIndicator color={'red'}/>}
      </View>
      <Button 
        mode="contained"
        onPress={infoVideo}>
          video info
        </Button>
    </View>
  );
}
