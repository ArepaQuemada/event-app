import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Speakers from './components/Speakers';
import useFaker from './utils/useFaker';

function App() {

  const fakeData = useFaker(8);

  return (
    <div>
      <Header />
      <Home/>
      <Speakers speakers={fakeData} />
    </div>
  );
}

export default App;
