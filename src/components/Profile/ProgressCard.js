import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: "#e03d6b",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 25,
    color: "white",
  },
  prec: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  displaydiv: {
    backgroundColor: "grey",
    borderRadius: 20,
    height: "40px",
    width: "220px",
    display: "flex",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "start",
  },
  icondiv: {
    backgroundColor: "purple",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
  completed: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
}));
export default function ProgressCard(props) {
  const classes = useStyles();
  const { profile } = props;

  let prog;
  var stringth;
  if (profile.panno !== "" && profile.WorkPhone !== "") {
    stringth = "Strong";
    prog = <span className={classes.completed}>100% Completed</span>;
  } else if (profile.WorkPhone !== "" && profile.panno === "") {
    stringth = "Intermediate";
    prog = <span className={classes.completed}>50% Completed</span>;
  } else if (profile.WorkPhone === "" && profile.panno !== "") {
    stringth = "Intermediate";
    prog = <span className={classes.completed}>50% Completed</span>;
  } else {
    stringth = "Weak";
    prog = <span className={classes.completed}>25% Completed</span>;
  }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.title}>Profile Strength: {stringth}</div>
        <div className={classes.prec}>
          <div className={classes.displaydiv}>
            <div className={classes.icondiv}>
              <DoneRoundedIcon style={{ color: "white" }} />
            </div>
            {prog}
          </div>
        </div>
      </Paper>
    </div>
  );
}
