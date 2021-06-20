import React from 'react';
import styles from '../../styles/Photos.module.css';

function PhotosComponent({ data }) {
  return (
    <div className={`text-center row ${styles.mainDiv}`}>
      <div className="col-md-4">
        {data.map((photo, index) => {
          if (index % 3 == 0) {
            return (
              <div className={styles.ImageDiv} key={photo.Id}>
                <img
                  className={styles.img}
                  // width={photo.Attachments[0].thumbnails.large.width}
                  // width={'auto'}
                  // height={photo.Attachments[0].thumbnails.large.height}
                  // height={"auto"}
                  src={photo.Attachments[0].thumbnails.large.url}
                  // objectFit="contain"
                />
              </div>
            );
          }
        })}
      </div>
      <div className="col-md-4">
        {data.map((photo, index) => {
          if (index % 3 == 1) {
            return (
              <div className={styles.ImageDiv} key={photo.Id}>
                <img
                  className={styles.img}
                  // width={photo.Attachments[0].thumbnails.large.width}
                  // height={photo.Attachments[0].thumbnails.large.height}
                  src={photo.Attachments[0].thumbnails.large.url}
                  // objectFit="contain"
                />
              </div>
            );
          }
        })}
      </div>
      <div className="col-md-4">
        {data.map((photo, index) => {
          if (index % 3 == 2) {
            return (
              <div className={styles.ImageDiv} key={photo.Id}>
                <img
                  // width={photo.Attachments[0].thumbnails.large.width}
                  className={styles.img}
                  // height={photo.Attachments[0].thumbnails.large.height}
                  src={photo.Attachments[0].thumbnails.large.url}
                  // objectFit="contain"
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default PhotosComponent;
