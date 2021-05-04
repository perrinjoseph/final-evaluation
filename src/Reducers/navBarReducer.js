let initialValue = false;
const navBarReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return !state;
    default:
      return state;
  }
};

export default navBarReducer;
