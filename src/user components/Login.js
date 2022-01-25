import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import illu from './../styles/thinkIllustration.gif';
import { useContext } from 'react';
import { authContext } from '../App';

export function Login() {
	const history = useHistory();
	const { login, setLogin, setUser, userName, setUserName } = useContext(authContext);
	const checkPassword = () => {
		setLogin(!login);
		userName === 'admin' ? setUser(true) : setUser(false);
		history.push('/');
	};
	return (
		<div className="login-wrapper">
			{/* Illustration Container */}
			<div className="row-illustration">
				<img src={illu} alt="Illustration" aria-label="Think image" />
			</div>

			{/* Login Container */}
			<div className="row-login">
				<div className="login-heading">
					<h2>Login</h2>
				</div>
				<div className="email-container">
					<TextField
						id="outlined-basic"
						variant="outlined"
						className="email-textfield"
						label="Enter User Name"
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div className="password-container">
					<TextField
						id="outlined-basic"
						variant="outlined"
						className="password-textfield"
						type="password"
						label="Enter Password"
						// onChangeCapture={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div className="login-btn-container">
					<div className="forgot-password">
						<Link to="/forgot-password" aria-label="forgot password">
							Forgot Password?
						</Link>
					</div>
					<Button variant="outlined" onClick={checkPassword}>
						LOGIN
					</Button>
					<div className="register-yet">
						<Link to="/create-user" aria-label="not registered">
							Haven't Registered Yet?
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
