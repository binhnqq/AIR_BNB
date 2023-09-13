import { CHANGE_TAB_ACTIVE, CHUYEN_TAB } from "../Types/ChangTabTypes";

const stateDefault = {
  tabActive: 1,
};

export const ChuyenTabActive = (state = stateDefault, action) => {
  switch (action.type) {
    case CHUYEN_TAB: {
      state.tabActive = 2;
      return { ...state };
    }
    case CHANGE_TAB_ACTIVE: {
      console.log("action", action);
      state.tabActive = action.number;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
