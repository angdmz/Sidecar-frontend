import React, { useState, useEffect } from "react";
import InvestorService from "../services/InvestorService";
import { Link } from "react-router-dom";
import {InvestorData} from '../types/Investor';

const InvestorsList: React.FC = () => {
  const [investors, setInvestors] = useState<Array<InvestorData>>([]);
  const [currentInvestors, setCurrentInvestors] = useState<InvestorData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  useEffect(() => {
    listInvestors();
  }, []);

  const listInvestors = () => {
    InvestorService.getAll()
      .then((response: any) => {
        setInvestors(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const setCurrentInvestor = (investor: InvestorData, index: number) => {
    setCurrentInvestors(investor);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Investors List</h4>
        <ul className="list-group">
          {investors &&
            investors.map((investor, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setCurrentInvestor(investor, index)}
                key={index}
              >
                {investor.full_legal_name}
              </li>
            ))}
        </ul>

      </div>
      <div className="col-md-6">
        {currentInvestors ? (
          <div>
            <h4>Investor</h4>
            <div>
              <label>
                <strong>Id:</strong>
              </label>{" "}
              {currentInvestors.id}
            </div>
            <div>
              <label>
                <strong>Full legal name:</strong>
              </label>{" "}
              {currentInvestors.full_legal_name}
            </div>
            <Link
              to={"/investors/" + currentInvestors.id}
              className="badge badge-warning"
            >
              Details
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on an Investor...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestorsList;
