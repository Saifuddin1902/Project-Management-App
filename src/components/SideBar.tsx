import Button from './Button';

interface SideBarProps {
	onStartAddProject: () => void;
	onSelectProject: (id: number) => void;
	projects: Project[];
	selectedProjectId?: number;
}

interface Project {
	id: number;
	title: string;
	description: string;
	dueDate: string;
}

export const SideBar: React.FC<SideBarProps> = ({ onStartAddProject, projects, onSelectProject, selectedProjectId }) => {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
			<Button onClick={onStartAddProject}>Add a project</Button>
			<ul className="mt-6">
				{projects.map((project) => {
					let cssClass = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800';
					if (project.id === selectedProjectId) {
						cssClass += ' bg-stone-800 text-stone-200';
					} else {
						cssClass += ' text-stone-400';
					}
					return (
						<li key={project.id}>
							<button onClick={() => onSelectProject(project.id)} className={cssClass}>
								{project.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};
