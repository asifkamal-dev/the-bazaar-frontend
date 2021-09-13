import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap css stylesheet
import { Route } from 'react-router-dom'

import Header from './components/header/Header';
import ProductsList from './pages/Products_List';
import Homepage from './components/homepage/homepage';
import AddProductForm from './pages/AddProductForm';
import ProductDetail from './pages/Product_Detail';


function App() {
  return (
    <div>
      <Header />
      <Route exact path ='/' component={Homepage} />
      <Route path ='/home' component={ProductsList} />
      <Route path ='/product/add' component={AddProductForm} />
      <Route path ='/product/:id' render={(routerProps)=> (<ProductDetail match={routerProps.match} />)} />
      {/* <Route path ='/product/:id' component={ProductDetail} /> */}

    </div>
  );
}

export default App;
