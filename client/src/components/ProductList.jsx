import React, {useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = props => {
    
    const {productList, setProductList} = props

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
            <h2>All Products</h2>
            {
                productList.map( (item, index) => {
                    return( 
                        <div key={index}>
                            {/* <p key={index}>{item.title}, {item.price}, {item.description} */}
                            <p>
                                <Link to={`/display/products/${item._id}`}>
                                    {item.title}
                                </Link>&nbsp; | &nbsp; 
                                <Link to={`/edit/products/${item._id}`}>
                                    Edit
                                </Link> &nbsp;| &nbsp; 
                                <button className="delete-button" onClick={() => deleteProduct(item._id)}>
                                    delete
                                </button>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList