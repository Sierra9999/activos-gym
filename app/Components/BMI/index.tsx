"use client";
import React from "react";
import "./styles.css";
import { calculateBMI } from "./calculateBMI";

const index = () => {
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(calculateBMI(Number(height), Number(weight)));
  };

  return (
    <div className="py-20">
      <h1 className="text-3xl">Calculate your bmi</h1>
      <div className="my-7">
        <h2>why calculate your bmi ? </h2>
        <p className=" md:w-2/3">
          Know Your Body, Know Your Health. Calculate Your BMI - a Quick Insight
          into Your Weight and Health. Simple, Effective, and Your First Step
          Towards a Healthier You.
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
  );
};

export default index;
