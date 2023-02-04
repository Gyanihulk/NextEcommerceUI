import React from "react";

const NewArival = () => {
  return (
    <div id="display_pro">
      <h2 class="new_arr">New Arrivals</h2>
      <div id="flex">
        <div id="first_pro" class="one">
          <div class="img" id="img1">
            <span class="sale_tag">Sale!</span>
            <span class="like_btn">
              <i class="fa-regular fa-heart"></i>
            </span>
          </div>
          <p class="caption_">
            Green gown <br /> <span class="cancelled">$50.00</span>{" "}
            <span class="new">$30.00</span>
          </p>
        </div>

        <div id="first_pro" class="one">
          <div class="img" id="img2">
            <span class="sale_tag">Sale!</span>
            <span class="like_btn">
              <i class="fa-regular fa-heart"></i>
            </span>
          </div>
          <p class="caption_">
            Elegant Top <br /> <span class="cancelled">$65.00</span>{" "}
            <span class="new">$40.00</span>
          </p>
        </div>

        <div id="first_pro" class="one">
          <div class="img" id="img3">
            <span class="sale_tag">Sale!</span>
            <span class="like_btn">
              <i class="fa-regular fa-heart"></i>
            </span>
          </div>
          <p class="caption_">
            Get sporty <br /> <span class="cancelled">$45.00</span>{" "}
            <span class="new">$35.00</span>
          </p>
        </div>

        <div id="first_pro" class="one">
          <div class="img" id="img4">
            <span class="sale_tag">Sale!</span>
            <span class="like_btn">
              <i class="fa-regular fa-heart"></i>
            </span>
          </div>
          <p class="caption_">
            Chic but silk <br /> <span class="cancelled">$70.00</span>{" "}
            <span class="new">$55.00</span>
          </p>
        </div>

        <div id="first_pro" class="one">
          <div class="img" id="img5">
            <span class="sale_tag">Sale!</span>
            <span class="like_btn">
              <i class="fa-regular fa-heart"></i>
            </span>
          </div>
          <p class="caption_">
            Show up classy <br /> <span class="cancelled">$54.00</span>{" "}
            <span class="new">$43.00</span>
          </p>
        </div>
      </div>
      <div id="sec_main">
        <div class="first_box">
          <img src="https://images.unsplash.com/photo-1632149877166-f75d49000351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="pro10" alt="a white outfit"/>
        </div>
        <div class="sec_box">
          <span class="gray">PERFECT SUMMER</span>
          <p class="head">Summer Days Look</p>
          <div id="white" class="one">
            <div class="img" id="img6">
              <span class="sale_tag2">Sale!</span>
              <span class="like_btn">
                <i class="fa-regular fa-heart"></i>
              </span>
            </div>
            <p class="caption">
              Textile dress
              <br /> <span class="cancelled">$54.00</span>{" "}
              <span class="new">$43.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArival;
