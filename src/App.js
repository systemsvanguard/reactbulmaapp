// src/App.js
import React from 'react';
import {BrowserRouter , Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Resources from './pages/Resources';
import Services from './pages/Services';
import SiteBanner from './pages/SiteBanner';
import SiteFooter from './pages/SiteFooter';
import SiteNavBar from './pages/SiteNavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SiteNavBar />
        <SiteBanner />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Services} path="/services" />
          <Route component={About} path="/about" />
          <Route component={Resources} path="/resources" />
          <Route component={Contact} path="/contact" />
          <Route component={NotFound} />
        </Switch>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;