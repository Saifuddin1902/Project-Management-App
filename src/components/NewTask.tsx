import { useState } from 'react';

interface NewTasksProps {
	onAdd: (enteredTask: string) => void;
}

const NewTask: React.FC<NewTasksProps> = ({ onAdd }) => {
	const [enteredTask, setEnteredTask] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredTask(event.target.value);
	};

	const handleClick = () => {
		onAdd(enteredTask);
		setEnteredTask('');
	};

	return (
		<div className="flex items-center gap-4">
			<input type="text" value={enteredTask} onChange={handleChange} className="w-64 px-2 py-1 rounded-sm bg-stone-300" />
			<button onClick={handleClick} className="text-stone-700 hover:text-stone-950">
				Add Task
			</button>
		</div>
	);
};

export default NewTask;
