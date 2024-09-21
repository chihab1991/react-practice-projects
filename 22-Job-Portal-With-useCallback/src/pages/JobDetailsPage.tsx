import React from "react";

const JobDetailsPage = ({ selectedJob }) => {
	return (
		<div>
			<h3>{selectedJob.title}</h3>
			<p>{selectedJob.company}</p>
		</div>
	);
};

export default JobDetailsPage;
