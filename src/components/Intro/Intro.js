import './Intro.scss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Intro() {
  return (
    <div className="intro content">
      <Typography className="headerLine">Introduction</Typography>
      <Grid item xs={12} sm={8} lg={6} className="contentLine">
        <Typography
          variant="subtitle1"
          component="p"
          align="center"
          className="paragraph"
        >
          I believe programming is a skill that can change the world, it is
          empowering and fulfilling. I really enjoy turning complex requirements
          into system design and turn it into programming logic, it feels like
          playing puzzles.
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          align="center"
          className="paragraph"
        >
          I like to learn new things to broaden my mind. Knowing many ideas and
          technologies make me likes a soldier with a full set of weapons who
          can choose the right tool for the right problem.
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          align="center"
          className="paragraph quote"
        >
          “In terms of doing work and in terms of learning and evolving as a
          person, you just grow more when you get more people’s perspectives…” –
          Mark Zuckerberg
        </Typography>
      </Grid>
    </div>
  );
}

export default Intro;
