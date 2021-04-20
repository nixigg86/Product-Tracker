import React from 'react'
import { Row, Col, Table } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';


const HomeScreen = () => {
    return (
        <>
            <h1>Products</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Specs</th>
                        <th>Connector Size</th>
                        <th>Product</th>
                        <th>Link to Full Info</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (

                            <Product key={product._id} product={product} />

                        )
                    })}
                </tbody>
            </Table>


        </>
    )
}

export default HomeScreen

{/* <Row horizontal>
                {products.map((product) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    )
                })}
            </Row> */}