import './Intro.scss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Intro() {
  return (
    <div className="intro content">
      <Typography className="headerLine">Introduction</Typography>
      <Grid item xs={12} sm={8} lg={6} className="contentLine">
        <Typography component="p" align="center" className="paragraph">
          Programming is a skill that can change the world. It is empowering and
          fulfilling. In order to do that, imagination, creativity, and thinking
          outside the box are needed.
        </Typography>
        <Typography component="p" align="center" className="paragraph">
          For me, each day leads to opportunities; chances to learn something
          new. Knowing many ideas and technologies is likes a soldier with a
          full set of weapons who can choose the right tool to build
          great things.
        </Typography>
        <Typography component="p" align="center" className="quote">
          “In terms of doing work and in terms of learning and evolving as a
          person, you just grow more when you get more people’s perspectives…” –
          Mark Zuckerberg
        </Typography>
      </Grid>
    </div>
  );
}

export default Intro;
