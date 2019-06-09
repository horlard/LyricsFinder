import React, { Component } from 'react';
import {Done} from '../actions';
import Musix from '../api/musix';
import {connect} from 'react-redux';

 class Tracks extends Component {
    async componentDidMount() {
        const response = await Musix.get('/chart.tracks.get',{
            params : {
                chart_name : 'top',
                page : '1',
                page_size : '10',
                country : 'us',
                f_has_lyrics : '1',
                apikey : '03e1dfb7b02e443fce1505fc92d96178'  
            }
        })
        this.props.Done(response.data.message.body.track_list);
        console.log(this.props.tracklist);
    }
    render() {
        return (
            <div className='ui container'>
                <div className='ui segment'>
                <form className='ui form'>
                <div className='field'>
                <label>Song search</label>
                <input type='text'/>
                
                </div>
                 </form>    
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {tracklist : state.trackInfo}
}

export default connect(mapStateToProps,{Done})(Tracks);




