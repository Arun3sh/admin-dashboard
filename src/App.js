import './App.css';
import { SidemenuBar } from './components/SidemenuBar';
import { Header } from './components/Header';
import { Maincontent } from './components/Maincontent';
import { Error } from './components/ErrorPage';
import { Login } from './user components/Login';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
	const [menu, setMenu] = useState(false);
	return (
		<div className="App">
			<div className="Wrapper">
				{menu ? '' : <SidemenuBar />}
				<div className="content-wrapper" style={{ width: menu ? '100%' : '72%' }}>
					<Header menu={menu} setMenu={setMenu} />
					<Switch>
						<Route exact path="/">
							<Maincontent menu={menu} setMenu={setMenu} />
						</Route>
						<Route path="/charts">Welcome to charts</Route>
						<Route path="/tables">Welcome to tables</Route>
						<Route path="/login">
							<Login />
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
