import React from "react";
import Card from "../Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    margin: '80px'
  },
}));

function ProductList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        wrap="wrap"
        justify="center"
        alignItems="space-between"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

export default ProductList;
