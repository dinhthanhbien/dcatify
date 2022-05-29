import * as React from 'react';

function SvgBoxArrowInUpLeft(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M9.636 13.5a.5.5 0 01-.5.5H2.5A1.5 1.5 0 011 12.5v-10A1.5 1.5 0 012.5 1h10A1.5 1.5 0 0114 2.5v6.636a.5.5 0 01-1 0V2.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h6.636a.5.5 0 01.5.5z'
			/>
			<path
				fillRule='evenodd'
				d='M5 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1H6.707l8.147 8.146a.5.5 0 01-.708.708L6 6.707V10.5a.5.5 0 01-1 0v-5z'
			/>
		</svg>
	);
}

export default SvgBoxArrowInUpLeft;
