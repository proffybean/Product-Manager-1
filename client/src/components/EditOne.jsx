import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Form from './Form'

const EditOne = props => {

    const navigate = useNavigate()

    const {id} = useParams()
    const [product, setProduct] = useState({})
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState(0);
    // const [description, setDescription] = useState('');
    const [loaded, setLoaded] = useState(false)

    useEffect( ()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res=>{
                console.log(res.data)
                setProduct(res.data)

                // setTitle(res.data.title)
                // setPrice(res.data.price)
                // setDescription(res.data.description)
                setLoaded(true)
            })
            .catch( err => console.log(err))


    },[])

    const updateProduct = (title, price, description)=>{
        axios.put(`http://localhost:8000/api/products/${id}`, 
            {
                "title":title, 
                "price":price, 
                "description": description
            })
            .then( res => {
                console.log(`Edited: ${res.data}`)
            })
            .catch(err => console.log(err))

            //TODO redirect
            navigate(`/`)
    }

    return(
        <div>
            <h2>Edit {product.title}</h2>

            {
                loaded &&
                <Form 
                    initTitle = {product.title}
                    initPrice = {product.price}
                    initDescription = {product.description}
                    onSubmit = {updateProduct}
                />
            }

            {/* <form onSubmit={ (e) => updateProduct(e)}>

                <div id="title">
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>

                <div id="price">
                    <label>Price:</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </div>

                <div id="desc">
                    <label>Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                </div>

                <button>Edit</button>

            </form> */}
        </div>
    )
}
export default EditOne