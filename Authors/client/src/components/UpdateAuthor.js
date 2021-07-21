import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';

const UpdateAuthor = (props) => {
    const [authorName, setAuthorName] = useState('');
    const [error, setError] = useState({});
    console.log(props, 'proooops')

    const cancelButton = (e) =>{
        e.preventDefault()
        navigate('/')
    }

    const updateAutor = (e) =>{
        console.log('HERE')
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props.id}`, {authorName:authorName})
    .then(res => {
        console.log(res, 'result from update method')
        if(res.data.author){
            navigate('/')
          }else{
            console.log("OOPSIEEE you gota fill this out properly!")
            console.log(res.data.err.errors)
            setError(res.data.err.errors)
          }
    })
    .catch(err=>console.log(err))
    }

    const changehandler = (e) => {
        setAuthorName(e.target.value);
    }

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(result => {
            setAuthorName(result.data.author)
            console.log(result)
           
        }
            )
        .catch(err=>console.log("error", err))
    }, [])

    console.log(authorName, "author")

    return (
        <>
        <h1>Favarite Author</h1>
        <Link to="/">Home</Link>
        <p>Edit this Author:</p>
          <form onSubmit={ updateAutor }>
            <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">Name: </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="colFormLabel"  name='authorName'  value={authorName.authorName} onChange={ changehandler }/>
                    {error.authorName ? <p className="text-danger">{error.authorName.message}</p>: ""}
                </div>
            </div>
        <button  className="btn btn-primary m-2" onClick={cancelButton}>Cancel</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </>
    )
}

export default UpdateAuthor;