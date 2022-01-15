import { Avatar } from '@mui/material';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Mail } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

export function Viewprofile({
	name,
	email,
	about,
	profilepic,
	coverpic,
	food,
	sport,
	hobby,
	location,
	language,
}) {
	const history = useHistory();
	return (
		<div className="viewprofile-wrapper">
			<div className="user-main">
				<div className="user-main-wrapper">
					<h3>{name}</h3>
					<Avatar className="profile-pic" alt={name} src={profilepic} />
					<p className="about-user">{about}</p>
					<p className="location">{location}</p>
					<Avatar sx={{ bgcolor: blue[500] }} className="mail-user">
						<Mail />
					</Avatar>
					<div className="btns-user">
						<Button size="small" color="primary" onClick={() => history.goBack()}>
							Back
						</Button>
						<Button size="small" color="primary">
							Edit Profile
						</Button>
					</div>
				</div>
			</div>
			<div className="user-other">
				<div className="">Hobby</div>
			</div>
		</div>
	);
}
