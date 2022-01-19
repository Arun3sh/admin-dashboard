import { Avatar } from '@mui/material';
import { Button, IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Mail } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

export function Viewprofile({
	id,
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

					{/* {email} */}
					<IconButton className="mail-user">
						<Avatar sx={{ bgcolor: blue[500] }}>
							<Mail />
						</Avatar>
					</IconButton>
					<div className="btns-user">
						<Button size="small" color="primary" onClick={() => history.goBack()}>
							Back
						</Button>
						<Button
							size="small"
							color="primary"
							onClick={() => history.push(`/edit-profile/${id}`)}
						>
							Edit Profile
						</Button>
					</div>
				</div>
			</div>
			<div className="user-other">
				<div className="hobby">
					<h3>Hobby {hobby} </h3>
					<p>
						A hobby is considered to be a regular activity that is done for enjoyment, typically
						during one's leisure time. Hobbies include collecting themed items and objects, engaging
						in creative and artistic pursuits, playing sports, or pursuing other amusements.
					</p>
				</div>
				<div className="food">
					<h3>Favourite Food {food}</h3>
					<p>
						A hobby is considered to be a regular activity that is done for enjoyment, typically
						during one's leisure time. Hobbies include collecting themed items and objects, engaging
						in creative and artistic pursuits, playing sports, or pursuing other amusements.
					</p>
				</div>
				<div className="sport">
					<h3>Favourite Sport {sport}</h3>
					<p>
						A hobby is considered to be a regular activity that is done for enjoyment, typically
						during one's leisure time. Hobbies include collecting themed items and objects, engaging
						in creative and artistic pursuits, playing sports, or pursuing other amusements.
					</p>
				</div>
			</div>
		</div>
	);
}
