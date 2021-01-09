import './Contact.scss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

function Contact() {
  return (
    <div className="contact">
      <Typography variant="h5" align="center" style={{ color: '#e2e2e2' }}>
        Get In Touch
      </Typography>
      <Grid item xs={12} sm={8} lg={6} className="contentLine">
        <Typography variant="subtitle1" align="center" className="line1">
          rachanee.saeng@gmail.com
        </Typography>
        <br />
        <Typography variant="subtitle1" align="center" className="line2">
          +669 3324 4514
        </Typography>
      </Grid>
      <Grid
        xs={10}
        sm={6}
        md={4}
        item
        container
        justify="space-around"
        className="contentLine"
      >
        <IconButton
          className="btnOutLine"
          href="https://th.linkedin.com/in/RachaneeS"
          target="_blank"
        >
          <Icon className={'fab fa-linkedin-in'} />
        </IconButton>
        <IconButton
          className="btnOutLine"
          href="https://rachanee.medium.com/"
          target="_blank"
        >
          <Icon className={'fab fa-medium-m'} />
        </IconButton>
        <IconButton
          className="btnOutLine"
          href="https://www.facebook.com/RachaneeSaeng"
          target="_blank"
        >
          <Icon className={'fab fa-facebook-f'} />
        </IconButton>
      </Grid>
    </div>
  );
}

export default Contact;
