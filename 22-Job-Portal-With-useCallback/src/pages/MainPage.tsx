import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const jobs = [
	{ id: 1, title: "Frontend Developer", company: "TechCo" },
	{ id: 2, title: "UX Designer", company: "DesignHub" },
];
const MainPage = ({ setSelectedJob }) => {
	const navigate = useNavigate();
	const handleClick = useCallback(
		(jobId) => {
			const selectedJob = jobs.find((job) => job.id === jobId);
			setSelectedJob(selectedJob);
			navigate(`jobs/${jobId}`);
		},
		[setSelectedJob, navigate]
	);
	return (
		<div>
			<h2>Job listings</h2>
			<ul>
				{jobs.map((job) => {
					return (
						<li key={job.id} onClick={() => handleClick(job.id)}>
							{job.title} at {job.company}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default MainPage;
