import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import ButtonBase from "material-ui/ButtonBase";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

const styles = theme => ({
  root: {
    position: "relative",
    minHeight: 350,
    height: "100vh",
    backgroundImage: "url(images/banner_bg.jpeg)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "&:hover": {
      zIndex: 1
    },
    "&:hover $backdrop": {
      zIndex: 2,
      opacity: 0.2
    },   
    "&:hover $myName": {
      opacity: 1,
      zIndex: 3
    },
    "&:hover $myDesc": {
      opacity: 1,
      zIndex: 3
    }
  },
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },  
  myName: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px`,
    color: theme.palette.common.white,
    transition: theme.transitions.create("border"),
    "&:hover": {
      opacity: 1,
      zIndex: 3,
      border: "4px solid currentColor"
    },
    "&:hover $nameMarked": {
      opacity: 0
    }
  },
  nameMarked: {
    height: 3,
    width: 200,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 100px)',
    transition: theme.transitions.create('opacity'),
  },
  myDesc: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px`,
    color: theme.palette.common.white
  }
});

class Banner extends React.Component {
  
  getElementOffset(element) {
    let top = 0,
      left = 0;
    // Loop through the DOM tree
    // and add it's parent's offset to get page offset
    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);

    return { top, left };
  }

  scrollTo(parentElm, to, time, prop) {
    if (!parentElm) {
      return;
    }
    var from = window.scrollY;
    var start = new Date().getTime();

    var timer = setInterval(function() {
      var step = Math.min(1, (new Date().getTime() - start) / time);

      if (prop) {
        parentElm["scrollTop"] = from + step * (to - from);
      } else {
        parentElm.style["scrollTop"] = from + step * (to - from);
      }
      if (step === 1) {
        clearInterval(timer);
      }
    }, 25);

    if (prop) {
      parentElm["scrollTop"] = from;
    } else {
      parentElm.style["scrollTop"] = from;
    }
  }

  findParentWithAttr(el, attr) {
    while (el.parentNode) {
      el = el.parentNode;
      if (el.getAttribute(attr)) {
        return el.getAttribute(attr);
      }
    }
    return null;
  }

  onClickNav(e) {
    e.preventDefault();

    var targetId = e.target.getAttribute("href");

    if (!targetId) {
      targetId = this.findParentWithAttr(e.target, "href");
    }

    if (targetId) {
      var target = document.getElementById(targetId.substr(1));
      var toPosition = this.getElementOffset(target).top;
      this.scrollTo(
        document.scrollingElement || document.documentElement,
        toPosition,
        400,
        true
      );
    }
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.backdrop} />
        <Grid className={classes.content}>
          
        <ButtonBase focusRipple href="#intro" onClick={this.onClickNav.bind(this)}>
            <Typography
              component="span"
              variant="display2"
              align="center"
              className={classes.myName}
            >
              Rachanee Saengkrajai
              <span className={classes.nameMarked} />
            </Typography>
          </ButtonBase>

          <Typography
            variant="headline"
            align="center"
            className={classes.myDesc}
          >
            A Lifelong learning developer<br />
            who is skilled, enthusiastic and innovative.
          </Typography>
        </Grid>
      </div>
    );
  }
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Banner);
