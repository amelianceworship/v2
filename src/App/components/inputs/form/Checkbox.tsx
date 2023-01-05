import React from 'react';
import { FieldError, FieldValues } from 'react-hook-form';

import './Checkbox.scss';

interface IProps {
	register: FieldValues;
	errors: Record<string, FieldError> | undefined;
	label: string;
	placeholder?: string;
	children?: React.ReactNode;
	testId?: string;
}

export function Checkbox({
	register, errors, label, children, testId,
}: IProps) {
	return (
		<div className="checkbox">
			<span className="h3 checkbox__title">{children}</span>
			<label className="checkbox__container">
				<input
					type="checkbox"
					className="checkbox__input"
					{...register}
					data-testid={testId}
				/>
				<span className="p1 checkbox__label">{label}</span>
			</label>
			<p className="p2 checkbox__error input-error">
				{(errors && errors[register.name] && errors[register.name].message) || ''}
			</p>
		</div>
	);
}