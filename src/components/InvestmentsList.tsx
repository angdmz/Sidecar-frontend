import React from "react";
import {InvestmentData} from '../types/Investor';

type InvestmentListData = {
    data: Array<InvestmentData>
}

function InvestmentsList({data} : InvestmentListData){
    return (
        <div className="list row">
            <div className="col-md-6">
                <h4>Investments List</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Asset
                            </th>
                            <th>
                                Purchase price
                            </th>
                            <th>
                                Current price
                            </th>
                            <th>
                                Invested since
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {data &&
                        data.map((investment, index) => (
                            <tr>
                                <td
                                    key={index}
                                >
                                    {investment.id}
                                </td>
                                <td
                                    key={index}
                                >
                                    {investment.asset.name}
                                </td>
                                <td
                                    key={index}
                                >
                                    {investment.purchase_price}
                                </td>
                                <td
                                    key={index}
                                >
                                    {investment.current_price}
                                </td>
                                <td
                                    key={index}
                                >
                                    {investment.invested_since}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default InvestmentsList;
