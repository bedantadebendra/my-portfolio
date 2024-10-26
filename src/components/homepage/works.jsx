import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
						<img
								src="./mindcomlogo.jfif"
								alt="Mindcom"
								className="work-image"
							/>
							<div className="work-title">Mindcom Consulting Services Pvt Ltd</div>
							<div className="work-subtitle">
								Fullstack Developer
							</div>
							<div className="work-duration">September 2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
