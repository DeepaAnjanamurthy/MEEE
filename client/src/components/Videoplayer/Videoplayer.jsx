import React from 'react';
import YouTube from 'react-youtube';


class Videoplayer extends React.Component{
    render() {
        const opts = {
          height: '300',
          width: '500',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };
        
        return <YouTube videoId="WaeSdmXPzIM" opts={opts} onReady={this._onReady} />;
        // return <YouTube videoId="IoGH3Cw1xIs" opts={opts} onReady={this._onReady} />;
      }
    
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
}


export default Videoplayer
