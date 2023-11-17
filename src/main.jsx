import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Invoices } from "./React-Router-DomV6/components/Invoices.jsx";
import { Expenses } from "./React-Router-DomV6/components/Expenses.jsx";
import { Bills } from "./React-Router-DomV6/components/Bills.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		{/* Switch */}
		<Routes>
			{/* Cases */}
			<Route path="/" element={<App />}>
				<Route path="/invoices" element={<Invoices />}>
					<Route path=":invoiceID" element={<Bills />}></Route>
				</Route>
				<Route path="/expenses" element={<Expenses />} />
				{/* no matchng page */}
				<Route
					path="*"
					element={
						<main className="text-center">
							<p className="text-3xl">There is nothing to show</p>
						</main>
					}
				></Route>
			</Route>
		</Routes>
	</BrowserRouter>
);
