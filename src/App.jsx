import React from 'react';
import Header from 'components/Header/Header';
import About from 'components/About/About';
import Store from 'components/Store/Store';
import GlobalStyles from 'App.styles';
import ItemsContextProvider from 'ItemsContext';

const App = () => (
  <div className='App'>
    <ItemsContextProvider>
      <GlobalStyles />
      <Header />
      <main>
        <About />
        <Store />
      </main>
    </ItemsContextProvider>
  </div>
);

export default App;
