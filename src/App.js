import React, { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Megan Pottenger'
  }, [])
  return (
    <div>
     <Header />
     <Footer />
    </div>
  );
}

export default App;
