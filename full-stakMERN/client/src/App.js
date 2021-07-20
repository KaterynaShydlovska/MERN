
import './App.css';
import ProductForm from './components/ProductForm';
import ShowProductInfo from './components/ShowProductInfo';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductForm path="/"/>
        <ShowProductInfo path='/product/:id'/>
      </Router>
     
    </div>
  );
}

export default App;
