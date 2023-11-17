import * as React from "react";
import { render, screen } from "@testing-library/react";

import { ControlsAddSlideOver } from "./ControlsAddSlideOver";
import { SidePanel } from "./SidePanel";

describe("SidePanel Component", () => {
	it("should render the panel with the correct title and description", () => {
		render(
			<SidePanel
				showPanel={true}
				onClosePanel={() => {}}
				panelTitle="Personal Information"
				panelDescription="Use a permanent address where you can receive mail."
			/>
		);

		const panelTitle = screen.getByText("Personal Information");
		const panelDescription = screen.getByText(
			"Use a permanent address where you can receive mail."
		);

		expect(panelTitle).toBeInTheDocument();
		expect(panelDescription).toBeInTheDocument();
	});
});
