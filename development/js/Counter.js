import React from "react";
import countdown from "time-countdown";
const Clock = () => {
  Vue.prototype.countdown = countdown;
  setInterval(
    function() {
      this.timer = this.countdown(1528281966000);
    }.bind(this),
    1000
  );
  time = {
    hours: xx,
    minutes: xx,
    seconds: xx
  };

  console.log(hours);
};

export default Clock;
