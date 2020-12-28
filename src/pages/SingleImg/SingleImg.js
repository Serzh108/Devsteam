import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './SingleImg.module.css';

export default function SingleImg() {
  const location = useLocation();
  const src = location.state.imgSrc;

  return (
    <>
      <img src={src} alt="full size" className={styles.fullImage} />
      {location.pathname === '/singleImg' && (
        <Link to="/">
          <Button>Back to pictures list</Button>
        </Link>
      )}
    </>
  );
}
