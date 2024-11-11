const Button = ({
	label,
	iconURL,
	backgroundColor,
	borderColor,
	textColor,
	fullWidth,
}) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-6 py-3 border font-montserrat text-lg leading-none rounded-full ${
				fullWidth && "w-full"
			}
		
				${
					backgroundColor
						? `${backgroundColor} ${textColor} ${borderColor}`
						: "bg-coral-red  text-white border-coral-red"
				}

			`}
		>
			{label}
			{iconURL && (
				<img
					src={iconURL}
					alt="arrow right icon"
					className="ml-2 rounded-full w-5 h-5 "
				/>
			)}
		</button>
	);
};

export default Button;