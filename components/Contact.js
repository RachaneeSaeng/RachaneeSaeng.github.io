import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    paddingTop: '1.8rem',
    paddingBottom: '1.8rem'
  },
  contentLine: {
    paddingTop: '1.2em',
    margin: 'auto'
  },
  line1: {
    paddingBottom: '1em',
    color: '#e2e2e2'
  },
  line2: {
    paddingBottom: '0.7em',
    color: '#e2e2e2'
  },
  btnOutLine: {
    border: '2.4px solid #1DDFB1',
    color: '#1DDFB1',
    fontSize: '1.5em',
    width: '2em',
    height: '2em',
    borderRadius: '100%',
    textAlign: 'bottom',
    opacity: 0.7,
    '&:hover': {
      border: '2.4px solid currentColor',
      opacity: 1,
      transition: theme.transitions.create('opacity')
    }
  }
});

class Contact extends React.Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Typography
          variant="headline"
          align="center"
          style={{ color: '#e2e2e2' }}
        >
          Get In Touch
        </Typography>
        <Grid item xs={12} sm={8} lg={6} className={classes.contentLine}>
          <Typography
            variant="subheading"
            align="center"
            className={classes.line1}
          >
            E-mail: rachanee.saeng@gmail.com
          </Typography>
          <Typography
            variant="subheading"
            align="center"
            className={classes.line2}
          >
            Tel: +669 3324 4514
          </Typography>
        </Grid>
        <Grid
          xs={10}
          sm={6}
          md={4}
          item
          container
          justify="space-around"
          className={classes.contentLine}
        >
          <IconButton
            className={classes.btnOutLine}
            href="https://th.linkedin.com/in/RachaneeS"
            target="_blank"
          >
            <Icon className={'fab fa-linkedin-in'} />
          </IconButton>
          <IconButton
            className={classes.btnOutLine}
            href="https://medium.com/@plesaengkrajai"
            target="_blank"
          >
            <Icon className={'fab fa-medium-m'} />
          </IconButton>
          <IconButton
            className={classes.btnOutLine}
            href="https://www.facebook.com/RachaneeSaeng"
            target="_blank"
          >
            <Icon className={'fab fa-facebook-f'} />
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
