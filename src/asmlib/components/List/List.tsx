import { forwardRef } from 'react';

import asm from 'asm-ts-scripts';

import { ReactChildren } from '../_LAB/ReactChildren';

import s from './List.module.scss';

type ComponentElementType = HTMLUListElement;

interface List extends ReactHTMLElementAttributes<ComponentElementType> {
	type?: 'unordered' | 'custom';
	margin?: number;
}

export const List = forwardRef<ComponentElementType, List>(({
	type,
	margin,
	children,
	className,
	...rest
}: List, ref) => {
	const componentClass = [
		type === 'unordered' && s[type],
		type === 'custom' && s[type],
	];

	const componentStyle = {
		marginLeft: margin && `${margin}px`,
	};

	return (
		<ul
			className={asm.join(s.List, className, componentClass)}
			ref={ref}
			style={componentStyle}
			{...rest}
		>
			<ReactChildren style={componentStyle}>{children}</ReactChildren>
		</ul>
	);
});

List.displayName = 'List';
