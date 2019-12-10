import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class CardWrapper extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    add() {

    }

    remove() {
        
    }

    render() {

        let tasks = this.state.data.map( (e,i) => {
            return (
                <div key={i}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{e.title}</Card.Title>
                            <Card.Text>{e.task}</Card.Text>
                            <Button variant="primary">Edit</Button>
                            <Button variant="danger">Remove</Button>                            
                        </Card.Body>
                    </Card>
                </div>
            )
        });

        return <div>{tasks}</div>;

    }

}