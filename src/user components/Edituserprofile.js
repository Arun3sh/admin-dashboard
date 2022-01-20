import { TextField } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export function Edituserprofile({ userlist }) {
	const { id } = useParams();
	let [userList] = userlist.filter((list) => list.id === id);
	let inputstyle = { marginTop: '20px' };

	const [name, setName] = useState(userList.name);
	const [email, setEmail] = useState(userList.email);
	const [about, setAbout] = useState(userList.about);
	const [profilepic, SetProfilepic] = useState(userList.profilepic);
	const [coverpic, SetCoverpic] = useState(userList.coverpic);
	const [food, setFood] = useState(userList.food);
	const [sport, setSport] = useState(userList.sport);
	const [hobby, setHobby] = useState(userList.hobby);
	const [location, setLocation] = useState(userList.location);
	const [language, setLanguage] = useState(userList.language);

	return (
		<div className="editprofile-wrapper">
			<h3>Edit Profile</h3>
			<form className="editprofile-form">
				<TextField
					id="outlined-basic"
					name="name"
					label="User Name"
					variant="outlined"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					style={inputstyle}
				/>
				<TextField
					id="outlined-basic"
					name="email"
					label="User email"
					variant="outlined"
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					style={inputstyle}
				/>
				<TextField
					id="outlined-basic"
					name="about"
					label="User Info"
					variant="outlined"
					type="text"
					value={about}
					onChange={(e) => setAbout(e.target.value)}
					style={inputstyle}
				/>
				<TextField
					id="outlined-basic"
					name="profilepic"
					label="Profile Picture Link"
					variant="outlined"
					type="text"
					value={profilepic}
					onChange={(e) => SetProfilepic(e.target.value)}
					style={inputstyle}
				/>
				<TextField
					id="outlined-basic"
					name="coverpic"
					label="Cover Picture Link"
					variant="outlined"
					type="text"
					value={coverpic}
					onChange={(e) => SetCoverpic(e.target.value)}
					style={inputstyle}
				/>
				<TextField
					id="outlined-basic"
					name="food"
					label="Favourite Food"
					variant="outlined"
					type="text"
					value={food}
					onChange={(e) => setFood(e.target.value)}
					style={inputstyle}
				/>
				<TextField
					id="outlined-basic"
					name="sport"
					label="Favourite Sport"
					variant="outlined"
					type="text"
					value={sport}
					onChange={(e) => setSport(e.target.value)}
					style={inputstyle}
				/>
				<TextField
					id="outlined-basic"
					name="hobby"
					label="Hobby"
					variant="outlined"
					type="text"
					value={hobby}
					onChange={(e) => setHobby(e.target.value)}
					style={inputstyle}
				/>
				<TextField
					id="outlined-basic"
					name="location"
					label="Your Location"
					variant="outlined"
					type="text"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					style={inputstyle}
				/>
				<TextField
					id="outlined-basic"
					name="language"
					label="Known Languages"
					variant="outlined"
					type="text"
					value={language}
					onChange={(e) => setLanguage(e.target.value)}
					style={inputstyle}
				/>

				<div className="add-cancel">
					<Button
						variant="outlined"
						type="button"
						className="addBtn"
						// onClick={editMovie}
						startIcon={<EditIcon />}
					>
						Update Movie
					</Button>
					<Button
						variant="outlined"
						type="button"
						className="resetBtn"
						color="error"
						// onClick={clearEntry}
						startIcon={<DeleteIcon />}
					>
						Reset
					</Button>
				</div>
			</form>
		</div>
	);
}
