import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';


const NewAuthor = (props) => {
    const [authorName, setName] = useState('');
    const [error, setError] = useState({});


    const createAuthor = (e) =>{
        e.preventDefault()
    axios.post("http://localhost:8000/api/authors/new", {authorName:authorName})
    .then(res => {
        console.log(res.data)
        if(res.data.author){
            navigate('/')
        }else{
            console.log("OOPSIEEE you gota fill this out properly!")
            setError(res.data.err.errors)
        }   
    })
    .catch(err => console.log(err))
    }

    const cancelButton = (e) => {
        e.preventDefault()
        navigate('/')
    }
    return (
        <>
        <h1> Favorite Authors</h1>
        <Link to="/">Home</Link>
        <p>We have quotes by:</p>

        <form onSubmit={ createAuthor }>
            <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">Name: </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="colFormLabel"  onChange={ (e) => setName(e.target.value) }/>
                    {error.authorName ? <p className="text-danger">{error.authorName.message}</p>: ""}
                </div>
            </div>
        <button  className="btn btn-primary m-2" onClick={cancelButton}>Cancel</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


        </>

    )
}

export default NewAuthor;