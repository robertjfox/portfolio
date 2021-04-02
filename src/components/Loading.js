import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    transform: "scale(3)",
    "& > * + *": {
      marginLeft: theme.spacing(3),
    },
  },
}));

export const Loading = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    function tick() {
      setProgress((oldProgress) =>
        oldProgress >= 100 ? 100 : oldProgress + 1
      );
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div id="loading">
      <div className={classes.root} id="loading-circle">
        <CircularProgress
          variant="determinate"
          value={progress}
          color={"inherit"}
        />
      </div>
      <h1>RF</h1>
    </div>
  );
};
