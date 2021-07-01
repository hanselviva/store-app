import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import {
	Button,
	Container,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
	},
	cardWrapper: {
		marginBottom: theme.spacing(2),
		textAlign: "left",
	},

	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		padding: theme.spacing(2),
		// backgroundColor: "#ffccbc",
		backgroundColor: "transparent",
		borderRadius: "0px",
		border: "1px solid #ffccbc",
	},
	cardButton: {
		"&:hover": {
			backgroundColor: "#ff5722",
			color: "white",
		},
	},
	cardMedia: {
		paddingTop: "56.25%", // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
}));
// MUI variable

const Store = () => {
	const [items, setItems] = useState([]);
	const classes = useStyles();
	const game = useParams();
	const history = useHistory();

	useEffect(() => {
		axios
			.get(
				"https://www.cheapshark.com/api/1.0/games?title=Game&limit=50&exact=0",
			)
			.then((res) => {
				setItems(res.data);
				localStorage.setItem("items", JSON.stringify(res.data));
			})
			.catch((err) => console.log(err));
	}, []);

	// const getItem = (e) => {
	// 	e.preventDefault();
	// 	const arr = localStorage.getItem("items");
	// 	const newArr = JSON.parse(arr);
	// 	console.log(newArr);
	// };

	const viewDetails = (e) => {
		e.preventDefault();
		history.push(`/store${game}`);
	};

	const handleAddToCart = (e) => {
		e.preventDefault();
		//
		const itemsStr = localStorage.getItem("items");
		const itemsArr = JSON.parse(itemsStr);
	};

	return (
		<div className="storeWrapper">
			<Container className={classes.cardGrid} maxWidth="lg">
				<Grid container spacing={4}>
					{items.map((card, index) => (
						<Grid item key={index} md={3} className={classes.cardWrapper}>
							<Card className={classes.card} variant="outlined">
								<CardMedia
									className={classes.cardMedia}
									image={
										card.thumb
											? card.thumb
											: "https://cdn.pixabay.com/photo/2017/08/28/16/17/super-mario-2690254_960_720.jpg"
									}
									title=""
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" component="h2">
										{card.external} <br />
									</Typography>
									<Typography>Price to rent: ${card.cheapest}</Typography>
								</CardContent>
								<CardActions>
									<Button
										className={classes.cardButton}
										size="small"
										variant="outlined"
										onClick={viewDetails}
									>
										View
									</Button>
									<Button
										className={classes.cardButton}
										size="small"
										variant="contained"
										color="secondary"
									>
										Rent this Game
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	fetchError: state.fetchError,
	items: state.items,
	cart: state.cart,
});

export default connect(mapStateToProps, { addToCart })(Store);
