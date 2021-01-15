import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import ProgressHeaderBar from './components/ProgressHeaderBar';

import HomePage from './views/Home';
import WelcomePage from './views/Welcome';
import PersonalPage from './views/Personal';
import DobPage from './views/Dob';
import AgreementPage from './views/Agreement';

const Routing = () => {
	return  (
		<Router>
			<ProgressHeaderBar />
			<Switch>
				<Route component={HomePage} exact path="/" />
				<Route component={WelcomePage} exact path="/welcome" />
				<Route component={PersonalPage} exact path="/personal" />
				<Route component={DobPage} exact path="/dob" />
				<Route component={AgreementPage} exact path="/agreement" />
			</Switch>
		</Router>
	);
}

export default Routing;