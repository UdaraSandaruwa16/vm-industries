import { Link } from "react-router-dom";
import awradimg from "../assets/award.jpg";

function Footer_RegularTexts() {
	return (
		<div className="pt-2">
			<div className="my-grid2">
				<div className="flex flex-col gap-3">
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#C1A01E]">Contact US</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#ffffff]">
							<Link className="hover:underline" to={"/"}>
								test@gmail.com
							</Link>
							<li>Mobile : 077 777 7777</li>
							<li>Address : Colombo 7</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#C1A01E]">Products</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#ffffff]">
							<Link className="hover:underline" to={"/"}>
								Palm Oil
							</Link>
							<Link className="hover:underline" to={"/"}>
								Coconut Oil
							</Link>
							<Link className="hover:underline" to={"/"}>
								Rice bran Oil
							</Link>
							<Link className="hover:underline" to={"/"}>
								Coconut Wax
							</Link>
						</ul>
					</div>
				</div>
				<div>
					<h3 className="mb-2 mt-4 text-[12px] font-medium">
						<span className="text-[#C1A01E]">Gallery</span>
					</h3>
					<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#ffffff]">
						<Link className="hover:underline" to={"/"}>
							Products
						</Link>
						<Link className="hover:underline" to={"/"}>
							Certificates
						</Link>
					</ul>
				</div>
				<div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#C1A01E]">Careers</span>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#ffffff]">
							<Link className="hover:underline" to={"/"}>
								Join with us
							</Link>
						</ul>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div>
						<img
							alt=""
							src={awradimg}
							className="object-cover p-5 mx-auto opacity-30 md:opacity-100 lg:opacity-100"
						/>
					</div>
				</div>
			</div>
			<footer className="mt-10 text-[12px]">
				<div className="my-hr">
					<p className="pb-3 text-[#ffffff]">
						More ways to contact us :
						<a className="px-1 underline text-apple-blue" href="#">
							Join our whatsapp
						</a>
						or
						<a className="px-1 underline text-apple-blue" href="#">
							viber
						</a>
					</p>
				</div>
				<div className="flex justify-between">
					<div className="flex flex-col items-start justify-between gap-1 pt-3">
						<p className="text-[#C1A01E]">
							Copyright © 2024 VM Industry. All rights reserved.
						</p>
						<p className="text-[#ffffff]">
							Privacy | Policy | Terms of Use | Legal Site
							Map
						</p>
					</div>
					<p className="pt-3 text-[#C1A01E]">Sri Lanka</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer_RegularTexts;
