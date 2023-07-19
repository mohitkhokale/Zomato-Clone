import React  from 'react';
import "./App.css";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import Home from './Pages/home';

function App() {
  return ( 
    <>
      <Header />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
