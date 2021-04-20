import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({ product }) => {
    return (

        <>

            <tr>          
                <td>{product.sku}</td>            
                <td>{product.specs}</td>
                <td>{product.connector_size}</td>
                <td>{product.inStock !== 0 ? 'In Stock' : 'Out of stock'}</td>
                <td><Link className="btn btn-info" to={`/product/${product._id}`}>More Info...</Link></td>
                
            </tr>
        </>
    )
}

export default Product






