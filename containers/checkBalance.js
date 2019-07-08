import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const CheckBalance = () => {

    const [aliasName, setAliasName] = useState('')
    
    const QueryBalance = async () => {
        // let res = await fetch('https://api.spacexdata.com/v3/missions/F3364BF');


       

        // let res = await fetch('https://libraservice2.kulap.io/createWallet');
        // let countries = await res.json();
        // console.log(countries)

        // axios.post(`https://libraservice2.kulap.io/getBalance`, { 
        //     "address": "f4b09c8477cbe3705ac6213ae0af8ec48f8ff0f72285b42fb0ed8f3007e141c5"
        //  })
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // })

        

        // const items = {
        //     address : 'asjkdhasjkdhjkashdjkashdjkashdjkashdjkashdjk',
        //     alias : 'Mark'
        // }


    }

    return(
        <Card>
            <Card.Header>Check Balance</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Wallet Address</Form.Label>
                        <Form.Control type="text"/>
                        <Form.Text className="text-muted">Example : a77b7f8997b42212d213b93f7281419dcdfe993a0bf27180ffdb2c3ac8e72534</Form.Text>
                    </Form.Group>
                    <Button variant="success" onClick={() => QueryBalance()}>Check</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CheckBalance