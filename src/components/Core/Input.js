import React from 'react';

export const Input = ({ label, name, type = 'text', placeholder, required }) => {
	return (
		<div className="pb-3 row">
			<label htmlFor={label} className="col-sm-12 col-form-label">
				{label}
			</label>
			<div className="col-sm-12">
				<input required={required} type={type} name={name} className="form-control" placeholder={placeholder} />
			</div>
		</div>
	);
};
