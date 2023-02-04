import React from "react";

const Landing = () => {
  return (
    <div id="page_banner">
      <div id="banner">
        <div id="msg_box">
          <p class="summer_s">Summer Sales</p>
          <h1 id="seventy_p">50% OFF</h1>
          <p class="promo_c">with promo code CN67EW*</p>

          <button
            id="shop_now"
            type="submit"
            name="shop now"
            onclick="change()"
          >
            Shop now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
