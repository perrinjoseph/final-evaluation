let initialValue = false;
const navBarReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "OPEN_NAV":
      return true;
    case "CLOSE_NAV":
      return false;
    default:
      return state;
  }
};

export default navBarReducer;
