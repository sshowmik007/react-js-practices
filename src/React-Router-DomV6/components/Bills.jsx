import React from "react";
import { useParams } from "react-router-dom";

export const Bills = () => {
	let params = useParams();
	console.log(params.invoiceID);
	return (
		<div className="my-5">
			<h1 className="text-2xl font-semibold text-cyan-800">
				Invoice {params.invoiceID}
			</h1>
		</div>
	);
};
