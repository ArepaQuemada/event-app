import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import useFaker from './utils/useFaker';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export const FakerContext = React.createContext('');

export default function App() {
  const fakeData = useFaker(8);

  return (
    <Router>
      <Header />
      <FakerContext.Provider value={fakeData}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact-path="/" component={Home} />
        </Switch>
      </FakerContext.Provider>
      <Footer />
    </Router>
  );
}
