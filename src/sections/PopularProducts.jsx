import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
	return (
		<section id="products" className="max-container max-sm:mt-10">
			<div className="flex flex-col justify-start gap-5">
				<h2 className="text-4xl font-palanquin font-bold">
					Our <span className="text-coral-red"> Popular</span> Products
				</h2>
				<p className="xl:max-w-lg mt-2 font-montserrat text-slate-gray">
					Experience quality and style with our top-notch quality and style with
					our sought-after selections. Discover a world of comfrort, design and
					value.
				</p>

				<div className="mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sma:gap-4 gap-14">
					{products.map((product) => (
						<PopularProductCard key={product.name} {...product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default PopularProducts;
