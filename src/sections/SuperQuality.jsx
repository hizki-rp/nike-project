import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
	return (
		<section
			id="about-us"
			className="w-full max-container flex max-lg:flex-col items-center justify-between gap-10  "
		>
			<div className="flex flex-1 flex-col max-xl:padding-x ">
				<h2 className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
					We Provide You
					<span className="text-coral-red"> Super </span>
					<br />
					<span className="text-coral-red">Quality </span>
					Shoes
				</h2>
				<p className="mt-8 lg:max-w-lg info-text ">
					Ensuring premium comfort and style, our meticulously crafted footwear
					is designed to elevate your experience providing you with unmatched
					quality, innovation and a touch of elegance.
				</p>

				<p className="mt-6 lg:max-w-lg info-text">
					Our dedication to detail and experience ensures your satisfaction
				</p>

				<div className="mt-11">
					<Button label="View details" />
				</div>
			</div>
			<div className="flex-1 flex justify-center items-center object-contain">
				<img src={shoe8} alt="shoes8" width={570} height={522} />
			</div>
		</section>
	);
};

export default SuperQuality;
