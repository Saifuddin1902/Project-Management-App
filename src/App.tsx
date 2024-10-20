import { useState } from 'react';
import { NewProject } from './components/NewProject';
import { NoProjectSelected } from './components/NoProjectSelected';
import { SideBar } from './components/SideBar';

interface ProjectState {
	selectedProjectID: string | null | undefined;
	projects: object[];
}

const App = () => {
	const [projectState, setProjectState] = useState<ProjectState>({
		selectedProjectID: undefined,
		projects: [],
	});

	const handleStartAddProject = () => {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectID: null,
			};
		});
	};
	let content;
	if (projectState.selectedProjectID === null) {
		content = <NewProject />;
	} else if (projectState.selectedProjectID === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8 ">
			<SideBar onStartAddProject={handleStartAddProject} />
			{content}
		</main>
	);
};

export default App;
