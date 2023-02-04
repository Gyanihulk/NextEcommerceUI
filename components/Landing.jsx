import React from "react";

const Landing = () => {
  return (
    <div id="page_banner">
      <div id="banner">
        <div id="msg_box">
          <p className="summer_s">Summer Sales</p>
          <h1 id="seventy_p">50% OFF</h1>
          <p className="promo_c">with promo code CN67EW*</p>

          <button
            id="shop_now"
            type="submit"
            name="shop now"
            onclick="change()"
          >
            Shop now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
