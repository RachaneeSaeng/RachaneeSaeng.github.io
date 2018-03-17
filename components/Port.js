import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import {PhotoSwipeGallery} from 'react-photoswipe';

const styles = theme => ({
  thumnailImg: {
    width: "165px",
    margin: "0 6px 6px 0",  
    [theme.breakpoints.up("sm")]: {
      width: "210px",
      margin: "0 10px 10px 0",
    },
    [theme.breakpoints.up("md")]: {
      width: "260px",
      margin: "0 12px 12x 0"
    }
  }
});

class Port extends React.Component {

  constructor(props){
    super(props);

    this.getGalleryData = this.getGalleryData.bind(this);   
    this.getThumbnailContent = this.getThumbnailContent.bind(this);

    this.state = {
      photos: [],
      columns: 0
    };
  }

  componentWillMount() {    
    this.getGalleryData();
  }
 
  getGalleryData() {
    fetch('data/ports.json')
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            var data = json.data;

            var realData = data.filter(d => d.isShow).map(function(d) {  
              var size = d.imgSize.split("x");           
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
          "There has been a problem with your fetch operation: " + error.message
        );
      });
  }

  getThumbnailContent(item) {  
    const { classes } = this.props;
    return (
        <img src={item.thumbnail} className={classes.thumnailImg}/>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="content">
        <Typography className="headerLine">Portfolio</Typography>
        <Grid id="port-gallery-grid" item xs={12} md={10} lg={8} className="contentLine">
        <PhotoSwipeGallery items={this.state.photos}
              thumbnailContent={(item) => this.getThumbnailContent(item)}
             /> 
        </Grid>        
      </div>
    );
  }
}

Port.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Port);
