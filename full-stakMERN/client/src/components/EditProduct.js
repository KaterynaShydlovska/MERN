import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';

const EditProduct = (props) =>{
    const [productToUpdate, setProductToUpdate] = useState({
        title:"",
        price:"",
        description:""
    });
    const [error, setError] = useState({})
    
    
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(result => {
            setProductToUpdate(result.data.product)
           
        }
            )
        .catch(err=>console.log("error", err))
    }, [])

const handleUpdate = (e) =>{
    e.preventDefault();

    axios.put(`http://localhost:8000/api/product/edit/${props.id}`, productToUpdate)
    .then(res => {
        console.log(res, 'result from update method')
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

const changehandler = (e)=>{
    setProductToUpdate({
        ...productToUpdate,
        [e.target.name]:e.target.value
    })
}



    return (
        <>
        <h1>Edit product</h1>
        <form  onSubmit={handleUpdate}>
        <div className="form-group row">
          <label for="colFormLabel" className="col-sm-2 col-form-label">Title: </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="colFormLabel"  name='title'  value={productToUpdate.title} onChange={ changehandler }/>
            {error.title ? <p className="text-danger">{error.title.message}</p>: ""}
          </div>
          <label for="colFormLabel" className="col-sm-2 col-form-label" >Price: </label>
          <div className="col-sm-10">
            <input type="number"  step="0.01" className="form-control" id="colFormLabel"  name='price' value={productToUpdate.price} onChange={ changehandler }/>
          </div>
          <label for="colFormLabel" className="col-sm-2 col-form-label" >Description: </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="colFormLabel" name='description' value={productToUpdate.description} onChange={ changehandler }/>
            {error.description ? <p className="text-danger">{error.description.message}</p>: ""}
          </div>
          </div>
        
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
        </>
    )
}

export default EditProduct;