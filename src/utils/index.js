export const loadScript = (url) =>
	new Promise((resolve, reject) => {
		let ready = false;
		if (!document) {
			reject(new Error('Document was not defined'));
		}
		const tag = document.getElementsByTagName('script')[0];
		const script = document.createElement('script');

		script.type = 'text/javascript';
		script.src = url;
		script.async = true;
		script.onreadystatechange = () => {
			if (!ready) {
				ready = true;
				resolve(script);
			}
		};
		script.onload = script.onreadystatechange;

		script.onerror = (msg) => {
			console.log(msg);
			reject(new Error('Error loading script.'));
		};

		script.onabort = (msg) => {
			console.log(msg);
			reject(new Error('Script loading aboirted.'));
		};

		if (tag.parentNode != null) {
			tag.parentNode.insertBefore(script, tag);
		}
	});

export const formatterPrice = (e) => {
	if (!e || Number.isNaN(e)) return e;

	return new Intl.NumberFormat('en-MX', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	}).format(e);
};

export const getIva = (mount) => {
	const IVA = 0.0116;
	return mount * IVA;
};

export const formatNumberTwoDigit = (num) => Math.round(num * 100) / 100;
