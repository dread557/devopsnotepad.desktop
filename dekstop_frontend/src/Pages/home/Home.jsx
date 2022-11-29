import React, { useEffect, useState, useCallback } from 'react';
import Sidenav from '../../Components/SideNav/SideNav';
import homeStyle from './Home.module.css';
import Onboarding from '../../Components/Onboarding/Onboarding';

function Home() {
	const [newUser, setNewUser] = useState(null);
	useEffect(() => {
		const isNewUser = localStorage.getItem('isNewUser');
		if (!isNewUser) {
			setNewUser(true);
		}
	});

	const getStarted = useCallback(() => {
		setNewUser(false);
		localStorage.setItem('isNewUser', false);
	}, [newUser]);

	return (
		<div className={homeStyle.HomeWrapper}>
			<Sidenav />

			{newUser && <Onboarding closeOnboarding={getStarted} />}

			{!newUser && (
				<div className={homeStyle.dashboardContainer}>
					<div className={homeStyle.dashboardContent}>
						<div className={homeStyle.dashboardContentOne}>
							<h1 className={homeStyle.dashBTitle}>hng server</h1>

							<div className={homeStyle.dashboardBorder}>
								<div className={homeStyle.dashboardContentOneDetails}>
									<h2 className={homeStyle.dashboardContentOneDetailsTitle}>
										End point:
									</h2>
									<p className={homeStyle.dashboardContentOneDetailsText}>
										server-devops/18.20.31.10
									</p>
								</div>
								<div className={homeStyle.dashboardContentOneDetails}>
									<h2 className={homeStyle.dashboardContentOneDetailsTitle}>
										IP Address:
									</h2>
									<p className={homeStyle.dashboardContentOneDetailsText}>
										192.168.0.1
									</p>
								</div>
								<div className={homeStyle.dashboardContentOneDetails}>
									<h2 className={homeStyle.dashboardContentOneDetailsTitle}>
										Server health:
									</h2>
									<button
										className={homeStyle.dashboardContentOneDetailsText}
										type="button"
										id={homeStyle.dashboardContentOneDetailsBtn}
									>
										Excellent
									</button>
								</div>
							</div>
						</div>

						<div className={homeStyle.dashboardContentOne}>
							<h1 className={homeStyle.dashBTitle}>hng server</h1>
							<div className={homeStyle.dashboardBorder}>
								<div className={homeStyle.dashboardContentOneDetails}>
									<h2 className={homeStyle.dashboardContentOneDetailsTitle}>
										End point:
									</h2>
									<p className={homeStyle.dashboardContentOneDetailsText}>
										server-devops/18.20.31.10
									</p>
								</div>
								<div className={homeStyle.dashboardContentOneDetails}>
									<h2 className={homeStyle.dashboardContentOneDetailsTitle}>
										IP Address:
									</h2>
									<p className={homeStyle.dashboardContentOneDetailsText}>
										192.168.0.1
									</p>
								</div>
								<div className={homeStyle.dashboardContentOneDetails}>
									<h2 className={homeStyle.dashboardContentOneDetailsTitle}>
										Server health:
									</h2>
									<button
										className={homeStyle.dashboardContentOneDetailsText}
										type="button"
										id={homeStyle.dashboardContentOneDetailsBtnTwo}
									>
										critical
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
