import { combineReducers } from 'redux';
import postsReducer from './posts';
import {categoriesReducer, categoryReducer} from './categories';

const rootReducer = combineReducers({
  posts : postsReducer,  
  categories: categoriesReducer,
  category: categoryReducer
});

export default rootReducer;
