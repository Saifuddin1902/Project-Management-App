import { ReactNode } from 'react';
export interface InputProps {
	name: string;
	isTextArea: boolean;
	type: string;
}
export interface ProjectData {
	title: string;
	description: string;
	dueDate: string;
}

export interface ModalProps {
	children: ReactNode;
	buttonCaption: string;
}

export interface ModalHandle {
	open: () => void;
}
