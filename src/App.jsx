import React from 'react';
import styles from './styles/App.module.scss';
import Header from "./components/Header/Header";
import Routes from "./components/Routes";
import { UserProvider } from "./context/userContext";
import { ApiProvider } from './context/apiContext';
import { CrudProvider } from "./context/crudContext";
import "./fontawesome";

function App() {

  return (
    <UserProvider>
      <ApiProvider>
        <CrudProvider>
          <main>
              <Header />
              <Routes />
          </main>
        </CrudProvider>
      </ApiProvider>
    </UserProvider>
  );
}

export default App;
