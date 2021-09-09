import logo from './logo.svg';
import './App.css';
// import { Route } from 'react-router-dom'

import Header from './components/header/Header'
import ProductsView from './components/products/products-view';
function App() {
  return (
    <div>
      <Header />
      <ProductsView />

    </div>
  );
}

export default App;
