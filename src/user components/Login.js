import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { InputAdornment } from '@mui/material';

export function Login({ login, setLogin, user, setUser, userName, setUserName }) {
	const history = useHistory();

	const checkPassword = () => {
		setLogin(!login);
		userName === 'admin' ? setUser(true) : setUser(false);
		history.push('/');
	};
	return (
		<div className="login-wrapper">
			<div className="row-login">
				<div className="login-heading">
					<h2>Login</h2>
				</div>
				<div className="email-container">
					<label>Email</label>
					<TextField
						className="email-textfield"
						placeholder="enter user name"
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div className="password-container">
					<label>Password</label>
					<TextField
						className="password-textfield"
						type="password"
						placeholder="enter your password"
						// onChangeCapture={(e) => setUserName(e.target.value)}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<AiFillEyeInvisible />
								</InputAdornment>
							),
						}}
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
			<div className="row-illustration"></div>
		</div>
	);
}
