import { configureStore } from '@reduxjs/toolkit';
import scroll from './slices/scroll.slice';
import number from './slices/number.slice';
import site from './slices/site.slice';
import modal from './slices/modal.slice';

export default configureStore({
  reducer: {
    scroll,
    number,
    site,
    modal,
	}
})