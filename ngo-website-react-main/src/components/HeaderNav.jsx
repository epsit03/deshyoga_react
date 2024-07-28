import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const nav = useNavigate();
  const send = (e) => {
    nav(e);
  };
  return (
    <nav>
      <div class="links">
        <img src="../assets/swami_ji_dp.webp" class="swamijidp"/>
        <h2 class="textDesh"> <b>DESHYOGA CHARITABLE TRUST</b></h2>
        <img src="../assets/logo.png" alt="deshyoga-logo" class="swamijidp"/>
      </div>
    </nav>
  );
};

export default HeaderNav;
