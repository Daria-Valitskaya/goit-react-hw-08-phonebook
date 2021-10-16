import React from "react";
import s from "./Views.module.css";

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>
      Welcome to your Phonebook{" "}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
