import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import Hidden from "material-ui/Hidden";
import MenuIcon from "material-ui-icons/Menu";
import Button from "material-ui/Button";
import AccountCircleIcon from "material-ui-icons/AccountCircle";
import WorkIcon from "material-ui-icons/Work";
import StarIcon from "material-ui-icons/Star";
import MessageIcon from "material-ui-icons/Message";
import ArchiveIcon from "material-ui-icons/Archive";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: "fixed"
  },
  flexTitle: {
    flex: 1,
    justifyContent: "space-between"
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  toolbar: theme.mixins.toolbar
});

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      mobileOpen: false
    };
  }

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

  onDrawerToggle  ()  {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  onClickNav (e) {
    e.preventDefault();

    var targetId = e.target.getAttribute("href");

    if (!targetId) {
      targetId = this.findParentWithAttr(e.target, "href");
    }

    if (targetId) {
      var target = document.getElementById(targetId.substr(1));
      var toPosition = this.getElementOffset(target).top;
      toPosition -= 70; // app bar offset
      this.scrollTo(
        document.scrollingElement || document.documentElement,
        toPosition,
        400,
        true
      );
    }
    // close side nave
    this.setState({ mobileOpen: false });
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <AppBar color="default" className={classes.appBar}>
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                color="primary"
                aria-label="open drawer"
                onClick={this.onDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flexTitle}
              noWrap
            >
              Rachanee Saengkrajai
            </Typography>
            <Hidden mdDown>
              <Button color="primary" href="#intro" onClick={this.onClickNav}>
                Introduction
              </Button>
              <Button color="primary" href="#exp" onClick={this.onClickNav}>
                Experience
              </Button>
              <Button color="primary" href="#skill" onClick={this.onClickNav}>
                Skills
              </Button>
              <Button color="primary" href="#port" onClick={this.onClickNav}>
                Portfolio
              </Button>
              <Button color="primary" href="#contact" onClick={this.onClickNav}>
                Contact
              </Button>
            </Hidden>
          </Toolbar>
        </AppBar>

        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            onClose={this.onDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile
            }}
          >
            <div className={classes.toolbar}></div>
            <Divider />
            <List component="nav">
              <ListItem button href="#intro" onClick={this.onClickNav}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Introduction" />
              </ListItem>
              <ListItem button href="#exp" onClick={this.onClickNav}>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Experience" />
              </ListItem>
              <ListItem button href="#skill" onClick={this.onClickNav}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Skills" />
              </ListItem>
              <ListItem button href="#port" onClick={this.onClickNav}>
                <ListItemIcon>
                  <ArchiveIcon />
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
              </ListItem>
              <ListItem button href="#contact" onClick={this.onClickNav}>
                <ListItemIcon>
                  <MessageIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);
