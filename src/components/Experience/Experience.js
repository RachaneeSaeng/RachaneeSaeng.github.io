import './Experience.scss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Experience() {
  return (
    <div className="experience content">
      <div className="backdrop" />
      <Typography variant="h5" className="major-content">
        Experience
      </Typography>
      <Grid item xs={12} sm={8} lg={6} className="contentLine">
        <div className="left">
          <Typography variant="h6" className="major-content">
            Stealth Mode Startup
          </Typography>
          <Typography variant="subtitle1" className="major-content">
            Co-Founder and Information Technologies:{' '}
            <em>July 2018 - September 2018</em>
          </Typography>
          <Typography variant="subtitle1" className="major-content">
            <ul>
              <li>Researched markets and competitors.</li>
              <li>
                Designed products and considered suitable technologies e.g. AWS,
                Ionic, NodeJs, GraphQL, and PostgreSQL.
              </li>
              <li>
                Developed products, then demonstrated and assisted pilot
                customers to try them.{' '}
              </li>
              <li>Was a project manager.</li>
            </ul>
          </Typography>
        </div>
        <div className="left">
          <Typography variant="h5" className="major-content">
            Agoda.com
          </Typography>
          <Typography variant="subtitle1" className="major-content">
            IT Finance Development: <em>April 2016 - June 2018</em>
          </Typography>
          <Typography variant="subtitle1" className="minor-content">
            <ul>
              <li>
                Developed and enhanced applications to work on financial payment
                and reconciliation systems. These systems are the backbone of
                our company, ensuring that hotels get paid on time for each
                customer bookings.
              </li>
              <li>
                The applications are developed by various technologies e.g.
                React, RabbitMQ, Hangfire, .Net Core, WCF, and Windows service.
              </li>
              <li>
                We used many cutting-edge technologies and tools in development
                process e.g. Git, TeamCity, Puppet, Jira, Grafana, and Kibana.
              </li>
              <li>
                Was a scrum master who communicated with team members to ensure
                that all the roadblocks are cleared in order to complete the
                sprint as planned.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="left">
          <Typography variant="h5" className="major-content">
            Seagate Technology
          </Typography>
          <Typography variant="subtitle1" className="major-content">
            IT Factory Information Service: <em>May 2011 - March 2016</em>
          </Typography>
          <Typography variant="subtitle1" className="minor-content">
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
                Provided system documents including system requirement, design,
                test plan and user guide.
              </li>
            </ul>
          </Typography>
        </div>
      </Grid>
    </div>
  );
}

export default Experience;
