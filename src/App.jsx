import React from "react";
import { Link, Outlet } from "react-router-dom";
const App = () => {
	return (
		<>
			<div className="container mx-auto">
				<nav className="bg-gray-200 rounded-md py-5 px-3 flex gap-4 text-2xl">
					<Link to="/invoices">
						{" "}
						<span>Invoices</span>
					</Link>
					<Link to="/expenses">
						{" "}
						<span>Expenses</span>
					</Link>
				</nav>
				<Outlet />
				{/* An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */}

				{/* https://reactrouter.com/en/main/components/outlet */}
			</div>
		</>
	);
};
export default App;
