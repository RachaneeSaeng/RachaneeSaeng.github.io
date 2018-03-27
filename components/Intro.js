import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

const styles = { 
  paragraph: {    
    lineHeight: "2em",
    textIndent: "2em",
    paddingTop: "1em",
    paddingTop: "1em",
  }
};

class Intro extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="content">
        <Typography className="headerLine">
            Introduction
          </Typography>
        <Grid item xs={12} sm={8} lg={6} className="contentLine">
          <Typography variant="subheading" component="p" align="left" className={classes.paragraph}>
            I believe that coding is a skill which can change the world, it is empowering and fulfilling. 
            The thing I love about coding is that it combines creativity and logic, 
            I really enjoy turning complex requirements into system design and turn it into programming logic. 
          </Typography>         
          <Typography variant="subheading" component="p" align="left" className={classes.paragraph}>
            I like to learn new things to broaden my mind. Knowing many ideas and technologies make me likes 
            a soldier with a full set of weapons who can choose the right tool for the right problem.
             There are many methodologies and technologies I want to build up my skill right now 
             i.e. Machine Learning, Blockchain, Functional Programming and Golang.
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
