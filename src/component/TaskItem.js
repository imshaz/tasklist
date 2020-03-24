import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default function TaskItem(props) {
  const { url, title, description, time } = props.data;
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
        <p>{time ? <input type="checkbox" /> : <div>dasdas</div>}</p>
      </div>
    </div>
  );
}
