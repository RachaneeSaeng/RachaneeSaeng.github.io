import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

const styles = theme => ({
  root: {
    position: "relative",
    minHeight: 350,
    backgroundImage:
      "url(https://images.pexels.com/photos/248515/pexels-photo-248515.png?w=940&h=650&auto=compress&cs=tinysrgb)",
    backgroundAttachment: "fixed",
    backgroundPosition: "65% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"   
  },
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },  
  majorContent: {
    color: "#ffffff"
  },
  minorContent: {
    color: "#fdfdfd"
  }
});

class Experience extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classNames("content", classes.root)}>      
       
        <Typography style={{"color": "#ffffff"}} className="headerLine">
              Experience
         </Typography>
          <Grid item xs={12} sm={8} lg={6} className="contentLine">
            <div align="left">
              <Typography variant="headline" className={classes.majorContent}>
                Agoda.com
              </Typography>
              <Typography variant="subheading" className={classes.majorContent}>
                IT Finance Development: <em>April 2016 - Present</em>
              </Typography>
              <Typography variant="subheading" className={classes.minorContent}>
                <ul>
                  <li>
                    Develop and enhance applications to work on financial
                    payment and reconciliation systems. These systems are the
                    backbone of our company, ensuring that hotels get paid on
                    time for each customer bookings.
                  </li>
                  <li>
                    The applications are developed by various C# .Net
                    technologies i.e. Windows service, WPF, WCF, MVC and Web API
                    service.
                  </li>
                  <li>
                    We use many cutting edge technologies and tools in
                    development process e.g. Git, TeamCity, Puppet, cSpider and
                    Jira etc.
                  </li>
                </ul>
              </Typography>
            </div>
            <div align="left">
              <Typography variant="headline" className={classes.majorContent}>
                Seagate Technology
              </Typography>
              <Typography variant="subheading" className={classes.majorContent}>
                IT Factory Information Service: <em>May 2011 - March 2016</em>
              </Typography>
              <Typography variant="subheading" className={classes.minorContent}>
                <ul>
                  <li>
                    Captured user requirements and analyze business conditions
                    in order to design architecture and programming logic.
                  </li>
                  <li>
                    Developed, integrated, tested and implemented related
                    application components including front-end, back-end and
                    database.
                  </li>
                  <li>
                    Provided system documents including system requirement,
                    design, test plan and user guide.
                  </li>
                </ul>
              </Typography>
            </div>
          </Grid>
        </div>
    );
  }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Experience);
