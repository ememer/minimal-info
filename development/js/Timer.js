import React, { useState, useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timerInterval = setInterval(() => {
      const deg = 6;
      const hr = document.querySelector("#hr");
      const mn = document.querySelector("#mn");
      const sc = document.querySelector("#sc");

      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  return (
    <div className={"clock_box"}>
      <div className={"clock"}>
        <div className={"hour"}>
          <div className={"hr"} id={"hr"}></div>
        </div>
        <div className={"min"}>
          <div className={"mn"} id={"mn"}></div>
        </div>
        <div className={"sec"}>
          <div className={"sc"} id={"sc"}></div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
