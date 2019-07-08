import React from 'react'
import { Card, Table, Form } from 'react-bootstrap';

const Wallets = () => {
    return( 
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Alias</th>
                    <th>Account Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td><code>a77b7f8997b42212d213b93f7281419dcdfe993a0bf27180ffdb2c3ac8e72534</code></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jason</td>
                    <td><code>f4b09c8477cbe3705ac6213ae0af8ec48f8ff0f72285b42fb0ed8f3007e141c5</code></td>
                </tr>
            </tbody>
        </Table> 
    )
}

export default Wallets