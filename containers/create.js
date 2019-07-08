import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Create = () => {

    const [aliasName, setAliasName] = useState('')

    const getNewWallet = () => {
        console.log('Creating Wallet');
        axios.post(`https://libraservice2.kulap.io/createWallet`)
        .then(res => {
            let tempAddress = res.data.address;
            let data = {
                address : tempAddress,
                alias : aliasName
            }
            localStorage.setItem('wallets', JSON.stringify(data));
        })
    }

    return(
        <Card>
            <Card.Header>Create Wallet</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Alias Name</Form.Label>
                        <Form.Control type="text" required={true} onChange={(e) => setAliasName(e.target.value)}/>
                        <Form.Text className="text-muted">Example : Mark</Form.Text>
                    </Form.Group>
                    <Button variant="success" onClick={() => getNewWallet()}>Create</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Create