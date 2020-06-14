import React, {useState} from 'react'
import { Row, Input, Button, Col } from 'reactstrap'
import { connect } from 'react-redux';
import { addTask } from '../js/Actions/actions';

const AddTask = ({ addTask }) => {
    const [newTask, setNewTask]= useState('');
    return (
        <Row>
            <Col><Input type="text" value={newTask} name="newTask" placeholder="enter a new task"  onChange={(e)=>setNewTask(e.target.value)}></Input></Col>
            <Col><Button onClick= {()=>{addTask(newTask);setNewTask('')}}>+</Button></Col>
        </Row>
         
    );
}

export default connect(null, {addTask}) (AddTask);
