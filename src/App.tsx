import React, { useState } from 'react';
// @ts-ignore
import { Modal } from './components/index.ts';
// import Modal from './components/Modal/Portal.tsx';
import logo from './logo.svg';
import './App.css';

const App: React.FC = (): React.ReactElement => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState<boolean>(true);

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

        <Modal
          visible={visible}
          onClose={() => setVisible(false)}
          title="Modal demo 1"
        >
          hello, modal1
        </Modal>
        <Modal
          visible={visible}
          onClose={() => setVisible(false)}
          title="Modal demo 2"
        >
          hello, modal2
        </Modal>
      </main>
    </div>
  );
};

export default App;
