import axiosInstance from '../../helpers/axios';

// Action Creator
export const getAllCategories = () => (dispatch) => {    
  return axiosInstance.get('/category')
  .then((res) => {    
    dispatch({
      type : 'GET_ALL_CATEGORIES_SUCCESS',
      payload : res.data
    });
    return Promise.resolve();
  })
  .catch((error) => {  
    dispatch({
      type: 'GET_ALL_CATEGORIES_ERROR',
      payload: error.response ? error.response.data : 'COULD NOT CONNECT',
    });
    return Promise.reject();
  }) 
}

export const getCategoryById = (id) => (dispatch) => {
  return axiosInstance.get(`/category/${id}`)
  .then((res) => {    
    dispatch({
      type : "GET_CATEGORY_BY_ID_SUCCESS",
      payload : res.data
    });
    return Promise.resolve();
  })
  .catch((error) => {        
    dispatch({
      type: 'GET_CATEGORY_BY_ID_ERROR',
      payload: error.response ? error.response.data : 'COULD NOT CONNECT',
    });
    return Promise.reject();
  }) 
}
