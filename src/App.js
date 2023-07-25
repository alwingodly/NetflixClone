
import './App.css';
import './components/Navbar/navbar.css'
import './components/Banner/banner.css'
import './components/row-post/row-post.css'
import {Action , Horror , Romance ,Comedy , orginals} from './urls.js'
import React from 'react';
import Navbar from './components/Navbar/navbar';
import Banner from './components/Banner/banner';
import Rowpost from './components/row-post/row-post';
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Banner/>
   <Rowpost url = {orginals} title = 'Netflix Orginals' />
   <Rowpost url = {Action} title = 'Action Movies' isSmall/>
   <Rowpost url = {Comedy} title = 'Comedy Movies' isSmall/>
   <Rowpost url = {Horror} title = 'Horror Movies' isSmall/>
   <Rowpost url = {Romance} title = 'Romance Movies' isSmall/>
    </div>
  );
}

export default App;
