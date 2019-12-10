import React from 'react';
import './App.css';
import Board from './components/Board.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }

  add(event, column, task, title) {
    // this.setState({
    //   //data['column']: [...data.column, {task: task, title:title }]
    // })
    this.state.data[column] = [...data.column, {task: task, title:title }]
    console.log(event)
  }

  remove(column, task, title) {

  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Board data={this.state.data} add={this.add.bind(this)}></Board>
          </Col>
        </Row>
      </Container>
    );
  }


}



const data = {
  soon : [
    {task: 'empty cupboards and throw away old food', title: 'clean kitchen'},
    {task: 'bananas, apples, plums', title: 'grocery shopping'},
    {task: 'just empty the roomba', title: 'empty roomba'},
  ],

  now : [
    {task: '4:45 after ninja training', title: 'pick up Tori'},
    {task: 'learn all about webpack code splitting', title: 'study'},
  ],

  later : [
    {task: 'leg day! squats, deadlift, jumprope, run', title: 'workout'},
    {task: 'before sunset', title: 'walk dogs'},
    {task: 'sphagetty and salad', title: 'cook dinner'},
  ]
}

export default App;
