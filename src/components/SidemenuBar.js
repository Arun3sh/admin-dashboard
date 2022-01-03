import { AiFillDashboard, AiFillSetting, AiFillFolder } from 'react-icons/ai';
import { TiSpanner } from 'react-icons/ti';
import { FaTable, FaChartArea } from 'react-icons/fa';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { FaGrinWink } from 'react-icons/fa';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	ListItemButton,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

export function SidemenuBar() {
	return (
		<nav className="sidemenu">
			<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
			>
				<ListItem>
					<div className="logo-heading">
						<FaGrinWink />
						<h3>SB ADMIN</h3>
					</div>
				</ListItem>

				<div className="menu-page">
					<AiFillDashboard className="menu-icons" />
					<a style={{ color: 'white' }} href="/">
						Dashboard
					</a>
					{/* <ListItemText primary="Dashboard" /> */}
				</div>

				<Divider variant="fullWidth" component="li" />
				<ListItemText className="menu-heading" primary="INTERFACE" />

				<Accordion className="pages" elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMore className="accordian-button" />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className="heading">
							<AiFillSetting className="menu-icons" />
							<span>Components</span>
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List className="accordian-list">
							<ListItemButton>Buttons</ListItemButton>
							<ListItemButton>Cards</ListItemButton>
						</List>
					</AccordionDetails>
				</Accordion>

				<Accordion className="pages" elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className="heading">
							<TiSpanner className="menu-icons" />
							<span>Utilites</span>
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List className="accordian-list">
							<ListItemButton>Colors</ListItemButton>
							<ListItemButton>Borders</ListItemButton>
							<ListItemButton>Animation</ListItemButton>
						</List>
					</AccordionDetails>
				</Accordion>

				<Divider variant="fullWidth" component="li" />
				<ListItemText className="menu-heading" primary="ADDONS" />

				<Accordion className="pages" elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className="heading">
							<AiFillFolder className="menu-icons" />
							<span>LogIn</span>
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List className="accordian-list">
							<ListItemButton>Login</ListItemButton>
							<ListItemButton>Register</ListItemButton>
							<ListItemButton>Forgot Password</ListItemButton>
						</List>
					</AccordionDetails>
				</Accordion>

				<div className="menu-page">
					<FaChartArea className="menu-icons" />
					<a style={{ color: 'white' }} href="/charts">
						Charts
					</a>
					{/* <ListItemText primary="Charts" /> */}
				</div>

				<div className="menu-page">
					<FaTable className="menu-icons" />
					<a style={{ color: 'white' }} href="/tables">
						Tables
					</a>
					{/* <ListItemText primary="Tables" /> */}
				</div>
			</List>
		</nav>
	);
}
