import React, { useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import LoadingData from '../components/Loader'

const Create = () => {

    const [aliasName, setAliasName] = useState('')

    const [loading, setLoading] = useState(false)
    const [isSuccess, setSuccess] = useState(false)

    const createNewWallet = e => {
        e.preventDefault();
        setLoading(true)
        setSuccess(false)
        console.log('Creating Wallet');
        let tempWallets = JSON.parse(localStorage.getItem('wallets')) || []; 
        axios.post(`https://libraservice2.kulap.io/createWallet`)
        .then(res => {
            let tempAddress = res.data.address;
            let data = {
                address : tempAddress,
                alias : aliasName
            }
            tempWallets.push(data);
            localStorage.setItem('wallets', JSON.stringify(tempWallets));
            if(res.status == 200){
                console.log('Create Account Success');
                setSuccess(true)
            }
            setLoading(false)
        })
    }

    return(
        <>
        { loading ? <LoadingData/> : '' }
        { isSuccess ?  <Alert variant="success" onClose={() => setSuccess(false)} dismissible>Create Wallet Success</Alert> : '' }
        <Card>
            <Card.Header bg="primary">Create Wallet</Card.Header>
            <Card.Body>
                <Form onSubmit={createNewWallet}>
                    <Form.Group>
                        <Form.Label>Alias Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => setAliasName(e.target.value)} required minLength={4}/>
                        <Form.Text className="text-muted">Example : Mark</Form.Text>
                    </Form.Group>
                    <Button variant="success" type='submit'>Create</Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}

export default Create