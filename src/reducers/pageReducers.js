const initialState =  {
pagina_exibida:'/sobre'
};

export default (state = initialState, action)=> {

  if(action.type === 'changePage'){
    return {...state,pagina_exibida:action.payload.page};
  }

  return state;
}