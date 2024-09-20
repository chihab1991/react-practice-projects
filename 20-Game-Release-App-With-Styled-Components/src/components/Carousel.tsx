import forza from "./../assets/forza.jpg";
import superMario from "./../assets/superMario.jpg";
import styled from "styled-components";

import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const CarouselContainer = styled.div`
	max-width: 600px;
	max-height: 720px;
	margin: 0 auto;

	button {
		margin-top: 1rem;
	}
`;
const Carousel = () => {
	return (
		<>
			<CarouselContainer>
				<CarouselProvider
					naturalSlideWidth={800}
					naturalSlideHeight={900}
					totalSlides={2}
				>
					<Slider>
						<Slide index={0}>
							<img src={superMario} alt="super mario" />
						</Slide>
						<Slide index={1}>
							<img src={forza} alt="forza horizon" />
						</Slide>
					</Slider>
					<ButtonBack>Back</ButtonBack>
					<ButtonNext>Next</ButtonNext>
				</CarouselProvider>
			</CarouselContainer>
		</>
	);
};

export default Carousel;
