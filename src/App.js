import logo from './logo.svg';
import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Album from './Components/Album'
import Albums from './Components/Albums'
import Nav from './Components/Nav'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [
        {id: 1, artist: "NagaChaitanya", album_title: "Em mayaChesave", album_cover: "Music Anirudh R", songs: "Sound Track1",img:"https://images-na.ssl-images-amazon.com/images/I/71yWLsRv0bL._RI_.jpg"},
        {id: 2, artist: "Akhil", album_title: "Hello", album_cover: "Music Anup", songs: "Sound Track2",img:"https://upload.wikimedia.org/wikipedia/en/3/3b/Hello_Telugu_film_poster.jpg"},
        {id: 3, artist: "Suriya", album_title: "Aakasam Nee Haddura", album_cover: "Music G. V. Prakash", songs: "Sound Track3",img:"https://a10.gaanacdn.com/images/albums/92/2996192/crop_480x480_1605213981_2996192.jpg"},
      ],
      errorMsg: ''
    }
  }
  render(){
  return (
    <div className="App">
      <Nav />
        <div className="container">
          <div className="row">
<Album />
          </div>
          <div className="row">
            <div className="col-sm-3">
            <Albums albums={this.state.albums} />
            </div>
           
          </div>
        </div>
    </div>
  );
}
}
export default App;
