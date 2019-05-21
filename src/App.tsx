import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

console.info('aaa');

const App: React.FC = (): React.ReactElement => {
  const [value, setValue] = useState('');

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>): void {
    setValue(evt.target.value);
  }
  return (
    <div className="App">
      <main>
        <img className="App-logo" src={logo} alt="" />
        <article>
          <input type="text" value={value} onChange={handleChange} />
          <input type="text" value={value} onChange={handleChange} />
        </article>
      </main>
    </div>
  );
};

export default App;
