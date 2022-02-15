import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data';
import ActionCard from './components/ActionCard';
import { Divider } from '@mui/material';
import styles from './components/styles';

function App() {
  const cards: {}[] = data.map((info: any) => {
    return (
      <div>
        <ActionCard key={info.id} info={info} />
        <Divider light={true} sx={styles.divider} />
      </div>
    );
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <a href='./' className='App-title'>
          <img src={logo} className='App-logo' alt='logo' />
          tournal
        </a>
      </header>
      <section className='cards--list'>{cards}</section>
    </div>
  );
}

export default App;
