import React from 'react'
import { Card, Button, Form } from 'react-bootstrap';

const Mint = () => {
    return(
        <Card>
            <Card.Header>Mint Coins</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Wallet Address</Form.Label>
                        <Form.Control type="text"/>
                        <Form.Text className="text-muted">Example : a77b7f8997b42212d213b93f7281419dcdfe993a0bf27180ffdb2c3ac8e72534</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Requried Coin</Form.Label>
                        <Form.Control type="number"/>
                        <Form.Text className="text-muted">Example : 20</Form.Text>
                    </Form.Group>
                    <Button variant="success" type="submit">Mint</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Mint