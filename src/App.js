import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap css stylesheet
import { Route } from 'react-router-dom'

import Header from './components/header/Header';
import ProductsList from './pages/product/Products_List';
import Homepage from './components/homepage/homepage';
import AddProductForm from './pages/product/AddProductForm';
import ProductDetail from './pages/product/Product_Detail';
import EditProductForm from './pages/product/EditProductForm';
import CategoriesList from './pages/category/CategoriesList';
import CategoryView from './pages/category/CategoryView';
import Login from './pages/signin/Login';
import Logout from './pages/signin/Logout';
import Register from './pages/signin/Register';
import AddCategoryForm from './pages/category/AddCategoryForm';
import EditCategoryForm from './pages/category/EditCategoryForm';
import BasketView from './pages/basket/BasketView';

function App() {
  return (
    <div>
      <Header />
      <Route exact path ='/' component={Homepage} />
      <Route path ='/register' component={Register} />
      <Route path ='/login' component={Login} />
      <Route path ='/logout' component={Logout} />
      <Route path ='/home' component={ProductsList} />
      <Route path ='/add/product' component={AddProductForm} />
      <Route exact path ='/product/:id' render={(routerProps)=> (<ProductDetail match={routerProps.match} />)} />
      <Route path ='/product/edit/:id' render={(routerProps)=> (<EditProductForm match={routerProps.match} />)} />
      <Route path = '/categories/' component = {CategoriesList} />
      <Route path = '/add/category' component={AddCategoryForm} />
      <Route exact path ='/category/:id' render={(routerProps)=> (<CategoryView match={routerProps.match} />)} />
      <Route path ='/category/edit/:id' render={(routerProps)=> (<EditCategoryForm match={routerProps.match} />)} />
      <Route path ='/basket' component={BasketView} />

    </div>
  );
}

export default App;
