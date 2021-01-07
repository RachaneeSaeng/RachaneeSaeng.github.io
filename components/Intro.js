import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';

const styles = {
  paragraph: {
    lineHeight: '2em',
    textIndent: '2em',
    paddingTop: '1em',
    paddingBottom: '1em'
  },
  quote: {
    fontStyle: 'italic'
  }
};

class Intro extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="content">
        <Typography className="headerLine">Introduction</Typography>
        <Grid item xs={12} sm={8} lg={6} className="contentLine">
          <Typography
            variant="subheading"
            component="p"
            align="center"
            className={classes.paragraph}
          >
            I believe programming is a skill that can change the world, it is
            empowering and fulfilling. I really enjoy turning complex requirements
            into system design and turn it into programming logic, it feels like playing puzzles.
          </Typography>
          <Typography
            variant="subheading"
            component="p"
            align="center"
            className={classes.paragraph}
          >
            I like to learn new things to broaden my mind. Knowing many ideas
            and technologies make me likes a soldier with a full set of weapons
            who can choose the right tool for the right problem.
          </Typography>
          <Typography
            variant="subheading"
            component="p"
            align="center"
            className={classNames(classes.paragraph, classes.quote)}
          >
            “In terms of doing work and in terms of learning and evolving as a person, you just grow more when you get more people’s perspectives…” – Mark Zuckerberg
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
