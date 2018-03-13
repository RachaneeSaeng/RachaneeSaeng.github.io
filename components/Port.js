import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const styles = theme => ({
  root: {
    backgroundColor: "#ffffff",
    paddingTop: `${theme.spacing.unit * 10}px`,
    paddingBottom: `${theme.spacing.unit * 8}px`
  },
  headLine: {
    paddingBottom: `${theme.spacing.unit * 4}px`
  }
});

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
];

class Port extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false
    };
  }

  openLightbox (event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox ()  {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious()  {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container
        className={classes.root}
        direction="column"
        alignItems="center">
        <Grid item xs={12}>
          <Typography variant="display1" align="center" className={classes.headLine}>Portfolio</Typography>
        </Grid>
        <Grid item xs={12} md={10} lg={8}>
          <Gallery
            columns={3}
            margin={5}
            photos={photos}
            onClick={this.openLightbox}
          />
          <Lightbox
            images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </Grid>
      </Grid>
    );
  }
}

Port.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Port);
