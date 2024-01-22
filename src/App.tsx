import "./index.css";
import Hero from "./components/Hero"
import rightimg from "./assets/right.jpg";
import useResize from "./useResize";
import ProductSwiper from "./components/ProductSwiper";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
	useResize();

	return (
		<>
			<main className="top-12 ">
				<div className="mx-auto max-w-[1500px]">
				<section id="hero" className="shadow-2xl ">
					<Hero/>
				</section>
	
				<section id="about" className="p-5 shadow-2xl ">
  					<div className="grid grid-cols-1 md:grid-cols-2  w-full max-w-[1500px] px-5 py-5">
    						<div className="relative h-full">
								<img
									src={rightimg}
									alt="Right"
									className="object-cover object-center h-full rounded-md"
								/>
							</div>
    						<div className="p-10">
      							<h1 className="text-[rgb(29, 29, 31)] text-[50px] tracking-[0.28] md:text-[56px]">
       								 Who we are...
      							</h1>
								<p className="text-[rgb(29, 29, 31)] text-[20px] mt-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus
									nisl eu justo tempor, vel ullamcorper ipsum faucibus. Duis congue
									ullamcorper mauris, ac porta metus faucibus eu. Vestibulum ante ipsum
									primis in faucibus orci luctus et ultrices posuere cubilia curae;
								</p>
								<p className="text-[rgb(29, 29, 31)] text-[20px] mt-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus
									nisl eu justo tempor, vel ullamcorper ipsum faucibus. Duis congue
									ullamcorper mauris, ac porta metus faucibus eu. Vestibulum ante ipsum
									primis in faucibus orci luctus et ultrices posuere cubilia curae;
								</p>
								<p className="text-[rgb(29, 29, 31)] text-[20px] mt-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus
									nisl eu justo tempor, vel ullamcorper ipsum faucibus. Duis congue
									ullamcorper mauris, ac porta metus faucibus eu. Vestibulum ante ipsum
									primis in faucibus orci luctus et ultrices posuere cubilia curae;
								</p>
    						</div>
  					</div>
				</section>

				<section id="cases" className="p-5 shadow-2xl">
					<ProductSwiper />
				</section>

				<section id="services" className="p-5 shadow-2xl">
					<ProductGrid/>
				</section>
				
				<section id="contact"  className="shadow-2xl ">
					<Footer/>
				</section>

				</div>
			</main>
		</>
	);
}
