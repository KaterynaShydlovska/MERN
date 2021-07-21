import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Link, navigate} from '@reach/router';

const Home = (props) => {
    const [allAuthors, setAuthors] = useState([]);
    const [clickDelete, serDelete] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res => {
            console.log(res.data)
            setAuthors(res.data.authors)
        })
        .catch(err => console.log(err))
    }, [clickDelete])

   const deleteAuthor = (e, id) =>{
       axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
       .then(res => {
        console.log(res)
        serDelete(!clickDelete);
    })
        .catch(err => console.log(err))
   }

   const editAuthor = (e,id) =>{
       console.log(id)
        navigate(`/edit/${id}`)
   }

    return(
        <>  
            <h1> Favorite Authors</h1>
            <Link to="/new">Add new Author</Link>
            <p>We have quotes by:</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Author</th>
                    <th>Action available</th>
                    </tr>
                </thead>
                <tbody>   
                   {allAuthors ? allAuthors.map(a => {
                       return(
                           <tr>
                               <td>{a.authorName}</td>
                               <td><button onClick={(e) => editAuthor(e, a._id)} className="btn btn-primary m-2">Edit</button> | <button  onClick={(e) => deleteAuthor(e, a._id)} className="btn btn-primary m-2">Delete</button></td>
                           </tr>
                       )
                   }): null}
                </tbody>
            </Table>
        </>
    )
}

export default Home;