import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';

const  ShowProductInfo = (props) =>{
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        console.log('here')
        axios.get(`http://localhost:8000/api/product/${props.id}`).then(response => setSingleProduct(response.data.product))
        .catch(err=>console.log(err));
    }, []);

    return (
        <div>
            <h3>{singleProduct.title}</h3>
            <p>Price: {singleProduct.price}</p>
            <p>Description: {singleProduct.description}</p>
        </div>
     
     

    )
}


export default ShowProductInfo;