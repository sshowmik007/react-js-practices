import React from "react";
import { getInvoices } from "./data";
import { Link, Outlet } from "react-router-dom";

export const Invoices = () => {
	let invoices = getInvoices();
	return (
		<>
			<main className="text-center">
				<div className="flex flex-col gap-3">
					{invoices.map((invoice) => (
						<Link
							className="bg-slate-300"
							to={`/invoices/${invoice.number}`}
							key={invoice.number}
						>
							<span className="text-4xl font-bold text-rose-600">
								{" "}
								{invoice.name}
							</span>
						</Link>
					))}
				</div>
				<Outlet />
			</main>
		</>
	);
};
