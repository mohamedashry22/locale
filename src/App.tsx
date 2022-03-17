import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useTypedTranslation} from './localization/useLocales'
import {nameSpaces} from './localization/services/init'

function App() {

  const { t } = useTypedTranslation(nameSpaces.global);

  return (
    <div className="App">
      <header className="App-header">
      <div>{t("child1", { ns: nameSpaces.common })}</div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
