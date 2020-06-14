import React, {useState} from "react";
import PropTypes from "prop-types";
import { Row, Col, Button, Input } from "reactstrap";
import {useDispatch} from 'react-redux';
import { deleteTask , toggleTask, editTask} from "../js/Actions/actions";

const Task = ({ task }) => {
  const [updatedTask, setUpdatedTask] = useState(task.desc)
  const dispatch = useDispatch();
  return (
    <Row>
      <Col>
      { task.isEdited ? 
        ( <Input type="text" defaultValue={task.desc}  onChange={(e)=>setUpdatedTask(e.target.value)}/>) :
        (<span>{task.desc}</span>)
      }
        
      </Col>
      <Col>
        <Button color="info" 
        onClick={()=>{
          if(!task.isEdited )
          dispatch(toggleTask(task.id))
          else { 
            dispatch(
            editTask({ ...task, desc: updatedTask, isEdited: false })
          )};
        }}>
        { task.isEdited ? 'save': 'edit'}
        </Button>
        <Button color="danger" onClick={()=>{dispatch(deleteTask(task.id))}}>Delete</Button>
      </Col>
    </Row>
  );
};

/*Task.propTypes = {
    task:PropTypes.object
};*/

export default Task;
