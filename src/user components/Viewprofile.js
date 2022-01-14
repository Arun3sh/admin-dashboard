import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from 'react-router-dom';

export function Viewprofile({ name, email, profilepic, food, sport, hobby, location, language }) {
	const history = useHistory();
	return (
		<div className="viewprofile-wrapper">
			{/* <Avatar
				className="profile-pic"
				alt="Travis Howard"
				src="https://www.themoviedb.org/t/p/w1280//zHJYRHI5HkQuwLW5KyeXGQ596u7.jpg"
			/> */}
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<Avatar className="profile-pic" alt={name} src={profilepic} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{email}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary" onClick={() => history.goBack()}>
						Back
					</Button>
					<Button size="small" color="primary">
						Edit Profile
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
