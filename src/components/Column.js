import React from 'react';
import CardWrapper from './CardWrapper.js';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default class Column extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            headline: this.props.headline,
            add: this.props.add
        }
    }

    add() {
        console.log(1)
        this.state.add()
    }

    remove() {

    }

    render() {
        return (
            <div>
                <Alert variant='info'><h3>{this.state.headline}</h3></Alert>
                <Button onClick={this.add.bind(this)} variant="success" style={{width:"100%"}}>New</Button>
                <CardWrapper data={this.state.data}></CardWrapper>
            </div>
            
        )
    }

}