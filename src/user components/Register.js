import { useHistory, Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export function Register() {
	const history = useHistory();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');
	const about = '';
	const profilepic = '';
	const coverpic = '';
	const food = '';
	const sport = '';
	const hobby = '';
	const location = '';
	const language = '';

	const register = () => {
		if (password !== cpassword) {
			return alert("Entered Passwords Doesn't match");
		}

		// To make sure same user name are not taken
		const checkUserName = (users) => {
			const confirmName = users.filter((e) => e.name === name);
			if (confirmName.length > 1) {
				return alert('User name already taken');
			} else {
				const userData = {
					name,
					email,
					password,
					about,
					profilepic,
					coverpic,
					food,
					sport,
					hobby,
					location,
					language,
				};
				fetch('https://61988da7164fa60017c230e5.mockapi.io/userdetails/', {
					method: 'POST',
					body: JSON.stringify(userData),
					headers: { 'Content-type': 'application/json' },
				}).then(() => history.push('/login'));
			}
		};

		// To check for user name
		fetch('https://61988da7164fa60017c230e5.mockapi.io/userdetails/', {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((users) => checkUserName(users));
	};
	return (
		<div className="register-wrapper">
			<h3>Create an Account</h3>
			<TextField
				id="outlined-basic"
				value={name}
				label="User Name"
				variant="outlined"
				onChange={(event) => setName(event.target.value)}
				style={{ width: '40vh' }}
			/>
			<TextField
				id="outlined-basic"
				value={email}
				label="Enter email id"
				variant="outlined"
				onChange={(event) => setEmail(event.target.value)}
				style={{ width: '40vh' }}
			/>
			<TextField
				id="outlined-basic"
				value={password}
				type="password"
				label="Set Password"
				variant="outlined"
				onChange={(event) => setPassword(event.target.value)}
				style={{ width: '40vh' }}
			/>
			<TextField
				id="outlined-basic"
				value={cpassword}
				type="password"
				label="Confirm Password"
				variant="outlined"
				onChange={(event) => setCpassword(event.target.value)}
				style={{ width: '40vh' }}
			/>
			<Button variant="outlined" color="success" onClick={register}>
				Submit
			</Button>
			<div className="user-already">
				<Link to="/login" aria-label="login">
					Already an user? Login
				</Link>
			</div>
		</div>
	);
}
