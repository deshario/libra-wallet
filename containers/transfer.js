import React, { useState, useEffect } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import LoadingData from '../components/Loader'

const Transfer = () => {

    const [loading, setLoading] = useState(false)
    const [isSuccess, setSuccess] = useState(false)

    const [from, SetFrom] = useState('')
    const [to, setTo] = useState('')

    const [fromAlias, setFromAlias] = useState('')
    const [toAlias, setToAlias] = useState('')

    const [amount, setAmount] = useState('')

    const [source, setSource] = useState('')
    const [destination, setDestination] = useState('')

    const [items, setItems] = useState([]) // Wallets

    useEffect(() => {
        let tempWallets = JSON.parse(localStorage.getItem('wallets')) || [];
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

    const TransferValidation = e => {
        e.preventDefault();
        from.length > 30 ?  (setSource(from), setFromAlias(searchAlias(from))) : (setSource(searchAddress(from)), setFromAlias(from))
        to.length > 30 ?  (setDestination(to), setToAlias(searchAlias(to))) : (setDestination(searchAddress(to)), setToAlias(to))
        if(source && destination != '' && source && destination != null){
            if(source != destination){
                TransferCoin();
            }else{
                console.log("Source & Destination can't be same")
            }
        }else{
            console.log("Something is going wrong : null or '' ");
        }
    }

    const TransferCoin = () => {
        console.log('Transfering Coins');
        console.log(fromAlias,' transfering ',amount,' coins to ',toAlias);
        console.log(source,' transfering ',amount,' coins to ',destination);
       
        setLoading(true)

        axios
        .post("https://libraservice2.kulap.io/transfer",{
            "fromAddress": source,
            "mnemonic": "lorem ipsum",
            "toAddress": destination,
            "amount": amount
        })
        .then(response => {
            if(response.status == 200){
                console.log('Transfer Success');
                setSuccess(true)
            }
            console.log('response ==> ',response)
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            return null;
        });
    }

    return(
        <>
        { loading ? <LoadingData/> : '' }
        { isSuccess ?  
            <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
                <Alert.Heading>Transfer Coin Success</Alert.Heading>
                <p><code>{fromAlias} => {toAlias} {amount} coins</code></p>
                <p><a>Please check your balance</a></p>
            </Alert>
        : '' }
        <Card>
            <Card.Header>Transfer Coins</Card.Header>
            <Card.Body>
                <Form onSubmit={TransferValidation}>
                    <Form.Group>
                        <Form.Label>From Address</Form.Label>
                        <Form.Control type="text" onChange={(e) => SetFrom(e.target.value)} required minLength={4}/>
                        <Form.Text className="text-muted"><code>Example : a77b7f8997b42212d213b93f7281419dcdfe993a0bf27180ffdb2c3ac8e72534</code></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Destination Address</Form.Label>
                        <Form.Control type="text" onChange={(e) => setTo(e.target.value)} required minLength={4}/>
                        <Form.Text className="text-muted"><code>Example : f4b09c8477cbe3705ac6213ae0af8ec48f8ff0f72285b42fb0ed8f3007e141c5</code></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" onChange={(e) => setAmount(e.target.value)} required/>
                        <Form.Text className="text-muted">Example : 20</Form.Text>
                    </Form.Group>
                    <Button variant="success" type="submit">Transfer</Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}

export default Transfer