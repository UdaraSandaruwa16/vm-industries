import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { swiperData } from "../swiperData";
import useResize from "../useResize";

function ProductSwiper() {
	const { size } = useResize();

	return (
		<div className="pb-10 overflow-hidden">
			<Swiper
				autoplay={{ delay: 2000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				modules={[Pagination, Autoplay]}
				spaceBetween={15}
				slidesPerView={1}
				centeredSlides={true}
				loop={true}
			>
				{swiperData.map((data, _index) => {
					return (
						<SwiperSlide key={data.name}>
							<div className="relative w-full h-full cursor-grab">
								<div className="h-[550px] w-full">
									<img
										className="object-cover object-top w-full h-full rounded-md md:object-center"
										src={size <= 750 ? data.mobile_img : data.img}
										alt={data.name}
									/>
								</div>
								<div className="absolute left-0 flex flex-wrap items-center justify-center p-2 text-center text-white bottom-12 md:left-14">
									<button className="flex items-center justify-center gap-3 px-5 py-3 mb-3 mr-0 font-bold text-black transition-all bg-[#C1A01E] cursor-pointer rounded-3xl hover:bg-[#C1A01E] active:scale-x-105 active:bg-[#e2c758] md:mb-0 md:mr-10 sha">
										Enjoy premium products
									</button>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
				<div className="mt-10"></div>
			</Swiper>
		</div>
	);
}

export default ProductSwiper;
