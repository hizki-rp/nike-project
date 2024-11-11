import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
	return (
		<section className="max-container">
			<h3 className="font-palanquin text-center font-bold text-4xl  mt-4">
				What Our <span className="text-coral-red">Customers</span> Say?
			</h3>
			<p className="mt-4 m-auto info-text max-w-lg text-center ">
				Hear genuine stories from satisfied custoers about their exceptional
				experiences with us.
			</p>

			<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
				{reviews.map((review) => (
					<ReviewCard
						imgURL={review.imgURL}
						customerName={review.customerName}
						rating={review.rating}
						feedback={review.feedback}
					/>
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;
