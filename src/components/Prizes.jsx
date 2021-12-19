import React from "react";

function Prizes() {
  return (
    <div className="p-16">
      <div className="text-5xl text-white font-black mb-8 text-center md:text-left">PRIZES</div>
      <div className="flex flex-col md:flex-row text-center md:text-left gap-6">
        <div className="flex-col space-y-8 md:w-1/2">
            <div className="text-3xl text-pink-squid font-extrabold">For Div 1 & Div 2</div>
            <div className="text-2xl text-white font-semibold">1<sup>st</sup> Prize: ₹10,000</div>
            <div className="text-2xl text-white font-semibold">2<sup>nd</sup> Prize: ₹7,000</div>
            <div className="text-2xl text-white font-semibold">3<sup>rd</sup> Prize: ₹3,000</div>
        </div>
        <div className="flex-col space-y-8 md:w-1/2">
            <div className="text-3xl text-pink-squid font-extrabold">For Indian Participants</div>
            <div className="text-xl text-white font-semibold">1<sup>st</sup> Prize: ₹4,000</div>
            <div className="text-xl text-white font-semibold">2<sup>nd</sup> Prize: ₹2,000</div>
            <div className="text-3xl text-pink-squid font-extrabold">For Div 3</div>
            <div className="text-xl text-white font-semibold">1<sup>st</sup> Prize: ₹2,000</div>
        </div>
      </div>
    </div>
  );
}

export default Prizes;
