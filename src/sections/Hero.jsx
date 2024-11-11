import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import { useState } from "react";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
	return (
		<section
			id="home"
			className="max-container flex xl:flex-row flex-col justify-center w-full min-h-screen gap-10 xl:mx-16 "
		> 
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
				<p className="font-montserrat text-xl text-coral-red">
					Our Summer Collection
				</p>
				<h1 className="font-palanquin text-8xl max-sm:text-[72px] max-sm:leading[82] font-bold ">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The new Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3 pr-1">Nike</span>
					Shoes
				</h1>
				<p className="font-montserrat text-slate-gray text-lg mt-6 leading-8 ">
					Discover stylish Nike arrivals, quality comfort, innovation for your
					active life
				</p>

				<Button label="Shop now" iconURL={arrowRight} />

				<div className="flex justify-start items-start flex-wrap mt-10 gap-16 ">
					{statistics.map((stat) => (
						<div>
							<p className="font-palanquin leading-7 text-3xl font-bold">
								{stat.value}
							</p>
							<p className="font-montserrat">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
			<div className="relative flex-1 flex justify-center items-center xl:mih-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
				<img
					src={bigShoeImg}
					alt="shoe collection"
					width={610}
					height={500}
					className="object-contain relative z-10 "
				/>

				<div className="flex gap-4 sm:gap-6 absolute -bottom-[11%] sm:left-[10%] max-sm:px-6">
					{shoes.map((shoe) => (
						<div>
							<ShoeCard
								imgURL={shoe}
								changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
