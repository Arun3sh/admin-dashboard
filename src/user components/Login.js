import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import illu from './../styles/thinkIllustration.gif';
import { useContext } from 'react';
import { authContext } from '../App';
import { useFormik } from 'formik';
import * as yup from 'yup';

export function Login() {
	const history = useHistory();
	const { login, setLogin, setUser, userName, setUserName, setUserId } = useContext(authContext);

	// Function to check user name and password
	const checkPassword = () => {
		// this function will get the user data to confirm the input
		const checkUser = (users) => {
			const confirmName = users.filter(
				(e) => e.email === values.email && e.password === values.password
			);
			const confirmedData = [...confirmName][0];
			// If the value is 0 that means user not found
			if (confirmName === 'undefined' || confirmName.length < 1) {
				return alert('Incorrect username or password');
			} else {
				setLogin(!login);
				values.email === 'admin@real.com' ? setUserName('admin') : setUserName(users[0].name);
				userName === 'admin' ? setUser(true) : setUser(false);
				setUserId(confirmedData.id);
				history.push('/');
			}
		};

		// First all the user data is brought and then passed into func to check username and password
		fetch(`https://61988da7164fa60017c230e5.mockapi.io/userdetails?email=${values.email}`, {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((users) => checkUser(users));
	};

	const formValidationSchema = yup.object({
		email: yup.string().email().required('email id is required'),
		password: yup
			.string()

			.required('Min 4 characters'),
	});

	const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: formValidationSchema,
		onSubmit: () => checkPassword(),
	});

	return (
		<div className="login-wrapper">
			{/* Illustration Container */}
			<div className="row-illustration">
				<img src={illu} alt="Illustration" aria-label="Think image" />
			</div>

			{/* Login Container */}
			<form className="row-login" onSubmit={handleSubmit}>
				<div className="login-heading">
					<h2>Login</h2>
				</div>
				<div className="email-container">
					<TextField
						id="email"
						name="email"
						value={values.email}
						variant="outlined"
						className="email-textfield"
						label="Enter User Email"
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.email && touched.email}
						helperText={errors.email && touched.email ? errors.email : ''}
					/>
				</div>
				<div className="password-container">
					<TextField
						id="password"
						name="password"
						value={values.password}
						variant="outlined"
						className="password-textfield"
						type="password"
						label="Enter Password"
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.password && touched.password}
						helperText={errors.password && touched.password ? errors.password : ''}
						onKeyPress={(e) => e.key === 'Enter' && handleSubmit}
					/>
				</div>
				<div className="login-btn-container">
					<div className="forgot-password">
						<Link to="/forgot-password" aria-label="forgot password">
							Forgot Password?
						</Link>
					</div>
					<Button variant="outlined" type="submit">
						LOGIN
					</Button>
					<div className="register-yet">
						<Link to="/create-user" aria-label="not registered">
							Haven't Registered Yet?
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
}
