import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export function Login({ login, setLogin }) {
	const history = useHistory();
	return (
		<div className="login-wrapper">
			<div className="row-login">
				<div className="login-heading">
					<h2>Login</h2>
				</div>
				<div className="email-container">
					<label for="email">Email</label>
					<TextField className="email-textfield" placeholder="enter your email" />
				</div>
				<div className="password-container">
					<label for="password">Password</label>
					<TextField className="password-textfield" placeholder="enter your password" />
				</div>
				<div className="login-btn-container">
					<div className="forgot-password">
						<Link to="/login" aria-label="forgot password">
							Forgot Password?
						</Link>
					</div>
					<Button variant="outlined" onClick={() => setLogin(!login) & history.push('/')}>
						LOGIN
					</Button>
					<div className="register-yet">
						<Link to="/login" aria-label="not registered">
							Haven't Registered Yet?
						</Link>
					</div>
				</div>
			</div>
			<div className="row-illustration"></div>
		</div>
	);
}
