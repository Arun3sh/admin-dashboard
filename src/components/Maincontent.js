import { Reportdata } from './Reportdata';
import { PictorialData } from './PictorialData';
import { Othercontent } from './Othercontent';

export function Maincontent() {
	return (
		<div className="maincontent">
			<div className="first-row">
				<h3>Dashboard</h3>
				<button>click me</button>
			</div>
			<Reportdata />
			<PictorialData />
			<Othercontent />
		</div>
	);
}
