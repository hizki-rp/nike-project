import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
	return (
		<footer>
			<div>
				<div>
					<a href="/">
						<img src={footerLogo} width={150} height={46} />
					</a>
					<p className="mt-6 text-white-400 font-montserrat text-base leading-7 sm:max-w-sm">
						Get shoes ready for the new term at your nearest Nike store. Find
						perfect Size In Store. Get Rewards
					</p>
					<div className="mt-8 items-center flex gap-5">
						{socialMedia.map((icon) => (
							<div className="flex justify-center items-center  bg-white hover:bg-coral-red w-12 h-12 rounded-full">
								<img src={icon.src} alt={icon.alt} width={24} height={24} />
							</div>
						))}
					</div>
				</div>
				<div className="mt-20 flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
					{footerLinks.map((section) => (
						<div>
							<h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
								{section.title}
							</h4>
							<ul>
								{section.links.map((link) => (
									<li
										className="font-montserrat leading-normal text-base  text-white-400 mt-3 hover:text-slate-gray cursor-pointer"
										key={link.name}
									>
										<a href={link.link}>{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center ">
				<div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer ">
					<img
						src={copyrightSign}
						alt="copy right sign"
						width={20}
						height={20}
						className="rounded-full m-0"
					/>
					<p className="font-montserrat cursor-pointer">
						{" "}
						Copyright. All rights reserved.
					</p>
				</div>
				<p>Terms and conditions</p>
			</div>
		</footer>
	);
};

export default Footer;