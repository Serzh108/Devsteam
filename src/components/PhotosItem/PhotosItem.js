import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotosItem.module.css';

export default function PhotosItem({ item }) {
  return (
    <li className={styles.item}>
      <Link
        to={{
          pathname: '/singleImg',
          state: { imgSrc: item.urls.full },
        }}
      >
        <img src={item.urls.small} alt="No images" />
      </Link>
      <div className={styles.itemInfo}>
        <p className={item.description ? styles.itemName : styles.itemNoName}>
          {item.description ? item.description : 'No name'}
        </p>
        <p className={styles.itemName}>Author: {item.user.name}</p>
      </div>
    </li>
  );
}
