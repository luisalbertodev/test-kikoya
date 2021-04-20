import React from 'react';
import { Spin } from './Spin';

export const Loader = ({ message }) => {
	return (
		<div className="row loader">
			<div className="col-12">
				<p>{message}</p>
				<Spin />
			</div>
		</div>
	);
};
