import { Reportdata } from './Reportdata';
import { LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis } from 'recharts';

export function Maincontent() {
	const pdata = [
		{
			month: 'Jan',
			Earnings: 0,
		},
		{
			month: 'Feb',
			Earnings: 10000,
		},
		{
			month: 'Mar',
			Earnings: 5000,
		},
		{
			month: 'Apr',
			Earnings: 15000,
		},
		{
			month: 'May',
			Earnings: 10000,
		},
		{
			month: 'Jun',
			Earnings: 20000,
		},
		{
			month: 'Jul',
			Earnings: 15000,
		},
		{
			month: 'Aug',
			Earnings: 25000,
		},
		{
			month: 'Sep',
			Earnings: 20000,
		},
		{
			month: 'Oct',
			Earnings: 30000,
		},
		{
			month: 'Nov',
			Earnings: 25000,
		},
		{
			month: 'Dec',
			Earnings: 35000,
		},
	];

	return (
		<div className="maincontent">
			<div className="first-row">
				<h3>Dashboard</h3>
				<button>click me</button>
			</div>
			<Reportdata />
			<div className="pictorial-data">
				<div className="graph">
					<ResponsiveContainer width="100%" aspect={3}>
						<LineChart
							data={pdata}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<XAxis dataKey="month" interval={1} axisLine={false} tickLine={false} />
							<YAxis axisLine={false} tickLine={false} domain={[0, 40000]} />
							<Legend />
							<Tooltip />
							<Line type="monotone" dataKey="Earnings" stroke="#0095FF" activeDot={{ r: 4 }} />
						</LineChart>
					</ResponsiveContainer>
				</div>
				<div className="pie-chart">chart</div>
			</div>
		</div>
	);
}
