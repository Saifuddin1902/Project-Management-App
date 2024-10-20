import { useRef } from 'react';
import { Input } from './Input';
import { ProjectData } from '../interfaces';
interface NewProjectProp {
	onAddProject: (projectData: ProjectData) => void;
}
export const NewProject: React.FC<NewProjectProp> = ({ onAddProject }) => {
	const title = useRef<HTMLInputElement>(null);
	const description = useRef<HTMLTextAreaElement>(null);
	const dueDate = useRef<HTMLInputElement>(null);

	const handleSave = () => {
		const enteredTitle = title.current?.value;
		const enteredDescription = description.current?.value;
		const enteredDate = dueDate.current?.value;

		if (enteredTitle && enteredDescription && enteredDate) {
			onAddProject({
				title: enteredTitle,
				description: enteredDescription,
				dueDate: enteredDate,
			});
		}
	};

	return (
		<div className="w-[35rem] mt-16">
			<menu className="flex items-center justify-end gap-4 my-4">
				<li>
					<button className="text-stone-800 hover:text-stone-900">Cancel</button>
				</li>
				<li>
					<button onClick={handleSave} className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
						Save
					</button>
				</li>
			</menu>
			<div>
				<Input type="text" ref={title} name="Title" isTextArea={false} />
				<Input type="textarea" ref={description} name="Description" isTextArea={true} />
				<Input type="date" ref={dueDate} name="Due Date" isTextArea={false} />
			</div>
		</div>
	);
};
