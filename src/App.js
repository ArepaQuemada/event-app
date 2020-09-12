import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Speakers from './components/Speakers';
import useFaker from './utils/useFaker';
import InfoNav from './components/InfoNav';
import Footer from './components/Footer';

function App() {

  const fakeData = useFaker(8);

  return (
    <div>
      <Header />
      <Home/>
      <InfoNav />
      <Speakers speakers={fakeData} />
      <Footer />
    </div>
  );
}

export default App;
