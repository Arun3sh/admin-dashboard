import { Header } from './Header';

export function Contentwrapper() {
	return (
		<div className="content-wrapper">
			<Header />
			<section>Holds all the content</section>
			<footer>Copyright © Your Website 2020</footer>
		</div>
	);
}
