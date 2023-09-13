import { baseService } from "./BaseService";
export class BinhLuanService extends baseService {
  constructor() {
    super();
  }
  LayBinhLuan = () => {
    return this.get(`api/binh-luan`);
  };

  PostBinhLuan = (values) => {
    return this.post(`api/binh-luan`, values);
  };
  PutBinhLuan = (id, value) => {
    return this.put(`api/binh-luan/${id}`, value);
  };
  DeleteBinhLuan = (id) => {
    return this.delete(`api/binh-luan/${id}`);
  };
}

export const BinhLuan = new BinhLuanService();
