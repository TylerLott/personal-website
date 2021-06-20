import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import ContactPage from './pages/contact'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import ReactGa from 'react-ga'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    ReactGa.initialize('UA-199888472-2')
    ReactGa.pageview('/')
  }, [])

  return (
    <Router className="App">
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactPage} exact />
      </Switch>

    </Router>
  );
}

export default App;
