import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../assets/App.css';
import Home from '../views/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import SearchVideos from '../views/SearchVideos';
import NotFound from '../views/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="search" element={<SearchVideos />} />
          <Route exact path="/login" element={<SignIn/>}/>
          <Route exact path="/register" element={<SignUp/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
