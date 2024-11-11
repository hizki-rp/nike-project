import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
	return (
		<header className="padding-x py-8 z-10 absolute w-full">
			<nav className="flex justify-between max-conter items-center xl:padding-l xl:padding-r  ">
				<a href="#">
					<img src={headerLogo} alt="Logo" width={140} height={29} />
				</a>
				<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat leading-normal text-lg text-slate-gray  "
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className="hidden max-lg:block ">
					<img src={hamburger} width={23} />
				</div>
			</nav>
		</header>
	);
};

export default Nav;
