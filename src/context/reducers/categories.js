export const categoriesReducer = (state, action) => {
  switch(action.type){
    case "GET_ALL_CATEGORIES_SUCCESS":
      return{
        ...state,
        data : action.payload
      }
    case "GET_ALL_CATEGORIES_ERROR":
      return{
        ...state,
        error: action.payload,
      }     
    default:
      return{...state}  
  }
}


export const categoryReducer = (state, action) => {
  switch(action.type){    
    case "GET_CATEGORY_BY_ID_SUCCESS":
      return{
        ...state,
        data : action.payload
      }
    case "GET_CATEGORY_BY_ID_ERROR":
      return{
        ...state,
        error: action.payload,
      }       
    default:
      return{...state}  
  }
}
