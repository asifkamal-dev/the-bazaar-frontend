import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap css stylesheet
import { Route } from 'react-router-dom'

import Header from './components/header/header'
import ProductsView from './components/products/products-view';
import Homepage from './components/homepage/homepage';




function App() {
  return (
    <div>
      <Header />
      <Route exact path ='/' component={Homepage} />
      <Route  path ='/home' component={ProductsView} />

    </div>
  );
}

export default App;
