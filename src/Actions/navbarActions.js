const navbarActions = {
  openNavBar: () => {
    return {
      type: "OPEN_NAV",
    };
  },

  closeNavBar: () => {
    return {
      type: "CLOSE_NAV",
    };
  },
};
export default navbarActions;
