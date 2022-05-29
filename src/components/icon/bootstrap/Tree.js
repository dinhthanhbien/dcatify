import * as React from 'react';

function SvgTree(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8.416.223a.5.5 0 00-.832 0l-3 4.5A.5.5 0 005 5.5h.098L3.076 8.735A.5.5 0 003.5 9.5h.191l-1.638 3.276a.5.5 0 00.447.724H7V16h2v-2.5h4.5a.5.5 0 00.447-.724L12.31 9.5h.191a.5.5 0 00.424-.765L10.902 5.5H11a.5.5 0 00.416-.777l-3-4.5zM6.437 4.758A.5.5 0 006 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 00-.424.765L11.598 8.5H11.5a.5.5 0 00-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 004.5 8.5h-.098l2.022-3.235a.5.5 0 00.013-.507z' />
		</svg>
	);
}

export default SvgTree;
