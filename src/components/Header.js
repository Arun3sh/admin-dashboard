import { TextField } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
// import { SearchIcon } from '@mui/icons-material/Search';

export function Header() {
	return (
		<header className="content-header">
			{/* <SearchIcon /> */}

			<div className="search-bar">
				<TextField
					id="outlined-basic"
					placeholder="Please type your search keyword.."
					variant="outlined"
					fullWidth={true}
				/>
				<FaSearch />
			</div>
		</header>
	);
}
