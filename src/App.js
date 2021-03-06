import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import { Cards, LineChart, PieChart, CountryPicker, Header, } from './components';
import { GlobalContext } from './context/GlobalState';

import styles from './App.module.css';

function App() {
	const { country } = useContext(GlobalContext);

	return (
		<div className={styles.container}>
			<Grid container spacing={3} direction="row" justify="space-around" alignItems="center">
				<Grid item xs={12} md={12} zeroMinWidth>
					<Header />
					<CountryPicker />
				</Grid>
				<Grid item xs={4} md={4} zeroMinWidth>
					<Cards />
				</Grid>
				<Grid item xs={7} md={7} zeroMinWidth>
					{country ? <PieChart /> : <LineChart />}
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
