import BeveledCone from '../../assets/img/abstract/beveled-cone.png';
import CloudBall from '../../assets/img/abstract/cloud-ball.png';
import Quadrilateral from '../../assets/img/abstract/quadrilateral.png';
import HardSharpDonut from '../../assets/img/abstract/hald-sharp-donut.png';
import BendyRectangle from '../../assets/img/abstract/bendy-rectangle.png';
import Infinity from '../../assets/img/abstract/infinity.png';
import Octahedron from '../../assets/img/abstract/octahedron.png';
import Triangle from '../../assets/img/abstract/triangle.png';
import SquiglyGlobe from '../../assets/img/abstract/squigly-globe.png';
import Dodecagon from '../../assets/img/abstract/dodecagon.png';
import BeveledCube from '../../assets/img/abstract/beveled-cube.png';
import Cylinder from '../../assets/img/abstract/cylinder.png';

const data = [
	{
		id: 1,
		image: BeveledCone,
		name: 'Chụp ảnh đám hỏi',
		category: 'Top Item Sell',
		series: [
			{
				data: [25, 66, 41, 89, 63],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 380,
		price: 2500000,
		store: 'SonVuMedia',
		file: 'Figma',
	},
	{
		id: 2,
		image: CloudBall,
		name: 'Quay dựng truyền thông sự kiện',
		category: 'Top Item Sell',
		series: [
			{
				data: [12, 24, 33, 12, 48],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 1245,
		price: 12,
		store: 'SonVuMedia',
		file: 'Figma',
	},
	{
		id: 3,
		image: Quadrilateral,
		name: 'Quadrilateral',
		category: 'Top Item Sell',
		series: [
			{
				data: [34, 32, 36, 34, 34],
			},
		],
		color: process.env.REACT_APP_WARNING_COLOR,
		stock: 27,
		price: 12.8,
		store: 'Company D',
		file: 'XD',
	},
	{
		id: 4,
		image: HardSharpDonut,
		name: 'Bendy Rectangle',
		category: 'Top Item Sell',
		series: [
			{
				data: [54, 34, 42, 23, 12],
			},
		],
		color: process.env.REACT_APP_DANGER_COLOR,
		stock: 219,
		price: 16,
		store: 'Company C',
		file: 'Sketch',
	},
	{
		id: 5,
		image: BendyRectangle,
		name: 'Dựng 3D chuyên nghiệp',
		category: 'Top Item Sell',
		series: [
			{
				data: [23, 21, 12, 34, 14],
			},
		],
		color: process.env.REACT_APP_DANGER_COLOR,
		stock: 219,
		price: 16,
		store: 'SonVuMedia',
		file: 'Figma',
	},
	{
		id: 6,
		image: Infinity,
		name: 'Bendy Rectangle',
		category: 'Top Item Sell',
		series: [
			{
				data: [23, 13, 34, 41, 38],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 219,
		price: 16,
		store: 'Company C',
		file: 'Figma',
	},
	{
		id: 7,
		image: Octahedron,
		name: 'Octahedron',
		category: 'Top Item Sell',
		series: [
			{
				data: [21, 34, 23, 12, 67],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 498,
		price: 18,
		store: 'Company B',
		file: 'Figma',
	},
	{
		id: 8,
		image: Triangle,
		name: 'Triangle',
		category: 'Top Item Sell',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 219,
		price: 16,
		store: 'Company B',
		file: 'Figma',
	},
	{
		id: 9,
		image: SquiglyGlobe,
		name: 'SquiglyGlobe',
		category: 'Top Item Sell',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 219,
		price: 16,
		store: 'Company C',
		file: 'Figma',
	},
	{
		id: 10,
		image: Dodecagon,
		name: 'Cho thuê máy ảnh',
		category: 'Top Item Sell',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 219,
		price: 16,
		store: 'SonVuMedia',
		file: 'Figma',
	},
	{
		id: 11,
		image: BeveledCube,
		name: 'Chụp dịch vụ mẹ và bé',
		category: 'Top Item Sell',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 219,
		price: 16,
		store: 'SonVuMedia',
		file: 'Figma',
	},
	{
		id: 12,
		image: Cylinder,
		name: 'Cylinder',
		category: 'Top Item Sell',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 219,
		price: 16,
		store: 'Company B',
		file: 'Figma',
	},
];
export default data;