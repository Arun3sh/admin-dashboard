import './App.css';
import './styles/usercomponents.css';
import { SidemenuBar } from './components/SidemenuBar';
import { Header } from './components/Header';
import { Maincontent } from './components/Maincontent';
import { Error } from './components/ErrorPage';
import { Login } from './user components/Login';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Forgotpassword } from './user components/Forgotpassword';
import { Register } from './user components/Register';
import { Viewprofile } from './user components/Viewprofile';

function App() {
	const [menu, setMenu] = useState(false);
	const [login, setLogin] = useState(false);
	return (
		<div className="App">
			<div className="Wrapper">
				{menu ? '' : login ? <SidemenuBar /> : ''}

				<div className="content-wrapper" style={{ width: menu ? '100%' : '72%' }}>
					{login ? <Header menu={menu} setMenu={setMenu} login={login} setLogin={setLogin} /> : ''}

					<Switch>
						<Route exact path="/">
							{login ? <Maincontent menu={menu} setMenu={setMenu} /> : <Redirect to="/login" />}
							<Maincontent menu={menu} setMenu={setMenu} />
						</Route>
						<Route path="/charts">Welcome to charts</Route>
						<Route path="/tables">Welcome to tables</Route>
						<Route path="/login">
							<Login login={login} setLogin={setLogin} />
						</Route>
						<Route path="/forgot-password">
							<Forgotpassword />
						</Route>
						<Route path="/create-user">
							<Register />
						</Route>
						<Route path="/users">View User</Route>
						<Route path="/edit-user/:id">Edit user</Route>
						<Route path="/delete-user/:id">Delete user</Route>
						<Route path="/profile/:id">
							<Viewprofile />
						</Route>
						<Route path="/edit-profile/:id"> edit profile</Route>
						<Route path="**">
							<Error />
						</Route>
					</Switch>
					<footer>Copyright © Your Website 2020</footer>
				</div>
			</div>
		</div>
	);
}

export default App;
