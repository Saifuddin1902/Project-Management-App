import Button from './Button';

interface SideBarProps {
	onStartAddProject: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ onStartAddProject }) => {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
			<Button onClick={onStartAddProject}>Add a project</Button>
			<ul></ul>
		</aside>
	);
};
