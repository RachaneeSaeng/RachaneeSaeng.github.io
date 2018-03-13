import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Banner from "./Banner";
import Intro from "./Intro";
import Skill from "./Skill";
import Experience from "./Experience";
import Port from "./Port";
import Contact from "./Contact";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minWidth: 0, // So the Typography noWrap works//
    width: "100%"
  }
});

class Content extends React.Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <section id="banner">
          <Banner />
        </section>
        <section id="intro">
          <Intro />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="exp">
          <Experience />
        </section>
        <section id="port">
          <Port />
        </section>
        <footer id="contact">
          <Contact />
        </footer>
      </div>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Content);
