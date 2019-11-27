import React from 'react';
import './App.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/footer.scss';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
        <Header/>
        <Main />
        <Footer />
    </div>
  );
}

export default App;
