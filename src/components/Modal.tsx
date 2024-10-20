import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { ModalHandle, ModalProps } from '../interfaces';
import Button from './Button';

const Modal = forwardRef<ModalHandle, ModalProps>(({ children, buttonCaption }, ref) => {
	const dialog = useRef<HTMLDialogElement>(null);
	useImperativeHandle(ref, () => {
		return {
			open() {
				if (dialog.current) {
					dialog.current.showModal();
				}
			},
		};
	});

	return createPortal(
		<dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
			{children}
			<form method="dialog" className="mt-4 text-right ">
				<Button>{buttonCaption}</Button>
			</form>
		</dialog>,
		document.getElementById('modal-root') as HTMLElement
	);
});

export default Modal;
