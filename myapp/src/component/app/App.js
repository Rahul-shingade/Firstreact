import React from 'react';
import './App.css';
import Playlist from './Playlist';
import SearchBar from '../SearchBar';
import SearchResults from './SearchResults';
import Spotify from './uitl/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      SearchResults:[],
      PlaylistName: "New Playlist",
      playlistTracks:[]  
    };
    this.Search=this.Search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updateTrackName = this.updateTrackName.bind(this);
    this.svaePlaylist= this.svaePlaylist.bind(this);
    this.removeTrackSearch = this.removeTrackSearch.bind(this);
    this.doThese= this.doThese.bind(this);
  }


  search(term){
    Spotify.search(term).then(SearchResults=>{
      this.setState({SearchResults: SearchResults});
  });
  }
  addTrack(track){
    let tracks=this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
  }
  tracks.push(track);
  this.setState({playlistTracks : tracks});
 }
 removeTrack(track){
  let tracks = this.state.playlistTracks;
  let trackSearch=this.state.trackResults;
  tracks=tracks.filter(currentTrack => currentTracktrack.id !== track.id);
  trackSearch.filter(track);
  this.setState({playlistTracks : tracks});
 }
 removeTrackSearch(track){
  let tracks = this.state.SearchResultsResults;
  tracks=tracks.filter(currentTrack => currentTrack.id !== track.id);
  this.setState({searchResults : tracks});
 }
 doThese(track){
  this.addTrack(track);
  this.removeTrackSearch(track);
 }

 updatePlaylistName(name){
  this.setState({playlistName : name});
 }
 savePalylist(){
  const trackUris=this.state.playlistTracks.map(track =>track.uri);
  Spotify.savePalylist1(this.state.playlist,trackuris).then ( () => {
    this.setState({
      updatePlaylistName:"New Playlist",
      playlistTracks:[]
    });
  });
   }
}
function App() {
  return (
    <div>
      <h1>
        <a href="http://localhost:3000">Musicophile</a>
      </h1>
      <div className='App'>
        <SearchBar onSearch = {this.search}/>
        <div className='App-Playlist'>
          <SearchResults onSearchResults={this.searchResults} onadd={this.dothese}/>
          <Playlist playlistTracks={this.playlistTracks} onNmaeChange={this.updatePlaylistName} onRemove={this.removePlaylist} onSave={this.savePlaylist}/>
      </div>
      </div>
    </div>
  );
}

export default App;
