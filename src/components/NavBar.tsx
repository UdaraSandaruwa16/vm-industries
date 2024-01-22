import { useState } from "react";
import logo from "../assets/logo.png";
import logoBlack from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
import { navData } from "../navData";
import useResize from "../useResize";
import MobileNav from "./MobileNav";
import { useLocation } from "react-router-dom";
import AboutData from "../components/AboutData";
import GalleryData from "./GalleryData";
import ProductData from "./ProductData";
import ContactData from "./ContactData";

function NavBar() {
	const { size } = useResize();
	const [show, setShow] = useState(false);
	const [showMobile, setShowMobile] = useState(false);
	const [target, setTarget] = useState<string | null>(null);
	const location = useLocation();
	const headerWhite = location.pathname === "/store";

	function ToggleLinks() {
		return target === "About" ? (
			<AboutData Navdata={navData.about} />
		) : target === "Products" ? (
			<GalleryData Navdata={navData.products} />
		) : target === "Gallery" ? (
			<ProductData Navdata={navData.gallery} />
		) : target === "Contact" ? (
			<ContactData Navdata={navData.contact} />
		) : null;
	}

	return (
		<header
			className={`${show ? "bg-[grayish]" : "bg-[#11111F]"}  ${
				headerWhite ? "bg-[#fbfbfd]" : "bg-[#11111F]"
			} fixed top-0 left-0 z-[99] grid h-[50px] w-full shadow-sm`}
		>
			{size >= 768 ? (
				<>
					<nav className={`mx-auto hidden w-full max-w-[1200px] md:block`}>
						<ul
							className={`m-auto flex h-full max-w-[950px] items-center px-[20px] text-[15px] font-light ${
								headerWhite ? "text-grayish" : "text-whites"
							} md:justify-between`}
						>
							<Link to="/" className="w-fit">
								<img
									src={headerWhite ? logoBlack : logo}
									className="h-[45px] w-[100px]"
									alt=""
								/>
							</Link>
							<NavLink
								className={`hidden ${
									headerWhite
										? "text-dark hover:text-grayish"
										: "text-[#C1A01E] hover:text-white"
								}  md:flex`}
								to="/"
								onMouseOver={() => (setShow(true), setTarget("about"))}
								onClick={() => setShow(false)}
							>
								About
							</NavLink>
							<NavLink
								className={`hidden ${
									headerWhite
										? "text-dark  hover:text-grayish"
										: "text-[#C1A01E] hover:text-white"
								}  md:flex`}
								to="/"
								onMouseOver={() => (setTarget("cases"), setShow(true))}
								onClick={() => setShow(false)}
							>
								Products
							</NavLink>
							<NavLink
								className={`hidden ${
									headerWhite
										? "text-dark  hover:text-grayish"
										: "text-[#C1A01E] hover:text-white "
								} md:flex`}
								to="/"
								onMouseOver={() => (setShow(true), setTarget("services"))}
								onClick={() => setShow(false)}
							>
								Gallery
							</NavLink>
							<NavLink
								className={`hidden ${
									headerWhite
										? "text-dark  hover:text-grayish"
										: "text-[#C1A01E] hover:text-white"
								}  md:flex`}
								to="/"
								onMouseOver={() => (setShow(true), setTarget("contact"))}
								onClick={() => setShow(false)}
							>
								Contact
							</NavLink>

							{show && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3, delay: 0.2 }}
									className={`overlay absolute top-0 left-0 -z-20 ${
										show ? "h-screen" : "h-0"
									} w-full blur`}
									onMouseOver={() => setShow(false)}
								></motion.div>
							)}
							<AiOutlineClose
								size={20}
								tabIndex={0}
								className="hidden cursor-pointer
									font-[12px] text-[#C1A01E]"
							/>
							<AiOutlineSearch
								className="text-[#C1A01E] cursor-pointer "
								size={20}
								tabIndex={0}
							/>
							<BsBag
								className="cursor-pointer text-[20px] text-[#C1A01E] md:text-[17px]"
								tabIndex={0}
							/>
							<HiMenuAlt4
								className="cursor-pointer hover:text-[#C1A01E] md:hidden"
								size={20}
								tabIndex={0}
								onClick={() => setShowMobile((prev) => !prev)}
							/>
						</ul>
					</nav>
					<motion.div
						initial={{ height: "0" }}
						animate={show ? { height: "50px" } : { height: "0" }}
						transition={{ duration: 0.01 }}
						className={`my-trans absolute top-0 left-0 -z-10 overflow-hidden${
							show ? "min-h-auto  h-screen md:h-[440px]" : "h-0"
						} w-full ${headerWhite ? "bg-[#ffff]" : "bg-grayish"}`}
					>
						{show && (
							<motion.nav
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.4, delay: 0.3 }}
								className="mx-auto flex h-full max-w-[950px] flex-col justify-center overflow-hidden pt-[50px] pb-[50px]"
							>
								{show && ToggleLinks()}
							</motion.nav>
						)}
					</motion.div>
				</>
			) : (
				<MobileNav
					setTarget={setTarget}
					setShowMobile={setShowMobile}
					ToggleLinks={ToggleLinks}
					showMobile={showMobile}
				/>
			)}
		</header>
	);
}

export default NavBar;
