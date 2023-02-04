import React from 'react'

const Blogs = () => {
  return (
    <section id="blog">
    <div id="blog_posts">
        <div class="blog_head">
         <span class="gray">Our Blog</span>
            <p class="head">Latest in Blog</p>
        </div>

        <div class="blog_post_box">
            <div class="blog">
                <img src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="blogpost1 blogimg" alt="clothes on hangers"/>
                <p class="blogp_decrip">
                    <span class="date">Fashion / Sept 20, 2022</span>
                    <br/>
                    What to wear this chrismas to have a lovely holiday with loved ones.
                </p>
            </div>
            <div class="blog">
                <img src="https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="blogpost2 blogimg" alt="Orgaics for skincare"/>
                <p class="blogp_decrip">
                    <span class="date">Orgaics and skincare / Oct 3, 2022</span>
                    <br/>
                    Best products to use for flawless and smooter skin.
                </p>
            </div>
            <div class="blog">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="blogpost3 blogimg" alt="shoe"/>
                <p class="blogp_decrip">
                    <span class="date">Nike and shoes / Nov 10, 2022</span>
                    <br/>
                    Nike to release 'The Jock's Special' next year.
                </p>
            </div>
        </div>
        <p class="centre">Discover more</p>

    </div>
    </section>
  )
}

export default Blogs