import { forwardRef, useRef } from 'react';

import asm from 'asm-ts-scripts';

import { Block } from '../blocks/Block';
import { SvgIcon } from '../SvgIcon';
import { Typography } from '../Typography';

import s from './AccordionListItem.module.scss';

type ComponentElementType = HTMLLIElement;

interface AccordionListItem extends ReactHTMLElementAttributes<ComponentElementType> {
	heading: string | string[];
	text?: string | string[];
	headingComponent?: TypographyVariants;
	textComponent?: TypographyVariants;
	active: boolean;
	fullwidth?: boolean;
	iconSize?: ComponentSizes;
	onToggle: () => void;
	disabled?: boolean;
}

export const AccordionListItem = forwardRef<ComponentElementType, AccordionListItem>(({
	heading,
	text,
	headingComponent,
	textComponent,
	active,
	fullwidth,
	iconSize,
	onToggle,
	disabled,
	className,
	children,
	...rest
}: AccordionListItem, ref) => {
	const textContentRef = useRef<HTMLDivElement>(null);

	const componentClass = [
		disabled && s.disabled,
		active && s.active,
		fullwidth && s.fullwidth,
	];

	const textContentStyle = active
		? { height: textContentRef.current?.scrollHeight }
		: { height: '0px' };

	return (
		<li
			className={asm.join(s.AccordionListItem, className, componentClass)}
			ref={ref}
			{...rest}
		>
			<Block className={asm.join(s.heading, s.clickable)} onClick={onToggle}>
				<SvgIcon icon="icon--chevron-down" className={s.icon} size={iconSize} />
				{
					typeof heading === 'string'
						? <Typography component={headingComponent || 'h3'}>{heading}</Typography>
						: heading.map((item) => (
							<Typography component={headingComponent || 'h3'} key={item}>{item}</Typography>
						))
				}
			</Block>
			<Block
				className={asm.join(s.textContainer)}
				style={textContentStyle}
				ref={textContentRef}
			>
				{!text && children}
				{text && Array.isArray(text) && text.map((item) => (
					<Typography component={textComponent || 'p1'} key={item}>{item}</Typography>
				))}
				{text && typeof text === 'string' && <Typography component={textComponent || 'p1'}>{text}</Typography>}
			</Block>
		</li>
	);
});

AccordionListItem.displayName = 'AccordionListItem';