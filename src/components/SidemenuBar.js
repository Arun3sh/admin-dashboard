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
				<ListItemButton>
					<AiFillDashboard className="menu-icons" />
					<ListItemText primary="Dashboard" />
				</ListItemButton>

				<Divider variant="fullWidth" component="li" />
				<ListItemText className="menu-heading" primary="INTERFACE" />

				<Accordion className="pages" elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className="heading">
							<AiFillSetting className="menu-icons" />
							Components
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List>
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
							Utilites
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List>
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
							LogIn/SignIn
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List>
							<ListItemButton>Login</ListItemButton>
							<ListItemButton>Register</ListItemButton>
							<ListItemButton>Forgot Password</ListItemButton>
						</List>
					</AccordionDetails>
				</Accordion>

				<ListItemButton>
					<FaChartArea className="menu-icons" />
					<ListItemText primary="Charts" />
				</ListItemButton>

				<ListItemButton>
					<FaTable className="menu-icons" />
					<ListItemText primary="Tables" />
				</ListItemButton>
			</List>
		</nav>
	);
}
