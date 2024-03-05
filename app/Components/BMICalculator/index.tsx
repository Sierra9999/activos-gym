"use client";
import React from "react";
import "./styles.css";
import { calculateBMI, rateBMI } from "./calculateBMI";

const BMICalculator = () => {
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [results, setResults] = React.useState(0)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResults(calculateBMI(Number(height), Number(weight)))
  };

  return (
    <div className="section-margin py-20 flex flex-col md:flex-row">
      <div>
        <h1 className="text-3xl">Calculate your bmi</h1>
        <div className="my-7">
          <h2 className="font-bold text-xl">why calculate your bmi ? </h2>
          <p className=" md:w-2/3">
            Know Your Body, Know Your Health. Calculate Your BMI - a Quick
            Insight into Your Weight and Health. Simple, Effective, and Your
            First Step Towards a Healthier You.
          </p>
        </div>
        <form
          className="flex"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          action=""
        >
          <div></div>
          <label className="mr-10" htmlFor="">
            <input
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              placeholder="height /cm"
              type="number"
              required
            />
          </label>
          <label className="mr-10" htmlFor="">
            <input
              type="number"
              placeholder="weight /kg"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              required
            />
          </label>
          <button className="button"> Calculate </button>
        </form>
      </div>
      <div  className={` 
        ${rateBMI(results).rate} 
        w-full 
        results 
        ${ results === 0 ? '' : 'left-to-right' } 
        flex  
        flex-col 
        md:w-1/2 
        md:right-10`} >
        <span  className="font-bold my-4">your BMI is {results}</span>
        <span  >{rateBMI(results).message}</span>
      </div>
    </div>
  );
};

export default BMICalculator;
