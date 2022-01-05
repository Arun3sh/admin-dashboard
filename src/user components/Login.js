import { Button, TextField } from '@mui/material';

export function Login() {
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
						<a href="/login" aria-label="forgot password">
							Forgot Password?
						</a>
					</div>
					<Button variant="outlined">LOGIN</Button>
					<div className="register-yet">Haven't registered?</div>
				</div>
			</div>
			<div className="row-illustration"></div>
		</div>
	);
}
