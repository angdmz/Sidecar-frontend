export interface InvestorData {
  id?: any | null,
  full_legal_name: string,
}

export interface AssetData {
  name: string,
  type: string,
}

export interface InvestmentData {
  id?: any | null
  asset: AssetData
  invested_since: Date
  created_at: Date
  shares: bigint
  purchase_price: number
  current_price: number
}

export interface InvestorDetailData extends InvestorData{
  investments: Array <InvestmentData>
}

class InvestorDetailDataImpl implements InvestorDetailData {
  full_legal_name!: string;
  id: any;
  investments!: Array<InvestmentData>;
}
