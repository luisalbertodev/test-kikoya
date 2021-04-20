import React, { useState } from 'react';
import { Loader } from 'components/Core';

const withLoader = (WrappedComponent, loadingMessage) => {
	function HOC(props) {
		const [isLoading, setLoading] = useState(true);

		const setLoadingState = (isComponentLoading) => {
			setLoading(isComponentLoading);
		};

		return (
			<>
				{isLoading && <Loader message={loadingMessage} />}
				<WrappedComponent {...props} setLoading={setLoadingState} />
			</>
		);
	}

	return HOC;
};

export default withLoader;
