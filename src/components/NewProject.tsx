import { useRef } from 'react';
import { Input } from './Input';
import Modal from './Modal';
import { ModalHandle } from '../interfaces';
import { ProjectData } from '../interfaces';
interface NewProjectProp {
	onAddProject: (projectData: ProjectData) => void;
	onCancelProject: () => void;
}

const checkEmptyInput = (title: string, description: string, dueDate: string): boolean => {
	if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
		return true;
	}
	return false;
};

export const NewProject: React.FC<NewProjectProp> = ({ onAddProject, onCancelProject }) => {
	const modal = useRef<ModalHandle>(null);
	const title = useRef<HTMLInputElement>(null);
	const description = useRef<HTMLTextAreaElement>(null);
	const dueDate = useRef<HTMLInputElement>(null);

	const handleSave = () => {
		const enteredTitle = title.current?.value;
		const enteredDescription = description.current?.value;
		const enteredDate = dueDate.current?.value;

		if (enteredTitle && enteredDescription && enteredDate) {
			if (checkEmptyInput(enteredTitle, enteredDescription, enteredDate)) {
				modal.current?.open();
			} else {
				onAddProject({
					title: enteredTitle,
					description: enteredDescription,
					dueDate: enteredDate,
				});
			}
		} else {
			modal.current?.open();
		}
	};

	return (
		<>
			<Modal ref={modal} buttonCaption="Close">
				<h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
				<p className="text-stone-600 mb-4">Oops.. Looks like you forgot to enter a value</p>
				<p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>
			</Modal>
			<div className="w-[35rem] mt-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button onClick={onCancelProject} className="text-stone-800 hover:text-stone-900">
							Cancel
						</button>
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
		</>
	);
};
