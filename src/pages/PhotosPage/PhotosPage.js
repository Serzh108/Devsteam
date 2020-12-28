import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from '@emotion/core';
import { getPhotos } from '../../redux/photosOperations';
import styles from './PhotosPage.module.css';
import Header from '../../components/Header/Header';
import PhotosItem from '../../components/PhotosItem/PhotosItem';

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function PhotosPage() {
  const isLoading = useSelector(state => state.photos.isLoading);
  const items = useSelector(state => state.photos.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header />
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            zIndex: '990',
          }}
        >
          <CircleLoader
            size={300}
            color={'#006cff'}
            css={override}
            loading={isLoading}
          />
        </div>
      )}

      <ul className={styles.photosList}>
        {items &&
          items.map((item, idx) => <PhotosItem item={item} key={item.id} />)}
      </ul>
    </div>
  );
}
