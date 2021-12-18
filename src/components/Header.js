import { TextField } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import Notification from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Divider, Button } from '@mui/material';

export function Header() {
	return (
		<header className="content-header">
			{/* Search Bar /> */}

			<div className="search-bar">
				<TextField
					id="outlined-basic"
					placeholder="Search here..."
					variant="outlined"
					className="text-field"
				/>
				<Button className="search-button">
					<FaSearch className="search-icon" color="primary" />
				</Button>
			</div>

			{/* Icon and user profile holder */}
			<div className="icon-holder">
				{/* Notification */}
				<Badge badgeContent={4} color="error" className="badge">
					<Notification color="action" />
				</Badge>

				{/* Mail */}
				<Badge badgeContent={5} color="error" className="badge">
					<MailIcon color="action" />
				</Badge>
				<Divider orientation="vertical" flexItem />

				{/* User name and profie pic */}
				<div className="user-badge">
					<span className="profile-name">UserName</span>
					<Avatar src="/broken-image.jpg" />
				</div>
			</div>
		</header>
	);
}
