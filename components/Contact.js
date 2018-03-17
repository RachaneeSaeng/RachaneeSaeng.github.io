import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";

const styles = theme => ({
  root: {
    backgroundColor: "#1f1f1f",
    textAlign: "center",
	  paddingTop: "2rem",
	  paddingBottom: "2rem",
  }, 
  contentLine: {
    paddingBottom: "1em",
    color: "#f0f0f0"
  },
  contentLine2: {
    paddingBottom: "1.5em",
    color: "#f0f0f0"
  },
  btnOutLine: {
    border: "2.4px solid #1DDFB1",
    color: "#1DDFB1",
    fontSize: 25,
    width: 40,
    height: 40,
    borderRadius: "100%",
    textAlign: "bottom",
    opacity: 0.7,
    "&:hover": {
      border: "2.4px solid currentColor",
      opacity: 1,
      transition: theme.transitions.create("opacity")
    }
  }
});

class Contact extends React.Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <div  className={classes.root}>
        <Typography variant="headline" align="center" style={{"color": "#fdfdfd"}} >
          Get In Touch
        </Typography>
        <Grid container item xs={12} sm={8} lg={6}>
          <Typography
            variant="subheading"
            align="center"
            className={classes.contentLine}
          >
            E-mail: rachanee.saeng@gmail.com
          </Typography>
          <Typography
            variant="subheading"
            align="center"
            className={classes.contentLine2}
          >
            Tel: +669 3324 4514
          </Typography>
        </Grid>
        <Grid xs={12} sm={8} md={6} item container justify="space-around">
          <IconButton
            className={classes.btnOutLine}
            href="https://th.linkedin.com/in/RachaneeS"
            target="_blank"
          >
            <Icon className={"fab fa-linkedin-in"} />
          </IconButton>
          <IconButton
            className={classes.btnOutLine}
            href="https://medium.com/@plesaengkrajai"
            target="_blank"
          >
            <Icon className={"fab fa-medium-m"} />
          </IconButton>
          <IconButton
            className={classes.btnOutLine}
            href="https://www.facebook.com/zZPLEZz"
            target="_blank"
          >
            <Icon className={"fab fa-facebook-f"} />
          </IconButton>
        </Grid>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Contact);
