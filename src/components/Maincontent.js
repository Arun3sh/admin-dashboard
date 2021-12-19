import { Reportdata } from './Reportdata';
import { PictorialData } from './PictorialData';

export function Maincontent() {
	return (
		<div className="maincontent">
			<div className="first-row">
				<h3>Dashboard</h3>
				<button>click me</button>
			</div>
			<Reportdata />
			<PictorialData />
		</div>
	);
}
