import useResize from "../useResize";
import Footer_RegularTexts from "./Footer_RegularTexts";
import Footer_accordion from "./Footer_accordion";

function Footer() {
	const { size } = useResize();
	return (
		<div className="bg-[#292930]">
			<div className="mx-auto w-full max-w-[950px] px-5 py-5 ">
				<div className=" my-hr text-[12px] font-normal text-[#ffffff]">
				
				</div>
				{size >= 830 ? <Footer_RegularTexts /> : <Footer_accordion />}
			</div>
		</div>
	);
}

export default Footer;
