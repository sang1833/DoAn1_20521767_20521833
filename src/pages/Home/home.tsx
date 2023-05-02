import React, { useState, useEffect } from "react";

import Hero from "@/components/Hero";
import Room from "@/components/Room";
import Guarantee from "@/components/Guarantee";
import Inspiration from "@/components/Inspiration";
import ImageSlider from "@/components/ImageSlider";

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <div className="py-7 flex justify-center text-xl text-black text-center">Trải nghiệm những thiết kế sang trọng, chất lượng cao dành cho ngôi nhà hiện đại</div>
            <Room></Room>
            <Guarantee></Guarantee>
            <div className="py-7 flex justify-center text-xl text-black text-center">Sản phẩm giá tốt</div>
            <ImageSlider></ImageSlider>
            <div className="py-7 flex justify-center text-xl text-black text-center">Luôn thấu hiểu khách hàng, cẩn thận và chuyên nghiệp là châm ngôn của chúng tôi</div>
            <Inspiration></Inspiration>
        </>
    )
}

export default Home