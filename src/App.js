import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap css stylesheet
import { Route } from 'react-router-dom'

import Header from './components/header/Header';
import ProductsList from './pages/Products_List';
import Homepage from './components/homepage/homepage';
import AddProductForm from './pages/AddProductForm';
import ProductDetail from './pages/Product_Detail';
import EditProductForm from './pages/EditProductForm';
import CategoriesList from './pages/CategoriesList';
import CategoryView from './pages/CategoryView';

function App() {
  return (
    <div>
      <Header />
      <Route exact path ='/' component={Homepage} />
      <Route path ='/home' component={ProductsList} />
      <Route path ='/products/add' component={AddProductForm} />
      <Route exact path ='/product/:id' render={(routerProps)=> (<ProductDetail match={routerProps.match} />)} />
      <Route path ='/product/edit/:id' render={(routerProps)=> (<EditProductForm match={routerProps.match} />)} />
      <Route path = '/categories/' component = {CategoriesList} />
      <Route exact path ='/category/:id' render={(routerProps)=> (<CategoryView match={routerProps.match} />)} />
      {/* <Route path ='/product/:id' component={ProductDetail} /> */}

    </div>
  );
}

export default App;
