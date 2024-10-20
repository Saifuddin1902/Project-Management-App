import Button from './Button';

interface SideBarProps {
	onStartAddProject: () => void;
	projects: Project[];
}

interface Project {
	id: number;
	title: string;
	description: string;
	dueDate: string;
}

export const SideBar: React.FC<SideBarProps> = ({ onStartAddProject, projects }) => {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
			<Button onClick={onStartAddProject}>Add a project</Button>
			<ul className="mt-6">
				{projects.map((project) => (
					<li key={project.id}>
						<button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-800 ">{project.title}</button>
					</li>
				))}
			</ul>
		</aside>
	);
};
