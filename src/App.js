import './App.css';
import { SidemenuBar } from './components/SidemenuBar';
import { Header } from './components/Header';
import { Maincontent } from './components/Maincontent';
import { Error } from './components/ErrorPage';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<div className="Wrapper">
				<SidemenuBar />
				<div className="content-wrapper">
					<Header />
					<Switch>
						<Route exact path="/">
							<Maincontent />
						</Route>
						<Route path="**">
							<Error />
						</Route>
						<Route path="/chart">Charts</Route>
					</Switch>
					<footer>Copyright © Your Website 2020</footer>
				</div>
			</div>
		</div>
	);
}

export default App;
