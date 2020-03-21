import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    name:{
        width: "100",
        marginTop: '10%'
    },
    submit:{
        width: "20%",
        marginTop: '10.%'
    }
}));


export default function HelperPage() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <form className={classes.name} noValidate autoComplete="off">
                <Grid item xs>
                    <TextField id="standard-basic" label="Vorname" />
                </Grid>
                <Grid item xs>
                    <TextField id="standard-basic" label="Nachname" />
                </Grid>
                <Grid item xs>
                    <Button className={classes.submit} variant="contained">Submit</Button>
                </Grid>
            </form>
        </Grid>
    );
}