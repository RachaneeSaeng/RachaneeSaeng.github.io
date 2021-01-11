import preLoading from '../../images/preloader.gif';

import './Portfolio.scss';
import 'react-photoswipe-2/lib/photoswipe.css';

import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { PhotoSwipeGallery } from 'react-photoswipe-2';

function Portfolio() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getGalleryData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getGalleryData() {
    var response = await fetch('data/ports.json');
    if (response && response.ok) {
      var json = await response.json();
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

      setPhotos(realData);
    } else {
      console.log(response);
    }
  }

  function getThumbnailContent(item) {
    return (
      <img src={item.thumbnail} alt={item.description} className="thumbnail" />
    );
  }

  return (
    <div className="port content">
      <Typography className="headerLine">Portfolio</Typography>
      <Grid item xs={12} md={10} lg={8} className="contentLine">
        {photos.length > 0 ? (
          <PhotoSwipeGallery
            items={photos}
            options={{
              modal: false,
            }}
            thumbnailContent={(item) => getThumbnailContent(item)}
          />
        ) : (
          <img src={preLoading} alt="loaging..." />
        )}
      </Grid>
    </div>
  );
}

export default Portfolio;
