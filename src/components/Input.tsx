import { InputProps } from '../interfaces';
const nameFormatter = (name: string) => {
	return name.replace(' ', '-').toLowerCase();
};

export const Input: React.FC<InputProps> = ({ name, isTextArea }) => {
	return (
		<p className="flex flex-col gap-1 my-4">
			<label htmlFor={name.toLowerCase()} className="text-sm font-bold uppercase text-stone-500">
				{name}
			</label>
			{isTextArea ? (
				<textarea
					className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
					name={nameFormatter(name)}
					id={nameFormatter(name)}
				></textarea>
			) : (
				<input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="text" />
			)}
		</p>
	);
};
