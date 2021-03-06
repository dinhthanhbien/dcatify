import * as React from 'react';

function SvgStickyFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2.5 1A1.5 1.5 0 001 2.5v11A1.5 1.5 0 002.5 15h6.086a1.5 1.5 0 001.06-.44l4.915-4.914A1.5 1.5 0 0015 8.586V2.5A1.5 1.5 0 0013.5 1h-11zm6 8.5a1 1 0 011-1h4.396a.25.25 0 01.177.427l-5.146 5.146a.25.25 0 01-.427-.177V9.5z' />
		</svg>
	);
}

export default SvgStickyFill;
