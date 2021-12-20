import { Divider, Box, LinearProgress } from '@mui/material';
import { ProgressBar } from './progressBar';

export function Othercontent() {
	const project = [
		{
			title: 'server',
			heading: 'Server Migration',
			value: 20,
		},
		{
			title: 'sales',
			heading: 'Sales Tracking',
			value: 40,
		},
		{
			title: 'customer',
			heading: 'Customer Database',
			value: 60,
		},
		{
			title: 'payout',
			heading: 'Payout Details',
			value: 80,
		},
		{
			title: 'account',
			heading: 'Account Setup',
			value: 100,
		},
	];
	return (
		<div className="othercontent-wrapper">
			<div className="column1">
				<div className="project-progress">
					<div className="data-title">
						<h4>Projects</h4>
					</div>
					<Divider className="pic-divider" variant="fullWidth" />
					<div className="progress-data">
						{project.map(({ title, heading, value }, index) => (
							<ProgressBar title={title} heading={heading} value={value} index={index} />
						))}
					</div>
				</div>
				<div className="color-theme"></div>
			</div>
			<div className="column2">
				<div className="illustrations"></div>
				<div className="development"></div>
			</div>
		</div>
	);
}
