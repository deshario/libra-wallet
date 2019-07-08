import React, { useState } from 'react'
import { Row, Col, Card, ListGroup, Button, Form } from 'react-bootstrap';
import Create from '../containers/create.js'
import CheckBalance from '../containers/checkBalance'
import Mint from '../containers/mint'
import Wallets from '../containers/wallets'
import Transfer from '../containers/transfer'

const Index = () => {

    const [activeMenu, setActiveMenu] = useState(0)

    const ManageClick = position => {
        setActiveMenu(position);
    }

    const isActive = current => {
        return activeMenu == current ? true : false
    }

    const RenderComponent = () => {
        switch(activeMenu){
            case 0 :
                return <Wallets/>
            case 1 :
                return <Create/>
            case 2 :
                return <Mint/>
            case 3 : 
                return <CheckBalance/>
            case 4 :
                return <Transfer/>
        }
    }

    return(
        <Row>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item action active={isActive(0)} onClick={() => ManageClick(0)}>Wallets</ListGroup.Item>
                        <ListGroup.Item action active={isActive(1)} onClick={() => ManageClick(1)}>Create Wallet</ListGroup.Item>
                        <ListGroup.Item action active={isActive(2)} onClick={() => ManageClick(2)}>Mint Coint</ListGroup.Item>
                        <ListGroup.Item action active={isActive(3)} onClick={() => ManageClick(3)}>Check Balance</ListGroup.Item>
                        <ListGroup.Item action active={isActive(4)} onClick={() => ManageClick(4)}>Transfer Coins</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col md={9}>
                <RenderComponent/>
            </Col>
        </Row>
    )
}

export default Index