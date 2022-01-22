import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

export function Viewuser({ id, name, email }) {
	const history = useHistory();
	return (
		<div className="user-list-content">
			<div className="user-list-col1">{name}</div>
			<div className="user-list-col2">{email}</div>
			<div className="user-list-col3">
				<Button
					type="button"
					color="primary"
					aria-label="edit user"
					onClick={() => history.push(`/edit-user/${id}`)}
				>
					Edit User
				</Button>

				<Button
					type="button"
					color="error"
					aria-label="edit user"
					onClick={() => history.push('/delete-user/:id')}
				>
					Delete User
				</Button>
			</div>
		</div>
	);
}
