"use client";

import React, { useState } from "react";

const Buy = () => {
  const [goldRate, setGoldRate] = useState(18500);
  const [weight, setWeight] = useState(0);
  const [totalWeight, settotalWeight] = useState(0);

  const calculatePolish = (weight) => {
    let polish = weight * 0.1;
    let totalWeight = polish + weight;
    settotalWeight(totalWeight);
  };

  return (
    <>
      <div className="flex flex-col justify-center align-middle text-center">
        <h2 className="p-2 mt-2 min-w-80 border-b-2 text-lg">Sale Billing</h2>

        <div className="flex flex-col justify-center align-middle text-center">
          <h2 className="m-4 ml-4 text-2xl border-2 p-2 ">
            CALCULATE BILL
            <br />
          </h2>
          <span className="text-sm mb-4 border-b-2 p-2">
            <i>
              <b>Gram Rate Today: {goldRate} </b>
            </i>
          </span>
          <div className="flex flex-col p-2 justify-center">
            <div className="">
              <label htmlFor="weight" className="m-2">
                Weight(g):{" "}
              </label>
              <input
                type="number"
                className="w-44 m-2 p-2 rounded text-gray-900"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
              />
              <button
                onClick={() => {
                  calculatePolish(weight);
                }}
                className="p-2 w-24 border-blue-500 border-2 ml-3 bg-blue-400 rounded"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="salebillContainer flex flex-col justify-center font-serif align-middle text-center border-2 ">
        <h1 className="text-center flex justify-center p-4 text-2xl">
          SALE BILL
        </h1>
        <div className="flex justify-center">
          <label htmlFor="">
            Weight: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {weight} (g)
          </label>
        </div>

        <div className="flex justify-center m-2">
          <label htmlFor="">
            Polish: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {weight * 0.1} (g)
          </label>
        </div>

        <div className="flex justify-center m-2">
          <label className="" htmlFor="">
            Total Weight: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            {totalWeight} (g)
          </label>
        </div>

        <div className="flex justify-center m-2">
          <label htmlFor="">
            Gold Price: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {weight} -/rs
          </label>
        </div>

        <div className="flex justify-center m-2">
          <label htmlFor="">
            Profit (5%): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {weight} -/rs
          </label>
        </div>

        <div className="flex justify-center m-2">
          <label htmlFor="">
            Total Price: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {weight} -/rs
          </label>
        </div>
      </div>
    </>
  );
};

export default Buy;
