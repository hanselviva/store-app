import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const CarouselComp = ({ items }) => {
	const [newItems, setNewItems] = useState(items);

	useEffect(() => {
		const shuffle = items.sort(() => 0.5 - Math.random());
		const arrForCarousel = shuffle.slice(0, 4);
		setNewItems(arrForCarousel);
	}, [items]);

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
				{newItems.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</Carousel>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	items: state.items,
});

export default connect(mapStateToProps, {})(CarouselComp);
