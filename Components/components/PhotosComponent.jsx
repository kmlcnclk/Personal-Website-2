import React from 'react';
import styles from '../../styles/Photos.module.css';
import { Image } from '@chakra-ui/image';

function PhotosComponent({ data }) {
  return (
    <div className={`text-center row ${styles.mainDiv}`}>
      <div className="col-md-4">
        {data.map((photo, index) => {
          if (index % 3 == 0) {
            return (
              <div className={styles.ImageDiv} key={photo.Id}>
                <Image
                  className={styles.img}
                  src={photo.Attachments[0].thumbnails.large.url}
                  alt={`${photo.Name}`}
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
                <Image
                  className={styles.img}
                  src={photo.Attachments[0].thumbnails.large.url}
                  alt={`${photo.Name}`}
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
                <Image
                  className={styles.img}
                  src={photo.Attachments[0].thumbnails.large.url}
                  alt={`${photo.Name}`}
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
