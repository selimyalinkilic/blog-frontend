import axiosInstance from '../../helpers/axios';

// Action Creator
export const getAllPosts = () => (dispatch) => {
  return axiosInstance.get('/posts')
  .then((res) => {    
    dispatch({
      type : 'GET_ALL_POSTS_SUCCESS',
      payload : res.data
    });
    return Promise.resolve();
  })
  .catch((error) => {    
    dispatch({
      type: 'GET_ALL_POSTS_ERROR',
      payload: error.response ? error.response.data : 'COULD NOT CONNECT'
    });

    return Promise.reject();
  })
  
}

export const getPostById = (id) => (dispatch) => {
  return axiosInstance.get(`/posts/post/${id}`)
  .then((res) => {    
    dispatch({
      type : 'GET_POST_BY_ID_SUCCESS',
      payload : res.data
    });
    return Promise.resolve();
  })
  .catch((error) => {   
    dispatch({
      type : 'GET_POST_BY_ID_ERROR',
      payload: error.response ? error.response.data : 'COULD NOT CONNECT'
    });     
    return Promise.reject();
  })
  
}

export const getPostsByCategoryId = (id) => (dispatch) => {
  return axiosInstance.get(`/posts/category/${id}`)
  .then((res) => {    
    dispatch({
      type : 'GET_POST_BY_CATEGORY_ID_SUCCESS',
      payload : res.data
    });
    return Promise.resolve();
  })
  .catch((error) => {   
    dispatch({
      type : 'GET_POST_BY_CATEGORY_ID_ERROR',
      payload: error.response ? error.response.data : 'COULD NOT CONNECT'
    });     
    return Promise.reject();
  })
  
}
