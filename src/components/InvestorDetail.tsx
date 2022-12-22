import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams } from 'react-router-dom';

import InvestorService from "../services/InvestorService";
import {InvestorDetailData} from "../types/Investor";
import InvestmentsList from "./InvestmentsList";

const InvestorDetail: React.FC = () => {
  const { id }= useParams();

  const initialInvestorState = {
    id: null,
    full_legal_name: "",
    investments: [],
  };
  const [currentInvestor, setCurrentInvestor] = useState<InvestorDetailData>(initialInvestorState);

  const getInvestor = (id: string) => {
    InvestorService.get(id)
      .then((response: any) => {
        setCurrentInvestor(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getInvestor(id);
  }, [id]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentInvestor({ ...currentInvestor, [name]: value });
  };

  return (
    <div>
      {currentInvestor ? (
        <div className="edit-form">
          <h4>Investor</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Full legal name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentInvestor.full_legal_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Investments</label>
              <InvestmentsList data={currentInvestor.investments} />
            </div>
          </form>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on an Investor...</p>
        </div>
      )}
    </div>
  );
};

export default InvestorDetail;
