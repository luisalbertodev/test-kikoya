import React from 'react';
import SingleProduct from './SingleProduct';

const ProductsPurchase = ({ products = [] }) => {
	return (
		<div>
			<h3>Your products</h3>
			<table className="w-100" id="t01">
				<tr>
					<th>Product</th>
					<th>Price</th>
				</tr>
				{products.map((product) => (
					<SingleProduct {...product} />
				))}
			</table>
		</div>
	);
};

export default ProductsPurchase;
