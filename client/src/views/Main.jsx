import React, {useState} from 'react'
import Form from '../components/Form';
import ProductList from "../components/ProductList";

const Main = props => {

    const [productList, setProductList] = useState([])

    return(
        <div>
            <Form productList={productList} setProductList={setProductList}/>
            <ProductList productList={productList} setProductList={setProductList}/>
        </div>
    )
}
export default Main