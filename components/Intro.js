import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

const styles = theme => ({
  root: {
    paddingTop: `${theme.spacing.unit * 10}px`,
    paddingBottom: `${theme.spacing.unit * 8}px`
  },
  headLine:{
    paddingBottom: `${theme.spacing.unit * 4}px`
  },
  contentLine: {
    paddingTop: `${theme.spacing.unit}px`,
    paddingBottom: `${theme.spacing.unit}px`,
    lineHeight: "2em",
  }
});

class Intro extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        className={classes.root}
        direction="column"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="display1" align="center" className={classes.headLine}>
            Introduction
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={8} lg={6}>
          <Typography variant="subheading" component="p" align="center" className={classes.contentLine}>
            I'm a dev girl who proficient in C# .Net with more than five years
            experience. I'm enthusiastic, fast learner and untiring. I enjoy
            turning complex requirements into system architecture and develop it
            to be intelligent softwares.
          </Typography>
          <Typography variant="subheading" align="center" className={classes.contentLine}>
            I'm a dev girl who proficient in C# .Net with more than five years
            experience. I'm enthusiastic, fast learner and untiring. I enjoy
            turning complex requirements into system architecture and develop it
            to be intelligent softwares.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Intro);
