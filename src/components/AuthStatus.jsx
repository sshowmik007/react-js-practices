import React from "react";
import { observer } from "mobx-react";
import createAuthStore from "../stores/Store";

const AuthStatus = observer(() => {
	const authStore = createAuthStore();

	return (
		<div>
			{createAuthStore.isAuthenticated ? (
				<div>
					<p>Welcome, {authStore.user.username}!</p>
					<button className="bg-blue-400" onClick={() => authStore.logout()}>
						Logout
					</button>
				</div>
			) : (
				<div>
					<p>Please log in</p>
					<button
						className="bg-blue-400"
						onClick={() => authStore.login("demo", "password")}
					>
						Login
					</button>
				</div>
			)}
		</div>
	);
});

export default AuthStatus;
