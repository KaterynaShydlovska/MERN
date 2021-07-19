import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProductForm = (props) =>{
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setdescription] = useState('');
    const [product, setProduct] = useState([]);

    const createProduct = (e) => {
        e.preventDefault();
        const newProduct = { title, price, description };
        // console.log("Welcome", newProduct);
        // setProduct([...product, newProduct]);
        axios.post('http://localhost:8000/api/product/new', newProduct)
          .then(res=>console.log(res))
          .catch(err=>console.log(err))
  }


    return (
        <form onSubmit={ createProduct }>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">Title: </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="colFormLabel"  onChange={ (e) => setTitle(e.target.value) }/>
          </div>
          <label for="colFormLabel" class="col-sm-2 col-form-label">Price: </label>
          <div class="col-sm-10">
            <input type="number"  step="0.01" class="form-control" id="colFormLabel"  onChange={ (e) => setPrice(e.target.value) } />
          </div>
          <label for="colFormLabel" class="col-sm-2 col-form-label">Description: </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="colFormLabel" onChange={ (e) => setdescription(e.target.value) } />
          </div>
          </div>
        
        <button type="submit" class="btn btn-primary">Create</button>
      </form>
    )
}

export default ProductForm;