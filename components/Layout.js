import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Header from "./Header";
import Body from "./Body";

const styles = {
  root: {
    flexGrow: 1,
    widht: "100%",
    minHeigth: 700,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  }
};

class Layout extends React.Component {
  render() {
    const { classes } = this.props;

    //<Header />
    return (
      <div className={classes.root}>
        <Body />
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
