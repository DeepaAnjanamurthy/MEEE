import React from 'react';
import YouTube from 'react-youtube';


class Videoplayer extends React.Component{
  
  render() {
        // console.log(this.props.match.params);
        const opts = {
          
          height: '320',
          width: '500',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            volume: 1,
            muted: 0,
          },
        };
        return (
          <YouTube videoId={this.props.videoId} opts={opts} onReady={this._onReady} />
          )
        
      }
    
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
}


export default Videoplayer
