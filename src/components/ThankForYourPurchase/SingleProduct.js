import React from 'react';

const SingleProduct = ({ name, price, currency }) => {
	return (
		<tr>
			<td>{name}</td>
			<td>
				{price} {currency} x 1 pz
			</td>
		</tr>
	);
};

export default SingleProduct;
