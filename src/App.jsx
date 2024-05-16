import { useState } from 'react'

import './global.css';
import { Header } from './components/Header';
import { Input } from './components/Input';

import styles from './App.module.css';

function App() {

  return (
    <div>
      <Header />
      <section className={styles.content}>
        <Input /> 
      </section>
      <h1>In progress</h1>
    </div>
  )
}

export default App
