import React, { useState, useEffect } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import LoadingData from '../components/Loader'

const Mint = () => {

    const [loading, setLoading] = useState(false)
    const [isSuccess, setSuccess] = useState(false)

    const [items, setItems] = useState([])
    const [alias, setAlias] = useState('') // Alias Or Address

    const [amount, setAmount] = useState('') // Alias Or Address
    const [MintAddress, setMintAddress] = useState('')


    useEffect(() => {
        let tempWallets = JSON.parse(localStorage.getItem('wallets')) || [];
        setItems(tempWallets)
    },[])

    const searchAddress = aliasName => {
        let obj = items.find(searching => searching.alias === aliasName);
        return obj && obj.address || null;
    }

    const MintValidation = e => {
        e.preventDefault();
        if(alias.length > 30){ // Address
            setMintAddress(alias)
        }else{ // Alias
            setMintAddress(searchAddress(alias))
        }
        MintAddress != '' ? MintCoin() : ''
    }

    const MintCoin = () => {
        console.log('Minting Coins ==> ',MintAddress);
        setLoading(true)
        axios
        .post("https://libraservice2.kulap.io/mint",{"address": MintAddress, "amount":amount})
        .then(response => {
            console.log('response => ',response)
            if(response.status == 200 && response.data.amount > 0){
                console.log('Mint Success');
                setSuccess(true)
            }
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
            alert('Mint Fail')
            return null;
        });
    }

    return(
        <>
        { loading ? <LoadingData/> : '' }
        { isSuccess ?  <Alert variant="success" onClose={() => setSuccess(false)} dismissible>Mint Coin Success</Alert> : '' }
        <Card>
            <Card.Header>Mint Coin</Card.Header>
            <Card.Body>
                <Form onSubmit={MintValidation}>
                    <Form.Group>
                        <Form.Label>Wallet Address</Form.Label>
                        <Form.Control type="text" onChange={(e) => setAlias(e.target.value)} required minLength={4}/>
                        <Form.Text className="text-muted"><code>Example : a77b7f8997b42212d213b93f7281419dcdfe993a0bf27180ffdb2c3ac8e72534</code></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Requried Coin</Form.Label>
                        <Form.Control type="number" onChange={(e) => setAmount(e.target.value)} required minLength={4}/>
                        <Form.Text className="text-muted">Example : 20</Form.Text>
                    </Form.Group>
                    <Button variant="success" type="submit">Mint</Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}

export default Mint