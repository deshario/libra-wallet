import React from 'react'
import { Card, Button, Form } from 'react-bootstrap';

const CheckBalance = () => {
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
                    <Button variant="success" type="submit">Check</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CheckBalance