import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<section className="flex flex-col items-center justify-center">
			<img
				src={imgURL}
				alt="customer"
				width={120}
				height={120}
				className="rounded-full object-cover"
			/>
			<p className="text-center info-text mt-6 max-w-sm">{feedback}</p>
			<p className="mt-3 flex">
				<img src={star} width={30} height={30}  className="text-coral-red px-2" />
                <p className="info-text text-xl">{rating}</p>
			</p>
			<h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
		</section>
	);
};

export default ReviewCard;
