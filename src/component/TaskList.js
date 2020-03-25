import React from 'react'
import TaskItem from './TaskItem'
import { connect } from 'react-redux';

import {
    withRouter
  } from "react-router-dom";
 function TaskList(props) {


    return (
        <div>
            
            {
                props.tasks.map((task,index) => {
                    return <TaskItem key={index} data={task} index={index} />
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
      tasks: state
    };
  };

export default connect(mapStateToProps)(withRouter(TaskList))