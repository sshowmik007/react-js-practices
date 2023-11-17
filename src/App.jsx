import React from "react";
import { Provider } from "mobx-react";
import AuthStatus from "./components/AuthStatus";
import createAuthStore from "./stores/Store";

const App = () => {
	const authStore = createAuthStore();

	return (
		<Provider authStore={authStore}>
			<div className="container mx-auto p-4">
				<h1 className="text-4xl font-bold mb-4">MobX Authentication Example</h1>
				<AuthStatus />
			</div>
		</Provider>
	);
};

export default App;
