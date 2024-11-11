import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
	return (
		<section className="max-container flex justify-center flex-wrap gap-9 mt-20 ">
			{services.map((service) => (
				<ServiceCard {...service} />
			))}
		</section>
	);
};

export default Services;
