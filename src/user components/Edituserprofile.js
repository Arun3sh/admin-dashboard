import { TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

export function Edituserprofile({ userlist }) {
	const { id } = useParams();
	let [userList] = userlist.filter((list) => list.id == id);
	console.log(userList.name);
	return (
		<div className="editprofile-wrapper">
			<h3>Edit Profile</h3>
			<form>
				<TextField
					id="outlined-basic"
					name="name"
					label="User Name"
					variant="outlined"
					type="text"
					value={userList.name}
					// style={inputstyle}
				/>
			</form>
		</div>
	);
}
