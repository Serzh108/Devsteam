import axios from 'axios';
import { photosSlice } from './photosReduser';

const pathApi =
  'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

const getPhotos = () => async (dispatch, getState) => {
  dispatch(photosSlice.actions.setIsLoading());

  try {
    const photosArray = await axios.get(pathApi);
    console.log('New!!! photosArray =', photosArray.data);
    const result = [...photosArray.data];
    dispatch(photosSlice.actions.getPhotos({ result }));
  } catch (err) {
    console.log('getPhotos error', err);
  }

  dispatch(photosSlice.actions.resetIsLoading());
};

export { getPhotos };
