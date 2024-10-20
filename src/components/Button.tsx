interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<div>
			<button {...props} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-white hover:bg-white hover:text-stone-800 hover:border-black">
				{children}
			</button>
		</div>
	);
};

export default Button;
