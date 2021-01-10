import './Experience.scss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Experience() {
  return (
    <div className="experience content">
      <div className="backdrop" />
      <Typography className="headerLine majorContent">Experience</Typography>
      <Grid item xs={12} sm={8} lg={6} className="contentLine">
        <div className="left">
          <Typography variant="h6" className="majorContent">
            MyWorkpapers
          </Typography>
          <Typography variant="subtitle1" className="majorContent">
            Lead Software Engineer: <em>Jan 2019 - present</em>
          </Typography>
          <Typography variant="subtitle1" className="majorContent">
            <ul>
              <li>
                Lead a team of five developers to develop a new accounting-firm
                assistant system as a replacement of the current system
                developed by PHP.
              </li>
              <li>
                Research tools/technologies and design system architecture.
                Currently we are using C# .Net Core, Angular, Redis, Docker,
                Kubernetes, Service Bus and many more Azure services.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="left">
          <Typography variant="h6" className="majorContent">
            Stealth Mode Startup
          </Typography>
          <Typography variant="subtitle1" className="majorContent">
            Lead Software Engineer: <em>June 2018 - September 2018</em>
          </Typography>
          <Typography variant="subtitle1" className="majorContent">
            <ul>
              <li>
                Researched micro-finance markets in the Northeast of Thailand.
              </li>
              <li>
                Designed products and considered suitable technologies e.g. AWS,
                Ionic, NodeJs, GraphQL, and PostgreSQL.
              </li>
              <li>
                Developed products, then demonstrated and assisted pilot
                customers to try them.{' '}
              </li>
            </ul>
          </Typography>
        </div>
        <div className="left">
          <Typography variant="h5" className="majorContent">
            Agoda
          </Typography>
          <Typography variant="subtitle1" className="majorContent">
            Senior Software Engineer: <em>April 2016 - June 2018</em>
          </Typography>
          <Typography variant="subtitle1" className="minorContent">
            <ul>
              <li>
                Developed and enhanced applications to work on financial payment
                and reconciliation systems. These systems are the backbone of
                our company, ensuring that hotels get paid on time for each
                customer's bookings.
              </li>
              <li>
                The applications are developed by various technologies e.g.
                React, RabbitMQ, Hangfire, .Net Core, WCF, and Windows service.
              </li>
              <li>
                We used many cutting-edge technologies and tools in the
                development process e.g. Git, TeamCity, Puppet, Jira, Grafana,
                and Kibana.
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
          <Typography variant="h5" className="majorContent">
            Seagate Technology
          </Typography>
          <Typography variant="subtitle1" className="majorContent">
            Full-stack developer: <em>May 2011 - March 2016</em>
          </Typography>
          <Typography variant="subtitle1" className="minorContent">
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
