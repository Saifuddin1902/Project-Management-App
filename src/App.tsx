import { useState, useCallback } from 'react';
import { NewProject } from './components/NewProject';
import { NoProjectSelected } from './components/NoProjectSelected';
import { SideBar } from './components/SideBar';
import SelectedProject from './components/SelectedProject';
import { ProjectData } from './interfaces';

interface Task {
	text: string;
	projectId: number;
	id: number;
}

interface ProjectState {
	selectedProjectID: number | null | undefined;
	projects: Project[];
	tasks: Task[];
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
		tasks: [],
	});

	const handleAddTask = (text: string) => {
		setProjectState((prevState) => {
			const newTaskId = Math.round(Math.random() * 100) + 1;
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectID ?? 0,
				id: newTaskId,
			};
			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks],
			};
		});
	};
	const handleDeleteTask = (id: number) => {
		setProjectState((prevState) => {
			return {
				...prevState,
				tasks: prevState.tasks.filter((task) => task.id !== id),
			};
		});
	};

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

	const handleDeleteProject = () => {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectID: undefined,
				projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectID),
			};
		});
	};

	const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectID);

	let content = <SelectedProject tasks={projectState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} project={selectedProject} onDelete={handleDeleteProject} />;
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
