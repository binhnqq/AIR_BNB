import { Pagination } from "antd";
import { filter } from "lodash";
import { useParams } from "react-router-dom";
import { baseService } from "./BaseService";
export class DSVitriService extends baseService {
  constructor() {
    super();
  }
  LayDSViTri = (keyword = "") => {
    if (keyword.trim() !== "" ){
      return this.get(
        `api/vi-tri/phan-trang-tim-kiem?pageIndex=2&pageSize=3&keyword=${keyword}`
      );
    }
    return this.get(`api/vi-tri`);
  };

  PostViTri = (value) => {
    return this.post(`api/vi-tri`, value);
  };

  GetViTriId = (id) => {
    return this.get(`api/vi-tri/${id}`);
  };

  PutViTriId = (id, value) => {
    return this.put(`api/vi-tri/${id}`, value);
  };

  DeleteViTri = (id) => {
    return this.delete(`api/vi-tri/${id}`);
  };
}

export const vitri = new DSVitriService();
