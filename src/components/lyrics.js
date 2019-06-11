import React, { Component } from 'react'
import Musix from '../api/musix';
import {Link} from 'react-router-dom';

class lyrics extends Component {
    state={
        lyrics: '',
        track: ''
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
            <div className='ui container' style={{marginTop: '8%'}}>
                <Link to='/'>
                    <div className='ui primary button' style={{marginBottom: '20px'}}><i class="arrow left icon"></i>Go Back</div>
                </Link>
                
               <div>
               <table class="ui red table" style={{width: '700px',height: '200px'}}>
                    <thead>
                        <tr><th>{`${this.state.track.track_name} by ${this.state.track.artist_name}`}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr style={{paddingTop: '20px'}}>
                            {this.state.lyrics}
                        </tr>
                        </tbody>
                </table>


                <table class="ui fixed single line celled table" style={{width: '500px'}}>
  <thead>
    <tr><th>Album ID</th>
    <th>{this.state.track.album_id}</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>Explicit Words</td>
      <td>
          {
              this.state.track.explicit === 0? 'No' : 'Yes'
          }
      </td>
      
    </tr>
    <tr>
      <td>Song Genre</td>
      <td>Alternative</td>
      
    </tr>
    
  </tbody>
</table>
               </div> 
            </div>
        )
    }
}

export default lyrics;