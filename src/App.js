import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NotFoundView from './views/NotFoundView';
import HomeView from './views/Home/HomeView';
import Overview from './views/Overview/Overview';

function App() {
	const [result, setResult] = useState('No result');

	useEffect(() => {
		fetch('data/hello.json')
			.then(response => response.json())
			.then(resultFromApi => setResult(resultFromApi.foo));
	}, []);

	return (
		<div id="container">			
			<Router basename="/">
				<menu>
					<Link to="/">Home -></Link>
					<br />
					<Link to="/overview">Overview -></Link>
				</menu>
				<Switch>
					<Route exact path='/'>
						<HomeView {...{ result }} />
					</Route>
					<Route path="/overview">
						<Overview />
					</Route>
					<Route path="/messages">
						<h1>Messages</h1>
					</Route>
					<Route component={NotFoundView} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
