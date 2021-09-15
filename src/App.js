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
import SignIn from './pages/signin/SignIn';
import AddCategoryForm from './pages/category/AddCategoryForm';

function App() {
  return (
    <div>
      <Header />
      <Route exact path ='/' component={Homepage} />
      <Route path ='/signin' component={SignIn} />
      <Route path ='/home' component={ProductsList} />
      <Route path ='/add/product' component={AddProductForm} />
      <Route exact path ='/product/:id' render={(routerProps)=> (<ProductDetail match={routerProps.match} />)} />
      <Route path ='/product/edit/:id' render={(routerProps)=> (<EditProductForm match={routerProps.match} />)} />
      <Route path = '/categories/' component = {CategoriesList} />
      <Route path = '/add/category' component={AddCategoryForm} />
      <Route exact path ='/category/:id' render={(routerProps)=> (<CategoryView match={routerProps.match} />)} />
      {/* <Route path ='/product/:id' component={ProductDetail} /> */}

    </div>
  );
}

export default App;
