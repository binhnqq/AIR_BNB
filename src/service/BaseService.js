// những gì kết nối vs be
import axios from "axios";
// import { DOMAIN, TOKEN, TOKEN_CYBER } from "../util/setting/config";
import { DOMAIN, TOKEN, TOKEN_CYBER } from "../util/setting/config";
export class baseService {
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(TOKEN),
        tokenCybersoft: TOKEN_CYBER,
        token: localStorage.getItem(TOKEN),
      },
    });
  };
  post = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(TOKEN),
        tokenCybersoft: TOKEN_CYBER,
        token: localStorage.getItem(TOKEN),
      },
    });
  };
  get = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      data: model,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(TOKEN),
        tokenCybersoft: TOKEN_CYBER,
        token: localStorage.getItem(TOKEN),
      },
    });
  };
  delete = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      data: model,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(TOKEN),
        tokenCybersoft: TOKEN_CYBER,
        token: localStorage.getItem(TOKEN),
      }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}
