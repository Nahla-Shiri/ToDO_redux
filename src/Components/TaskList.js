import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';


const TaskList = ({taskList}) => {
    return (
        <>
            <h1>Task list with redux</h1>
            {
                taskList.map( (task,key) => (
                    <Task task={task} key={key} />
                )

            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    taskList: state.taskReducer.tasks
})

export default connect (mapStateToProps) (TaskList)
