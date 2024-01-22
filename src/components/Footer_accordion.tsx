import FAQItem from "./FooterItem";

const contactUs = {
	links: [
		"test@gmail.com",
		"test@hotmail.com",
		"Twitter",
		"Facebook",
		"Instagram",
	],
	title: "Contact Us",
};

const products = {
	title: "Products",
	links: [
		"Palm Oil",
		"Coconut Oil",
		"Rice bran Oil",
		"Coconut Wax",
	],
};
const gallery = {
	title: "Gallery",
	links: [
		"Products",
		"Certificates",
	],
};
const careers = {
	title: "Careers",
	links: [
		"Sales-person",
		"Production-supervisor",
	],
};

function Footer_accordion() {
	return (
		<div className="pt-2">
			<div className="">
				<div className="flex flex-col gap-3">
					<FAQItem links={contactUs.links} title={contactUs.title} />
					
					<FAQItem
						links={products.links}
						title={products.title}
					/>
					<FAQItem links={gallery.links} title={gallery.title} />
					<FAQItem links={careers.links} title={careers.title} />
				</div>
			</div>
			<footer className="mt-10 text-[12px]">
				<div>
					<p className="pb-3 text-[#ffffff]">
						More ways to shop:
						<a className="px-1 text-apple-blue" href="#">
							Find an Food city
						</a>
						or
						<a className="px-1 text-apple-blue" href="#">
							other retailer
						</a>
						near you. 
					</p>
				</div>
				<div className="flex flex-col items-start justify-between pt-3">
					<p className="pb-3 text-md text-[#C1A01E]">Sri Lanka</p>

					<p className="text-[#C1A01E]">
						Copyright © 2024 KS International. All rights reserved.
					</p>
					<p className="text-[#ffffff]">
						Privacy | Policy | Terms of Use | Legal Site Map
					</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer_accordion;
