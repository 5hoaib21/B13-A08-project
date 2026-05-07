import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
  <div className='w-11/12 mx-auto my-10 '>
     <div
  className="hero min-h-screen rounded-2xl"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
     <Link href={'/all-tiles'}> <button className="btn btn-primary">Browser Now</button></Link>
    </div>
  </div>
</div>
  </div>
  );
};

export default Banner;