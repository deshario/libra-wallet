import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';

const Wallets = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        let tempWallets = JSON.parse(localStorage.getItem('wallets')) || [];
        setItems(tempWallets)
    })

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
                {
                    items.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.alias}</td>
                                <td><code>{item.address}</code></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table> 
    )
}

export default Wallets