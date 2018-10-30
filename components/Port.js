import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { PhotoSwipeGallery } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

const styles = theme => ({
  thumnailImg: {
    width: '165px',
    margin: '3px',
    [theme.breakpoints.up('sm')]: {
      width: '210px',
      margin: '7px'
    },
    [theme.breakpoints.up('md')]: {
      width: '260px',
      margin: '10px'
    }
  }
});

class Port extends React.Component {
  constructor(props) {
    super(props);

    this.getGalleryData = this.getGalleryData.bind(this);
    this.getThumbnailContent = this.getThumbnailContent.bind(this);

    this.state = {
      photos: [],
      columns: 0
    };
  }

  componentDidMount() {
    this.getGalleryData();
  }

  getGalleryData() {
    fetch('data/ports.json')
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            var data = json.data;

            var realData = data.filter(d => d.isShow).map(function(d) {
              var size = d.imgSize.split('x');
              return {
                src: d.imgUrl,
                thumbnail: d.thumnailUrl,
                w: size[0],
                h: size[1],
                title: d.description
              };
            });

            this.setState({ photos: realData });
          });
        } else {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(
          'There has been a problem with your fetch operation: ' + error.message
        );
      });
  }

  getThumbnailContent(item) {
    const { classes } = this.props;
    return <img src={item.thumbnail} className={classes.thumnailImg} />;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="content">
        <Typography className="headerLine">Portfolio</Typography>
        <Grid item xs={12} md={10} lg={8} className="contentLine">
          {this.state.photos.length > 0 ? (
            <PhotoSwipeGallery
              items={this.state.photos}
              thumbnailContent={item => this.getThumbnailContent(item)}
            />
          ) : (
            <img src="images/preloader.gif" />
          )}
        </Grid>
      </div>
    );
  }
}

Port.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Port);
