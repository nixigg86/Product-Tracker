import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Button, ListGroup, Card, Image} from 'react-bootstrap';
import products from '../products';

const ProductScreen = ({match}) => {
    const product = products.find((product) => {
        return(
            product._id === match.params.id
        )
    })

    return (
        <>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={9}>
                    <Image src={product.image} alt={product.sku} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>SKU: {product.sku}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Specs:</span> {product.specs}
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <span>Connector Size:</span> {product.connector_size}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Connector Length:</span> {product.connector_length}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Connector Type:</span> {product.type}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Cord Length:</span> {product.cord_length}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Adapter weight:</span> {product.weight}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Product Dimension:</span> {product.product_dimension}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Box qty:</span> {product.box_qty}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>UL Model:</span> {product.ul_model}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            
            <Row>
                <Col className="my-3" md={6}>
                    <ListGroup>
                        <ListGroup.Item variant={product.inStock > 0 ? "success" : 'danger'}>
                            {product.inStock > 0 ? 'Product in Stock' : 'Product Out of Stock'}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
