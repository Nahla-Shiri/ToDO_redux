import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';

function App() {
  return (
    <Container>
      <TaskList />
      <AddTask/>
    </Container>
  );
}

export default App;
