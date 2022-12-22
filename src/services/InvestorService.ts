import http from "../http-common";
import {InvestorData, InvestorDetailData} from "../types/Investor";

const getAll = () => {
  return http.get<Array<InvestorData>>("/investors/");
};

const get = (id: any) => {
  return http.get<InvestorDetailData>(`/investors/${id}`);
};

const create = (data: InvestorData) => {
  return http.post<InvestorData>("/investors", data);
};

const update = (id: any, data: InvestorData) => {
  return http.put<any>(`/investors/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/investors/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/investors`);
};

const InvestorService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default InvestorService;
