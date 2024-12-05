import React from "react";
import bgImage from '../imgs/bg.jpg'

function Hero() {
    return (
        <div className="hero" style={{background: `url(${bgImage})`}}>
            <h1>특별한 숙소를 예약해보세요</h1>
            <p>에어비엔비에서 독특한 숙소를 찾아보세요.</p>
        </div>
    );

}

export default Hero;