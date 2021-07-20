import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';
import ProductForm from './ProductForm';

const  ShowProductInfo = (props) =>{
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        console.log('here')
        axios.get(`http://localhost:8000/api/product/${props.id}`).then(response => setSingleProduct(response.data.product))
        .catch(err=>console.log(err));
    }, []);

    const deleteProduct = (e) =>{
        axios.delete(`http://localhost:8000/api/product/delete/${props.id}`)
        .then(res => {
            console.log(res)
            navigate('/');
        })
        .catch(err=> console.log(err))
  }
  

    return (
        <div>
            <h3>{singleProduct.title}</h3>
            <p>Price: {singleProduct.price}</p>
            <p>Description: {singleProduct.description}</p>
            <Link to= {'/product/edit/' + props.id}> Edit Product</Link>
            <button className="text-danger m-2" onClick={deleteProduct}>Delete</button>
        </div>
     
     

    )
}


export default ShowProductInfo;