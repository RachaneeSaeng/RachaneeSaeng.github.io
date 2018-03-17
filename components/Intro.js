import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

const styles = theme => ({ 
  contentLine: {    
    lineHeight: "2em",
  }
});

class Intro extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="content">
        <Typography className="headerLine">
            Introduction
          </Typography>
        <Grid item xs={12} sm={8} lg={6} className="contentLine">
          <Typography variant="subheading" component="p" align="center" className={classes.contentLine}>
            I'm a dev girl who proficient in C# .Net with more than five years
            experience. I'm enthusiastic, fast learner and untiring. I enjoy
            turning complex requirements into system architecture and develop it
            to be intelligent softwares.
          </Typography>
          <Typography variant="subheading" component="p" align="center" className={classes.contentLine}>
            I'm a dev girl who proficient in C# .Net with more than five years
            experience. I'm enthusiastic, fast learner and untiring. I enjoy
            turning complex requirements into system architecture and develop it
            to be intelligent softwares.
          </Typography>
        </Grid>
      </div>
    );
  }
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Intro);