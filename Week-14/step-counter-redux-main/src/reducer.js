const initialState = {
    stepCount: 0
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_STEP":
        return { ...state, stepCount: state.stepCount + 1 };
      case "RESET_STEPS":
        return { ...state, stepCount: 0 };
      default:
        return state;
    }
  }
  
  export default reducer;
  