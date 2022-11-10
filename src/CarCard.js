import "./App.css";
import React from "react";
import { Typography, Paper, Box } from "@material-ui/core";

import useStyles from "./styles";

const CarCard = ({ id, bodyType, modelName, modelType, imageUrl }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.carTile}>
      <Typography className={classes.model}>{bodyType}</Typography>
      <Box className={classes.titleContainer}>
        <Typography variant="h5" className={classes.title}>
          {modelName}
        </Typography>
        <span style={{ color: "#555" }}>{modelType}</span>
      </Box>
      <img className={classes.carImg} src={imageUrl} alt={bodyType} />
      <Box className={classes.linkContainer}>
        <a href={`/learn/${id}`} className={classes.carLink}>
          Learn{" "}
          <img
            className={classes.chev}
            src={"/images/chevron-small.svg"}
            alt={"chevron"}
          />
        </a>
        <a href={`/shop/${id}`} className={classes.carLink}>
          Shop{" "}
          <img
            className={classes.chev}
            src={"/images/chevron-small.svg"}
            alt={"chevron"}
          />
        </a>
      </Box>
    </Paper>
  );
};

export default CarCard;
