import { useHistory, Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

export function Register() {
	const history = useHistory();

	const register = () => {
		// To add user
		const addUser = (users) => {
			// fetch('https://61988da7164fa60017c230e5.mockapi.io/userdetails/', {
			// 	method: 'POST',
			// 	body: JSON.stringify(values),
			// 	headers: { 'Content-type': 'application/json' },
			// }).then(() => history.goBack());

			axios({
				url: 'https://61988da7164fa60017c230e5.mockapi.io/userdetails/',
				method: 'POST',
				data: values,
			})
				.then(() => history.goBack())
				.catch((err) => alert(err));
		};

		// To check for user name
		// Using axios
		axios
			.get(`https://61988da7164fa60017c230e5.mockapi.io/userdetails?email=${values.email}`)
			.then(({ data }) => (data.length === 0 ? addUser() : alert('user email already exists')));

		//Using fetch method
		// fetch(`https://61988da7164fa60017c230e5.mockapi.io/userdetails?email=${values.email}`, {
		// 	method: 'GET',
		// })
		// 	.then((data) => data.json())
		// 	.then((user) => (user.length === 0 ? addUser() : alert('user email already exists')));
	};

	const formValidationSchema = yup.object({
		name: yup.string().min(4).required('please enter a unique user name'),
		email: yup.string().email().required('email id is required'),
		password: yup
			.string()
			.min(4, 'Min 4 characters')
			.required('Min 4 characters')
			.matches(
				/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
				'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
			),
		cpassword: yup
			.string()
			.required('Please confirm the password')
			.oneOf([yup.ref('password')], 'Passwords do not match'),
	});
	const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			cpassword: '',
			about: '',
			profilepic: '',
			coverpic: '',
			food: '',
			sport: '',
			hobby: '',
			location: '',
			language: '',
		},
		validationSchema: formValidationSchema,
		onSubmit: () => register(),
	});
	return (
		<div className="register-wrapper">
			<h3>Create an Account</h3>
			<form className="registeruser-form" onSubmit={handleSubmit} autoComplete="off">
				<TextField
					id="name"
					name="name"
					value={values.name}
					label="User Name"
					variant="outlined"
					style={{ width: '40vh' }}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.name && touched.name}
					helperText={errors.name && touched.name ? errors.name : ''}
				/>
				<TextField
					id="email"
					name="email"
					value={values.email}
					label="Enter email id"
					variant="outlined"
					style={{ width: '40vh' }}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.email && touched.email}
					helperText={errors.email && touched.email ? errors.email : ''}
				/>
				<TextField
					id="password"
					name="password"
					value={values.password}
					type="password"
					label="Set Password"
					variant="outlined"
					style={{ width: '40vh' }}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.password && touched.password}
					helperText={errors.password && touched.password ? errors.password : ''}
				/>
				<TextField
					id="cpassword"
					name="cpassword"
					value={values.cpassword}
					type="password"
					label="Confirm Password"
					variant="outlined"
					style={{ width: '40vh' }}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.cpassword && touched.cpassword}
					helperText={errors.cpassword && touched.cpassword ? errors.cpassword : ''}
				/>
				<Button variant="outlined" type="submit" color="success">
					Submit
				</Button>
			</form>

			<div className="user-already">
				<Link to="/login" aria-label="login">
					Already an user? Login
				</Link>
			</div>
		</div>
	);
}
