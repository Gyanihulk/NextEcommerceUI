import React from 'react'

const Footers = () => {
  return (
   <>
   <section id="features">
                    <div id="feat">
                        <div class="overall">
                            <div class="icon"><i class="fa-solid fa-truck"></i></div>
                            <div class="info">
                                <span class="uppercase">FREE SHIPPING</span><br/>
                                <span class="light">From all orders over $100</span>
                            </div>
                        </div>

                        <div class="overall">
                            <div class="icon"><i class="fa-solid fa-retweet"></i></div>
                            <div class="info">
                                <span class="uppercase">FREE RETURNS</span><br/>
                                <span class="light">Return money within 30 days</span>
                            </div>
                        </div>

                        <div class="overall">
                            <div class="icon"><i class="fa-solid fa-lock"></i></div>
                            <div class="info">
                                <span class="uppercase">SECURE SHOPPING</span><br/>
                                <span class="light">You're in safe hands</span>
                            </div>
                        </div>

                        <div class="overall">
                            <div class="icon"><i class="fa-solid fa-tag"></i></div>
                            <div class="info">
                                <span class="uppercase">OVER 10,000 STYLES</span><br/>
                                <span class="light">We have everything you need</span>
                            </div>
                        </div>

                    </div>
                  </section>
                
                  <footer id="footer_box">
                    <section id="footer_content">
                        <div class="f_foot"> 
                            
                            <h2 class="want">Want style Ideas and Treats?</h2>
                          <div class="inputs">
                            <input type="email" class="form_input" id="email" placeholder="Enter Email *" />
                            <input type="submit" class="form_input" id="submit" value="Subscribe" />
                            </div>
                        </div>
                        <div class="s_foot">
                            <div class="img_links">
                                <h2 class="f_logo">Shopper.</h2>
                                <a href="" class="logo_link">
                                  <i class="fa-brands fa-facebook gray"></i>
                
                                </a>  
                                <a href="" class="logo_link">
                                   <i class="fa-brands fa-youtube gray"></i>
                                </a>
                                <a href="" class="logo_link">
                                   <i class="fa-brands fa-twitter gray"></i>
                                </a>  
                                <a href="" class="logo_link">
                                    <i class="fa-brands fa-instagram gray"></i>
                                </a>
                                <a href="" class="logo_link">
                                   <i class="fa-brands fa-medium gray"></i>
                                </a>
                            </div>
                          <div class="space">
                            <div class="other_links">
                                <span class="bold">SUPPORT</span><br/>
                                <a href="" class="block_links">Contact us</a>
                                <a href="" class="block_links">FAQs</a>
                                <a href="" class="block_links">Size Guide</a>
                                <a href="" class="block_links">Shipping & Returns</a>
                            </div>

                            <div class="other_links">
                                <span class="bold">SHOP</span><br/>
                                <a href="" class="block_links">Men's Shopping</a>
                                <a href="" class="block_links">Women's Shopping</a>
                                <a href="" class="block_links">Kid's Shopping</a>
                                <a href="" class="block_links">Discounts</a>
                            </div>

                            <div class="other_links">
                                <span class="bold">COMPANY</span><br/>
                                <a href="" class="block_links">Our Story</a>
                                <a href="" class="block_links">Careers</a>
                                <a href="" class="block_links">Terms & Conditions</a>
                                <a href="" class="block_links">Privacy & Cookie Policy</a>
                            </div>
                            <div class="other_links">
                                <span class="bold">CONTACT</span><br/>
                                <a href="" class="block_links">1-202-555-0105</a>                      
                                <a href="" class="block_links">1-202-555-0106</a>
                                <a href="" class="block_links">help@shopper.com</a>
                            </div>
                          </div>
                        </div>
                      
                        <div id="extras">
                            <p class="copy">&copy; 2022 All rights reserved. Designed by Ifeoluwa.</p>
                            <div class="pay">
                            {/* <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/mastercard.svg" class="payments" />
                            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/visa.svg" class="payments" />
                            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/amex.svg" class="payments" />
                            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/paypal.svg" class="payments" />
                            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/maestro.svg" class="payments" /> */}
                            </div>
                        </div>
                    </section>
                  </footer>
</>
  )
}

export default Footers