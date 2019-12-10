import React from 'react';
import Column from './Column.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Nav from 'react-bootstrap/Nav';
import About from './About.js'

export default class Board extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            column_soon: this.props.data.soon,
            column_now: this.props.data.now,
            column_later: this.props.data.later,
            showAbout: false,
            add: this.props.add
        }
    }

    add() {

    }

    remove() {
        
    }

    render() {


        return (
            <Container>
            
                <Row>
                    <Col>
                        <Nav
                            activeKey="/home"
                            onSelect={selectedKey => {
                                
                                console.log(selectedKey)
                                if(selectedKey === 'about') {
                                    this.setState( {
                                        showAbout: !this.state.showAbout
                                    })
                                }
                            }}
                            >
                            <Nav.Item>
                                <Nav.Link eventKey="about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="save">Save</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="load">Load</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div>{this.state.showAbout ? <About></About> : ''}</div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Alert variant='info'>
                            <h2>Task List Board</h2>
                        </Alert>
                    </Col>
                </Row>                
            
                <Row>
                    <Col>
                        <Column headline="Soon" data={this.state.column_soon} add={this.state.add}></Column>
                    </Col>
                    <Col>
                        <Column headline="Now" data={this.state.column_now} add={this.state.add}></Column>
                    </Col>
                    <Col>
                        <Column headline="Later" data={this.state.column_later} add={this.state.add}></Column>
                    </Col>
                </Row>           

            </Container>
        )
    }

    
}