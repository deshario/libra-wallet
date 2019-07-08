import React from 'react'
import { Card, Button, Form } from 'react-bootstrap';

const Create = () => {
    return(
        <Card>
            <Card.Header>Create Wallet</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Alias Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Text className="text-muted">Example : Mark</Form.Text>
                    </Form.Group>
                    <Button variant="success" type="submit">Create</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Create