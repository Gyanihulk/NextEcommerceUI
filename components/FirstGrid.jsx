import React from "react";

const FirstGrid = () => {
  return (
    <div id="grid_f">
      <div id="pro1" className="pro">
        <div id="msg">
          <h2 className="summer_pro">Addidas</h2>
          <span className="shop_n animate__slideOutRight">
            Shop Now <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
      <div id="pro2" className="pro">
        <div id="msg">
          <h2 className="summer_pro">Nike</h2>
          <span className="shop_n">
            Shop Now <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
      <div id="pro3" className="pro">
        <div id="msg">
          <h2 className="summer_pro">Nike customized</h2>
          <span className="shop_n">
            Shop Now <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FirstGrid;
