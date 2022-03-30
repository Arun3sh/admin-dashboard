import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Getallusers } from './Getalluser';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Viewuser() {
	const [userValue, setUserValue] = useState([]);
	// const userlist = Getalluserdata();
	const Getalluserdata = () => {
		// fetch('https://61988da7164fa60017c230e5.mockapi.io/userdetails/', {
		// 	method: 'GET',
		// })
		// 	.then((data) => data.json())
		// 	.then((users) => setUserValue(users));

		// Using axios

		axios
			.get('https://61988da7164fa60017c230e5.mockapi.io/userdetails/')
			.then(({ data }) => setUserValue(data));
	};
	useEffect(Getalluserdata, []);
	const deleteUser = (id) => {
		// fetch(`https://61988da7164fa60017c230e5.mockapi.io/userdetails/${id}`, {
		// 	method: 'DELETE',
		// }).then(() => Getalluserdata());

		axios
			.delete(`https://61988da7164fa60017c230e5.mockapi.io/userdetails/${id}`)
			.then(() => Getalluserdata());
	};
	const history = useHistory();
	return (
		<div>
			{userValue
				.filter((e) => e.email !== 'admin@real.com')
				.map(({ id, name, email }, index) => (
					<Getallusers
						id={id}
						name={name}
						email={email}
						key={index}
						editButton={
							<Button
								type="button"
								size="small"
								color="primary"
								aria-label="edit user"
								onClick={() => history.push(`/edit-user/${id}`)}
							>
								Edit
							</Button>
						}
						deleteButton={
							<Button
								type="button"
								size="small"
								color="error"
								aria-label="delete"
								onClick={() => deleteUser(id)}
							>
								Delete
							</Button>
						}
					/>
				))}
		</div>
	);
}
