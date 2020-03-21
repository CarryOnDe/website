import * as React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HelperPage from "./HelperPage";


const styles = () => ({
  root: {
    flexGrow: 1,
    padding: 2,
    marginTop: '10%'
  },
  button:{
    width: "100%",
    marginTop: '10%'
  }
});

interface IAppProps{
classes:any
}
interface IAppState{
  isShown: Boolean

}

class App extends React.Component <IAppProps, IAppState>{
  constructor(props: IAppProps) {
    super(props);
    this.state = {isShown: false};
  }
  componentDidMount() {
      this.setState({
        isShown: false
      });
    };
 render(){
  const { classes } = this.props;
  return (
    <Container maxWidth="sm">
      <div className={classes.root}>

        <Typography variant="h4" component="h1" gutterBottom>
          Du suchst/ benötigst Hilfe?
          Du bist:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs>
            <Button onClick={() => this.setState({ isShown : true})} variant="contained">Helfer</Button>
          </Grid>
          <Grid item xs>
          <Button variant="contained">Organisation</Button>
          </Grid>
        </Grid>

        {this.state.isShown === true ? <HelperPage/> : "hello"}

      </div>
    </Container>
  );
}
}
export default withStyles(styles)(App);