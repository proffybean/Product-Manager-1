import { useParams, useNavigate } from "react-router-dom"
import React, {useState, useEffect} from 'react'
import axios from "axios"
import DeleteButton from "./DeleteButton"

const DisplayOne = props => {

    const {id} = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    useEffect( ()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res=>{
                console.log(res.data)
                setProduct(res.data)
            })
            .catch( err => console.log(err))
    },[])

    const deleteProduct = ()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                console.log(`deleted:${res}`)
            })
            .catch(err=>{console.log(err)})

            navigate('/')
    }

    // const removeProductFromDomById = (id)=>{
    //     setProductList(productList.filter( item => item._id !== id))
    // }

    return(
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            {/* <button className="delete-button" onClick={() => deleteProduct()}>delete </button> */}
            <DeleteButton deleteCallback={ ()=> deleteProduct()} />
        </div>
    )
}
export default DisplayOne