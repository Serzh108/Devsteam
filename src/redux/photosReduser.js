import { createSlice } from '@reduxjs/toolkit';

const state = {
  items: [],
  isLoading: false,
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState: state,
  reducers: {
    getPhotos: (state, { payload }) => ({
      ...state,
      items: [...payload.result],
    }),
    setIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: true,
    }),
    resetIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: false,
    }),
  },
});
