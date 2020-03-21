import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {TextField} from "@material-ui/core";
import HelperPage from "./HelperPage";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 2,
    marginTop: '10%'
  },
  button:{
    width: "100%",
    marginTop: '10%'
  }
}));

export default function App() {
  const classes = useStyles();
  var isHelper = 0;

  function handleClick(event: React.MouseEvent<HTMLButtonElement>){
    console.log(isHelper);
    isHelper = 1;
  }

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>

        <Typography variant="h4" component="h1" gutterBottom>
          Du suchst/ benötigst Hilfe?
          Du bist:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs>
            <Button className={classes.button} onClick={handleClick} variant="contained">Helfer</Button>
          </Grid>
          <Grid item xs>
          <Button className={classes.button} variant="contained">Organisation</Button>
          </Grid>
        </Grid>

        {isHelper == 1 ? <HelperPage/> : "hello"}

      </div>
    </Container>
  );
}
