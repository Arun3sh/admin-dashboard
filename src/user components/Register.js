import { useHistory, Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

export function Register() {
	const history = useHistory();
	return (
		<div className="register-wrapper">
			<h3>Create an Account</h3>
			<TextField
				id="outlined-basic"
				label="First Name"
				variant="outlined"
				style={{ width: '40vh' }}
			/>
			<TextField
				id="outlined-basic"
				label="Last Name"
				variant="outlined"
				style={{ width: '40vh' }}
			/>
			<TextField
				id="outlined-basic"
				label="Enter email id"
				variant="outlined"
				style={{ width: '40vh' }}
			/>
			<TextField
				id="outlined-basic"
				label="Set Password"
				variant="outlined"
				style={{ width: '40vh' }}
			/>
			<TextField
				id="outlined-basic"
				label="Confirm Password"
				variant="outlined"
				style={{ width: '40vh' }}
			/>
			<Button variant="outlined" color="success" onClick={() => history.push('/login')}>
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
