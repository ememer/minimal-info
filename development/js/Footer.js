import React, { useEffect, useState } from "react";

const Foother = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const yearUpdate = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 86400);
    return () => {
      clearInterval(yearUpdate);
    };
  }, []);
  return (
    <footer className={"container"}>
      <div className={"footer_content"}>
        <div className={"social"}>
          <a
            href="https://github.com/ememer/minimal-info"
            target="_blank"
            className={"fab fa-github"}
          ></a>
          <p className={"footer_data"}>{year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Foother;
