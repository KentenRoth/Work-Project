import React from 'react';
import './CSS/Login.css';

export default () => {
	return (
		<div className="container">
			<div className="box">
				<div className="formBox">
					<form className="form">
						<p className="error">*Username or Password Incorrect</p>
						<input className="username" placeholder="Username" />
						<input
							className="password"
							type="password"
							placeholder="Password"
						/>
						<br />
						<button className="loginButton">Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};
