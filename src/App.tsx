import { useState, useCallback } from 'react';
import { NewProject } from './components/NewProject';
import { NoProjectSelected } from './components/NoProjectSelected';
import { SideBar } from './components/SideBar';
import SelectedProject from './components/SelectedProject';
import { ProjectData } from './interfaces';

interface ProjectState {
	selectedProjectID: number | null | undefined;
	projects: Project[];
}

interface Project {
	id: number;
	title: string;
	description: string;
	dueDate: string;
}

const App = () => {
	const [projectState, setProjectState] = useState<ProjectState>({
		selectedProjectID: undefined,
		projects: [],
	});

	const handleStartAddProject = useCallback(() => {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectID: null,
		}));
	}, []);

	const handleAddProject = (projectData: ProjectData) => {
		setProjectState((prevState) => {
			const newId = Math.round(Math.random() * 100) + 1;
			const newProject = {
				...projectData,
				id: newId,
			};
			return {
				...prevState,
				projects: [...prevState.projects, newProject],
				selectedProjectID: undefined,
			};
		});
	};

	const handleCancel = () => {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectID: undefined,
		}));
	};

	const handleSelectProject = (id: number) => {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectID: id,
		}));
	};

	const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectID);

	let content = <SelectedProject project={selectedProject} />;
	if (projectState.selectedProjectID === null) {
		content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancel} />;
	} else if (projectState.selectedProjectID === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<SideBar onSelectProject={handleSelectProject} projects={projectState.projects} onStartAddProject={handleStartAddProject} />
			{content}
		</main>
	);
};

export default App;
