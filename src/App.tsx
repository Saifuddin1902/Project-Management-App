import { useState, useCallback } from 'react';
import { NewProject } from './components/NewProject';
import { NoProjectSelected } from './components/NoProjectSelected';
import { SideBar } from './components/SideBar';
import { ProjectData } from './interfaces';
interface ProjectState {
	selectedProjectID: string | null | undefined;
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
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectID: null,
			};
		});
	}, []);

	const handleAddProject = (projectData: ProjectData) => {
		setProjectState((prevState) => {
			const newId = Math.round(Math.random() * 10) + 1;
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
	let content;
	if (projectState.selectedProjectID === null) {
		content = <NewProject onAddProject={handleAddProject} />;
	} else if (projectState.selectedProjectID === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8 ">
			<SideBar projects={projectState.projects} onStartAddProject={handleStartAddProject} />
			{content}
		</main>
	);
};

export default App;
