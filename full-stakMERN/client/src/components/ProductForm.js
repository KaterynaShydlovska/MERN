import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';


const ProductForm = (props) =>{
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setdescription] = useState('');
    const [product, setProduct] = useState([]);
    const [deleteClick, setDeleteClick] = useState(false);
    const [error, setError] = useState({})
    const [createClick, setCreateClick] = useState(false);

    const createProduct = (e) => {
        e.preventDefault();
        const newProduct = { title, price, description };
        axios.post('http://localhost:8000/api/product/new', newProduct)
          .then(res=>{
          console.log(res)
          setCreateClick(!createClick);
          if(res.data.results){
            navigate('/')
          }else{
            console.log("OOPSIEEE you gota fill this out properly!")
            console.log(res.data.error.errors)
            setError(res.data.error.errors)
          }   
        })
          .catch(err=>console.log(err))
  }

  useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
    .then(res => {
        console.log("logging response!!", res)
        setProduct(res.data.results)
    
    })
    .catch(err=> console.log("errorrr with axios call", err))
}, [deleteClick, createClick])

const deleteProduct = (e, productId) => {
  console.log('delete')
  console.log(productId)
  axios.delete(`http://localhost:8000/api/product/delete/${productId}`)
      .then(res => {
          console.log(res)
          setDeleteClick(!deleteClick);
      })
      .catch(err=> console.log(err))
}

    return (
      <>
        <form onSubmit={ createProduct }>
        <div className="form-group row">
          <label for="colFormLabel" className="col-sm-2 col-form-label">Title: </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="colFormLabel"  onChange={ (e) => setTitle(e.target.value) }/>
            {error.title ? <p className="text-danger">{error.title.message}</p>: ""}
          </div>
          <label for="colFormLabel" className="col-sm-2 col-form-label">Price: </label>
          <div className="col-sm-10">
            <input type="number"  step="0.01" className="form-control" id="colFormLabel"  onChange={ (e) => setPrice(e.target.value) } />
          </div>
          <label for="colFormLabel" className="col-sm-2 col-form-label">Description: </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="colFormLabel" onChange={ (e) => setdescription(e.target.value) } />
            {error.description ? <p className="text-danger">{error.description.message}</p>: ""}
          </div>
          </div>
        
        <button type="submit" className="btn btn-primary">Create</button>
      </form>

      <div>
        <h1>All Products: </h1>
        {product.map(p=>{
          let link = `/product/${p._id}`
          return<div>
            <Link to={link}> {p.title}</Link>
            <button className="text-danger m-2" onClick={(e) => deleteProduct(e, p._id)}>Delete</button>
            </div> 
        })}
        </div>
        
      </>
    )
}

export default ProductForm;