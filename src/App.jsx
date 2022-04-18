import './App.styles.js';
import Header from './components/Header/Header';
import About from './components/About/About';
import Store from './components/Store/Store';
import { GlobalStyles } from './App.styles';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Header />
      <main>
        <About />
        <Store />
      </main>
    </div>
  );
}

export default App;
