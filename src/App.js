import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap css stylesheet
import { Route } from 'react-router-dom'

import Header from './components/header/Header';
import ProductsList from './pages/Products_List';
import Homepage from './components/homepage/homepage';
import AddProductForm from './pages/AddProductForm';



function App() {
  return (
    <div>
      <Header />
      <Route exact path ='/' component={Homepage} />
      <Route path ='/home' component={ProductsList} />
      <Route path ='/product/add' component={AddProductForm} />

    </div>
  );
}

export default App;
