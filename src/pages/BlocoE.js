import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import NewHeader from '../component/NewHeader';
import MapE from '../component/maps/MapE'

import { Video } from 'expo';

export default class BlocoE extends React.Component {
  constructor(props){         
    super(props);
    this.state = {
      estado: false
    };
  }

 componentDidMount(){
    const {navigation} = this.props;
    navigation.addListener('willFocus',
      ()=>{
        this.setState({estado:true})
        console.log("Video Permetido.")
      }
    )
  }

  onEnd(){
     setTimeout(()=>{
      this.setState({
        estado:false
        })
      },1200)
  }

  render() {
    return (
      <View style={styles.container}>
      { this.state.estado
        ?
          <Video
              source={require('../videos/BlocoE.mp4')}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping={false}
              onError={() => console.log('Error Happen')}
              onLoad={() => this.onEnd()}
              onLoadStart={() => console.log("carregando video..")}
              style={{ width: '100%', height: '100%' }}
           />
        :
          
          <ImageBackground source={require('../imagens/BlocoE.png')} style={{width: '100%', height: '100%'}}>
            <NewHeader></NewHeader>
            <MapE/>
          </ImageBackground> 
      }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

const header = StyleSheet.create({
  header:{
    height:65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});

