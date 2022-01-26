import './App.css';
import './styles/usercomponents.css';
import { SidemenuBar } from './components/SidemenuBar';
import { Header } from './components/Header';
import { Maincontent } from './components/Maincontent';
import { Error } from './components/ErrorPage';
import { Login } from './user components/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, createContext } from 'react';
import { Forgotpassword } from './user components/Forgotpassword';
import { Register } from './user components/Register';
import { Viewprofile } from './user components/Viewprofile';
import { Edituserprofile } from './user components/Edituserprofile';
import { Viewuser } from './user components/Viewuser';
import { Edituser } from './user components/Edituser';

export const authContext = createContext(null);

function App() {
	const [menu, setMenu] = useState(true);
	const [login, setLogin] = useState(false);
	const [userName, setUserName] = useState('user');
	const [user, setUser] = useState(false);

	const userlist = [
		{
			id: '100',
			name: 'Arun',
			email: 'm.aruneshwar@gmail.com',
			about:
				"I'm a Web Developer currenty working on my dashboard project. Always on the look out for upskilling me!",
			profilepic: 'https://www.themoviedb.org/t/p/w1280//zHJYRHI5HkQuwLW5KyeXGQ596u7.jpg',
			coverpic: 'https://wallpapercave.com/wp/HByeKGm.jpg',
			food: 'Dosa, Briyani',
			sport: 'cricket, football',
			hobby: 'watching movies and series',
			location: 'Coimbatore',
			language: 'english, tamil',
		},
	];

	const modes = {
		menu: menu,
		setMenu: setMenu,
		login: login,
		setLogin: setLogin,
		userName: userName,
		setUserName: setUserName,
		user: user,
		setUser: setUser,
	};

	if (!login) {
		return (
			<authContext.Provider value={modes}>
				<Switch>
					<Route exact path="/">
						<Redirect to="/login" />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/forgot-password">
						<Forgotpassword />
					</Route>
					<Route path="/create-user">
						<Register />
					</Route>
				</Switch>
				<footer>Copyright © Your Website 2020</footer>
			</authContext.Provider>
		);
	}
	return (
		<authContext.Provider value={modes}>
			<div className="App">
				<div className="Wrapper">
					{menu ? '' : <SidemenuBar />}

					<div className="content-wrapper" style={{ width: menu ? '100%' : '72%' }}>
						<Header />

						<Switch>
							<Route exact path="/">
								<Maincontent />
							</Route>
							<Route path="/charts">Welcome to charts</Route>
							<Route path="/tables">Welcome to tables</Route>
							<Route path="/login">
								<Login />
							</Route>
							<Route path="/forgot-password">
								<Forgotpassword />
							</Route>
							<Route path="/create-user">
								<Register />
							</Route>
							<Route path="/users">
								<div className="viewuser-wrapper">
									{userlist.map(({ id, name, email }) => (
										<Viewuser id={id} name={name} email={email} />
									))}
								</div>
							</Route>
							<Route path="/edit-user/:id">
								<Edituser />
							</Route>
							<Route path="/delete-user/:id">Delete user</Route>
							<Route path="/profile/:id">
								{userlist.map(
									({
										id,
										name,
										email,
										about,
										profilepic,
										coverpic,
										food,
										sport,
										hobby,
										location,
										language,
									}) => (
										<Viewprofile
											id={id}
											name={name}
											email={email}
											about={about}
											profilepic={profilepic}
											coverpic={coverpic}
											food={food}
											sport={sport}
											hobby={hobby}
											location={location}
											language={language}
										/>
									)
								)}
							</Route>
							<Route path="/edit-profile/:id">
								<Edituserprofile userlist={userlist} />
							</Route>
							<Route path="**">
								<Error />
							</Route>
						</Switch>
						<footer>Copyright © Your Website 2020</footer>
					</div>
				</div>
			</div>
		</authContext.Provider>
	);
}

export default App;
