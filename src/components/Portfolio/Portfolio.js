import loading from '../../images/preloader.gif';

import './Portfolio.scss';
import 'react-photoswipe/lib/photoswipe.css';

import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { PhotoSwipeGallery } from 'react-photoswipe';

function Portfolio() {
  const [photos, setPhotos] = useState([]);

  function getGalleryData() {
    fetch('data/ports.json')
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            var data = json.data;

            var realData = data
              .filter((d) => d.isShow)
              .map(function (d) {
                var size = d.imgSize.split('x');
                return {
                  src: d.imgUrl,
                  thumbnail: d.thumnailUrl,
                  w: size[0],
                  h: size[1],
                  title: d.description,
                };
              });

            this.setState({ photos: realData });
          });
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(
          'There has been a problem with your fetch operation: ' + error.message
        );
      });
  }

  function getThumbnailContent(item) {
    return <img src={item.thumbnail} className="thumnailImg" />;
  }

  return (
    <div className="port content">
      <Typography className="headerLine">Portfolio</Typography>
      <Grid item xs={12} md={10} lg={8} className="contentLine">
        {photos.length > 0 ? (
          <PhotoSwipeGallery
            items={photos}
            thumbnailContent={(item) => getThumbnailContent(item)}
          />
        ) : (
          <img src={loading} />
        )}
      </Grid>
    </div>
  );
}

export default Portfolio;
