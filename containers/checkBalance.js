import React, { useState, useEffect } from 'react'
import { Card, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import LoadingData from '../components/Loader'

const CheckBalance = () => {

    const [loading, setLoading] = useState(false)

    const [isModalShow, setModalShow] = useState(false)

    const [items, setItems] = useState([])
    const [alias, setAlias] = useState('') // Alias Or Address

    const [QueryAddress, setQueryAddress] = useState('')
    const [QueryBalance, setQueryBalance] = useState('')

    useEffect(() => {
        let tempWallets = JSON.parse(localStorage.getItem('wallets')) || [];
        console.log(tempWallets)
        setItems(tempWallets)
    },[])

    const searchAddress = aliasName => {
        let obj = items.find(searching => searching.alias === aliasName);
        return obj && obj.address || null;
    }

    const searchAlias = address => {
        let obj = items.find(searching => searching.address === address);
        return obj && obj.alias || null;
    }
    
    const CheckBalance = e => {
        e.preventDefault();
        setQueryAddress('')
        if(alias.length > 30){ // Address
            setQueryAddress(alias)
            setAlias(searchAlias(alias))
        }else{ // Alias
            setQueryAddress(searchAddress(alias))
        }
        QueryAddress != '' ? QueryBalanceFromServer() : ''
    }

    const QueryBalanceFromServer = () => {
        console.log('Querying From ==> ',QueryAddress);
        setLoading(true)
        axios
        .post("https://libraservice2.kulap.io/getBalance",{"address": QueryAddress})
        .then(response => {
            console.log('Add => ',response.data.address);
            console.log('Balance => ',response.data.balance);
            setQueryBalance(response.data.balance)
            if(response.status == 200){
                console.log('Query Success');
                setModalShow(true) 
            }
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            return null;
        });
    }

    const ShowBalance = () => {
        return (
            <Modal show={isModalShow} onHide={() => setModalShow(false)} centered
                    style={{backgroundColor:'#a4508b', backgroundImage:'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)'}}>
                <Modal.Header closeButton>
                    <Modal.Title>{alias} Balance</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <h4>Address : <code>{QueryAddress}</code></h4>
                        <h4>Balance : {QueryBalance}</h4>
                </Modal.Body>
            </Modal>
        )
    }

    return(
        <>
        { loading ? <LoadingData/> : '' }
        <Card>
            <Card.Header>Check Balance</Card.Header>
            <Card.Body>
                <Form onSubmit={CheckBalance}>
                    <Form.Group>
                        <Form.Label>Wallet Address</Form.Label>
                        <Form.Control type="text" onChange={(e) => setAlias(e.target.value)} required minLength={4}/>
                        <Form.Text className="text-muted"><code>Example : a77b7f8997b42212d213b93f7281419dcdfe993a0bf27180ffdb2c3ac8e72534</code></Form.Text>
                    </Form.Group>
                    <Button variant="success" type="submit">Check</Button>
                </Form>
            </Card.Body>
        </Card>
        <ShowBalance/>
        </>
    )
}

export default CheckBalance