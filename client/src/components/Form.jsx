import React, {useState} from "react";
import axios from 'axios'

const Form = props => {

    const {productList, setProductList } = props
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', 
            {title, price, description})
            .then( res => {
                console.log(res.data)
                 // add to lifted state, productlist
                 setProductList([...productList, {_id:res.data._id, title, price, description}])
            })
            .catch( error => {
                console.log(error)
            })

            setTitle('')
            setPrice(0)
            setDescription('')
    }

    return (
        <div id="form">

            <h2>Product Manager</h2>
            <form onSubmit={ (e) => submitHandler(e)}>

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

                <button>Create</button>

            </form>

        </div>
    )

}
export default Form