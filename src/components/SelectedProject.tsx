interface SelectedProjectProps {
	project?: Project;
}

interface Project {
	id: number;
	title: string;
	description: string;
	dueDate: string;
}

const SelectedProject: React.FC<SelectedProjectProps> = ({ project }) => {
	if (!project) {
		return <p>No project selected.</p>; // Gracefully handle undefined project
	}

	const { title, description, dueDate } = project;
	const formattedDate = new Date(dueDate).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});

	return (
		<div className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
					<button className="text-stone-600 hover:text-stone-950">Delete</button>
				</div>
				<p className="mb-4 text-stone-400">{formattedDate}</p>
				<p className="text-stone-600 whitespace-pre-wrap">{description}</p>
			</header>
			TASKS
		</div>
	);
};

export default SelectedProject;
