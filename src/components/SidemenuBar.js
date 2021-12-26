import { AiFillDashboard, AiFillSetting, AiFillFolder } from 'react-icons/ai';
import { TiSpanner } from 'react-icons/ti';
import { FaTable, FaChartArea } from 'react-icons/fa';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { FaGrinWink } from 'react-icons/fa';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
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
				<ListItem>
					<AiFillDashboard className="menu-icons" />
					<ListItemText primary="Dashboard" />
				</ListItem>

				<Divider variant="fullWidth" component="li" />
				<ListItemText className="menu-heading" primary="INTERFACE" />

				<ListItem>
					<AiFillSetting className="menu-icons" />
					<ListItemText primary="Components" />
				</ListItem>

				<ListItem>
					<TiSpanner className="menu-icons" />
					<ListItemText primary="Utilites" />
				</ListItem>

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
							Pages
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List>
							<ListItem>Login</ListItem>
							<ListItem>Register</ListItem>
							<ListItem>Forgot Password</ListItem>
						</List>
					</AccordionDetails>
				</Accordion>

				<ListItem>
					<FaChartArea className="menu-icons" />
					<ListItemText primary="Charts" />
				</ListItem>

				<ListItem>
					<FaTable className="menu-icons" />
					<ListItemText primary="Tables" />
				</ListItem>
			</List>
		</nav>
	);
}
