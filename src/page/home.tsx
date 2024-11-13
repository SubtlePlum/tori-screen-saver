import React from "react";
import { Header } from "../components/header";
import { Feature } from "../components/feature";
import { Password } from "./password";

export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Password />
      <Feature />
    </React.Fragment>
  );
};
