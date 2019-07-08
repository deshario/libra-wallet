import React from 'react'
import { Card, Button, Form } from 'react-bootstrap';

const Transfer = () => {
    return(
        <Card>
            <Card.Header>Transfer Coins</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>From Address</Form.Label>
                        <Form.Control type="text"/>
                        <Form.Text className="text-muted">Example : a77b7f8997b42212d213b93f7281419dcdfe993a0bf27180ffdb2c3ac8e72534</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Destination Address</Form.Label>
                        <Form.Control type="text"/>
                        <Form.Text className="text-muted">Example : f4b09c8477cbe3705ac6213ae0af8ec48f8ff0f72285b42fb0ed8f3007e141c5</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number"/>
                        <Form.Text className="text-muted">Example : 20</Form.Text>
                    </Form.Group>
                    <Button variant="success" type="submit">Transfer</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Transfer