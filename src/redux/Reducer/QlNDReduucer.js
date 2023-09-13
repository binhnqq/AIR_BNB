import { TOKEN_CYBER, USER_LOGIN, TOKEN } from "../../util/setting/config";
import {
  REGISTER,
  SIGIN,
  GETUSER,
  DELETE_USER,
  POST_USER,
  USERID,
} from "../Types/QLNDTypes";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userRegister: [],
  userlogin: user,
  DSUser: [],
  DeleteUser: [],
  PostUser: [],
  UserId: [],
};

export const QLNDReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case REGISTER: {
      state.userRegister = action.userRegister;
      return { ...state };
    }
    case SIGIN: {
      const { ttDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(ttDangNhap.user));
      localStorage.setItem(TOKEN, ttDangNhap.token);
      return { ...state, userlogin: ttDangNhap.user };
    }
    case USERID: {
      state.UserId = action.UserId;
      return { ...state };
    }
    case GETUSER: {
      state.DSUser = action.DSUser;
      return { ...state };
    }
    case DELETE_USER: {
      state.DeleteUser = action.DeleteUser;
      return { ...state };
    }
    case POST_USER: {
      state.PostUser = action.PostUser;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
