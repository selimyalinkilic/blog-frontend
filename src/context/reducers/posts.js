const postsReducer = (state, action) => {
  switch(action.type){
    case "GET_ALL_POSTS_SUCCESS":
      return{
        ...state,
        data : action.payload
      }
    case "GET_ALL_POSTS_ERROR":
      return{
        ...state,
        error: action.payload
      }
    case "GET_POST_BY_ID_SUCCESS":
      return{
        ...state,
        data: action.payload
      }
    case "GET_POST_BY_ID_ERROR":
      return{
        ...state,
        data: action.payload
      }
    case "GET_POST_BY_CATEGORY_ID_SUCCESS":
      return{
        ...state,
        data: action.payload
      }
    case "GET_POST_BY_CATEGORY_ID_ERROR":
      return{
        ...state,
        data: action.payload
      }           
    default:
      return{...state}  
  }
}

export default postsReducer;