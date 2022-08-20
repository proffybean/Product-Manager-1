import React, {useState, useEffect} from 'react'
import Form from '../components/Form';
import ProductList from "../components/ProductList";
import axios from 'axios'


const Main = props => {

    const [productList, setProductList] = useState([])

    // from Form.jsx
    const createProduct = (title, price, description) =>{
        //e.preventDefault()
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

            // setTitle('')
            // setPrice(0)
            // setDescription('')
    }

    // From ProductList.jsx
    useEffect( ()=> {
        axios.get('http://localhost:8000/api/products')
            .then( res=>{
                console.log(res.data)
                setProductList(res.data)
            })
            .catch( err => {
                console.log(err)
            })
    }, [])

    // write deleteProduct
    // axios call to delete enpoint.  need id passed in
    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                console.log(`deleted:${res}`)
                removeProductFromDomById(id)
            })
            .catch(err=>{console.log(err)})
    }

    // write removeFromDom func
    // remove product from ProductList state
    const removeProductFromDomById = (id)=>{
        setProductList(productList.filter( item => item._id !== id))
    }


    return(
        <div>
            <Form 
                initTitle = ''
                initPrice = ''
                initDescription = ''
                onSubmit = {createProduct}
            />
            <ProductList 
                productList={productList} 
                deleteProduct = {deleteProduct}    
            />
        </div>
    )
}
export default Main