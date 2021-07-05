import React from "react";
import { connect } from "react-redux";
import Carousel from "react-material-ui-carousel";

const Item = (props) => {
	return (
		<div>
			<h2>{props.item.title}</h2>

			<img
				src={props.item.thumbnail}
				alt="vg"
				style={{
					height: "50vh",
					backgroundPosition: "center",
				}}
			/>

			<p>{props.item.short_description}</p>

			{/* <Button className="CheckButton">Check it out!</Button> */}
		</div>
	);
};

const CarouselComp = (props) => {
	const { dataForCarousel } = props;

	return (
		<div
			style={{
				height: "70vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Carousel>
				{dataForCarousel.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</Carousel>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	dataForCarousel: state.dataForCarousel,
});

export default connect(mapStateToProps, {})(CarouselComp);
