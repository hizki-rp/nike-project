import React from "react";
import {
	Hero,
	PopularProducts,
	CustomerReviews,
	Services,
	SpecialOffer,
	SuperQuality,
	Footer,
	Subscribe,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
	<main className="relative">
		<Nav />
		<section className="xl:padding-l  wide:padding-r padding-b">
			<Hero />
		</section>
		<section className="xl:padding-l wide:padding-r padding">
			<PopularProducts />
		</section>
		<section className="xl:padding-l wide:padding-r pa<dding />">
			<SuperQuality />
		</section>
		<section className="xl:padding-1 wide:padding-r paddin-x py-10">
			<Services />
		</section>
		<section className="xl:padding-1 wide:padding-r padding">
			<SpecialOffer />
		</section>
		<section className="bg-pale-blue padding">
			<CustomerReviews />
		</section>
		<section className="padding-x sm:py-32 py-16 w-full">
			<Subscribe />
		</section>
		<section className="bg-black padding-x padding-t pb-8">
			<Footer />
		</section>
	</main>
);

export default App;
