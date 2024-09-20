import styled from "styled-components";
import { games } from "../games";

const HeroContainer = styled.div`
	max-width: 900px;
	margin: 0 auto;
	text-align: left;
	img {
		max-width: 800px;
	}
	li {
		list-style-type: none;
	}
`;
const Hero = () => {
	return (
		<>
			<HeroContainer>
				<h2>Upcoming Game Releases</h2>
				{games.map((game) => {
					return (
						<div key={game.id}>
							<img src={game.imageUrl} alt={game.title} />
							<h3>{game.title}</h3>
							<p>Release Date: {game.releaseDate}</p>
							<ul>
								{game.features.map((feature, index) => {
									return <li key={index}>{feature}</li>;
								})}
							</ul>
							<p>Price: {game.price}$</p>
							<p>Available on: {game.consoleVersions.join(",")}</p>
						</div>
					);
				})}
			</HeroContainer>
		</>
	);
};

export default Hero;
