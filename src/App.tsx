import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data';
import ActionCard from './components/ActionCard';

function App() {
  const cards: {}[] = data.map((info: any) => {
    return <ActionCard key={info.id} info={info} />;
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Travel Journal</p>
        <section className='cards--list'>{cards}</section>
      </header>
    </div>
  );
}

export default App;
