import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SurahList from './components/SurahList';
import SurahDetail from './components/SurahDetail';
import About from './components/About';
import GetStarted from './components/GetStarted';
import ListenSurahList from './components/ListenSurahList ';  // Ensure the import path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sura" element={<SurahList />} />
          <Route path="/surah/:number" element={<SurahDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/listen" element={<ListenSurahList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
