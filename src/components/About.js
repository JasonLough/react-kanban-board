import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default class About extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {

        return (
            <Alert variant='info'>
                <p>Created with: React (create-react-app), react-bootstrap, github pages</p>
                <p>Jason Lough, 12/2019</p>
                <p>repo here: </p>
                <p>demo here: </p>
                <p>The save feature just saves your cards to local storage. The load feature just loads it from there.</p>
            </Alert>
        )

    }

}