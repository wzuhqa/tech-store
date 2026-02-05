import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Cart />
    </div>
  );
}

export default App;
