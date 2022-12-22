import http from "../http-common";
import {InvestorData} from "../types/Investor";

const getAll = () => {
  return http.get<Array<InvestorData>>("/assets");
};

const get = (id: any) => {
  return http.get<InvestorData>(`/assets/${id}`);
};


const AssetService = {
  getAll,
  get,
};

export default AssetService;
