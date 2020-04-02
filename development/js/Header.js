import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className={"header"}>
      <a href="#">
        <div>
          <div className={"header_title"}>Minimal</div>
          <div className={"header_titleClock"}>info</div>
        </div>
      </a>
    </header>
  );
};

export default Header;
