import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Homescreen (props){

    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async() =>{
            const {data} = await axios.get("/api/products");
            setProduct(data);
        }
        fetchData();
        return() =>{

        };
    }, [])

    return <ul className="products">
    {
      products.map(product =>
        <li key={product.id}>
        <div className="product">
            <Link to={'/product/'+product.id}>
                <img className="product-image" src={product.image} alt="product"/>
            </Link>
            
            <div className="product-name">
                <Link to={'/product/'+product.id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">{product.rating} Stars({product.numReviews} Reviews)</div>
        </div>
    </li>)
    }
</ul>
}
export default Homescreen;