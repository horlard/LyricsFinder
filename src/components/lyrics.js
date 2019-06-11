import React, { Component } from 'react'
import Musix from '../api/musix';

class lyrics extends Component {
    state={
        lyrics: '',
        track: null
    }
    componentDidMount() {
         Musix.get('/track.lyrics.get',{
            params : {
                track_id : this.props.match.params.id,
                apikey : '03e1dfb7b02e443fce1505fc92d96178'  
            }
        }).then(res=>{
            this.setState({lyrics: res.data.message.body.lyrics.lyrics_body});

            return Musix.get('/track.get',{
                params : {
                    track_id : this.props.match.params.id,
                    apikey :   '03e1dfb7b02e443fce1505fc92d96178'
                }
            })
        }).then(res=> {
            this.setState({track:res.data.message.body.track})
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default lyrics;