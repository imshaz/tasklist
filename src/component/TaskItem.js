import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import moment from 'moment'

import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));


function TaskItem(props) {
  const { url, title, description, time, completed } = props.data;

  function handleChange() {
    props.handleUpdate({data: props.data, index:props.index, time: moment().format('h:mm')})
}
  const classes = useStyles();
  return (
    <div id="container" className={classes.root}>
      <div>
        <Avatar alt="task" src={url} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <p>{!completed ? <input type="checkbox" onChange={()=>{handleChange()}} /> : <div>{time}</div>}</p>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
    return {
      handleUpdate: (payload) => dispatch({ type: 'UPDATE', payload:payload}),
    }
  };


export default connect(null, mapDispatchToProps)(TaskItem)