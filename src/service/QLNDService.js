import { baseService } from "./BaseService";
export class QLNDService extends baseService {
  constructor() {
    super();
  }
  signup = (thongtinND) => {
    //lay từ Api
    return this.post(`api/auth/signup`, thongtinND);
  };
  Sigin = (thongtinND) => {
    //lay từ Api
    return this.post(`api/auth/signin`, thongtinND);
  };

  UserId = (id) => {
    return this.get(`api/users/${id}`);
  };
  PutUserId = (id, thongTinUser) => {
    return this.put(`api/users/${id}`, thongTinUser);
  };
  DeleteUser = (id) => {
    return this.delete(`api/users?id=${id}`);
  };
  PostUser = (ttnd) => {
    return this.post(`api/users`, ttnd);
  };
  GetUser = (keyword = "") => {
    if (keyword.trim() !== "") {
      return this.get(`api/users/search/${keyword}`);
    }
    return this.get(`api/users`);
  };
}

export const QLND = new QLNDService();
