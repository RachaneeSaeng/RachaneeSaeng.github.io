import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    position: 'relative',
    minHeight: 350,
    backgroundImage: 'url(images/exp_bg.jpeg)',
    backgroundAttachment: 'fixed',
    backgroundPosition: '65% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  majorContent: {
    position: 'relative',
    color: '#e2e2e2',
    zIndex: 3
  },
  minorContent: {
    position: 'relative',
    color: '#e2e2e2',
    zIndex: 3,
    lineHeight: '1.5em'
  },
  content: {
    textAlign: 'left'
  }
});

class Experience extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classNames('content', classes.root)}>
        <div className={classes.backdrop} />
        <Typography
          style={{ color: '#e2e2e2' }}
          className={classNames('headerLine', classes.majorContent)}
        >
          Experience
        </Typography>
        <Grid item xs={12} sm={8} lg={6} className="contentLine">
          <div className={classes.content}>
            <Typography variant="headline" className={classes.majorContent}>
              Stealth Mode Startup
            </Typography>
            <Typography variant="subheading" className={classes.majorContent}>
              Co-Founder and Information Technologies:{' '}
              <em>July 2018 - September 2018</em>
            </Typography>
            <Typography variant="subheading" className={classes.minorContent}>
              <ul>
                <li>Researched markets and competitors.</li>
                <li>
                  Designed products and considered suitable technologies e.g.
                  AWS, Ionic, NodeJs, GraphQL, and PostgreSQL.
                </li>
                <li>
                  Developed products, then demonstrated and assisted pilot
                  customers to try them.{' '}
                </li>
                <li>Was a project manager.</li>
              </ul>
            </Typography>
          </div>
          <div className={classes.content}>
            <Typography variant="headline" className={classes.majorContent}>
              Agoda.com
            </Typography>
            <Typography variant="subheading" className={classes.majorContent}>
              IT Finance Development: <em>April 2016 - June 2018</em>
            </Typography>
            <Typography variant="subheading" className={classes.minorContent}>
              <ul>
                <li>
                  Developed and enhanced applications to work on financial
                  payment and reconciliation systems. These systems are the
                  backbone of our company, ensuring that hotels get paid on time
                  for each customer bookings.
                </li>
                <li>
                  The applications are developed by various technologies e.g.
                  React, RabbitMQ, Hangfire, .Net Core, WCF, and Windows
                  service.
                </li>
                <li>
                  We used many cutting-edge technologies and tools in
                  development process e.g. Git, TeamCity, Puppet, Jira, Grafana,
                  and Kibana.
                </li>
                <li>
                  Was a scrum master who communicated with team members to
                  ensure that all the roadblocks are cleared in order to
                  complete the sprint as planned.
                </li>
              </ul>
            </Typography>
          </div>
          <div className={classes.content}>
            <Typography variant="headline" className={classes.majorContent}>
              Seagate Technology
            </Typography>
            <Typography variant="subheading" className={classes.majorContent}>
              IT Factory Information Service: <em>May 2011 - March 2016</em>
            </Typography>
            <Typography variant="subheading" className={classes.minorContent}>
              <ul>
                <li>
                  Captured user requirements and analyzed business conditions to
                  design architecture and programming logic.
                </li>
                <li>
                  Developed, integrated, tested and implemented related
                  application components including front-end, back-end, and
                  database.
                </li>
                <li>
                  The applications are developed by various technologies e.g. C#
                  .Net, Salesforce.com, PL/SQL script, Ruby on Rails etc.
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
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Experience);
