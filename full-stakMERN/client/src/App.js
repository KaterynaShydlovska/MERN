
import './App.css';
import ProductForm from './components/ProductForm';
import ShowProductInfo from './components/ShowProductInfo';
import EditProduct from './components/EditProduct';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductForm path='/'/>
        <ShowProductInfo path='/product/:id'/>
        <EditProduct path='/product/edit/:id'/>
      </Router>
     
    </div>
  );
}

export default App;
