import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
// Write imports for Router & BrowserRouter here //

function App(props) {
  console.log(props)
  return (
    <>
      <Navigation />
      <Router />
    </>
  );
}

export default App;
