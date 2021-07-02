import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../actions";
import { useHistory } from "react-router-dom";

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
	cardButton: {},
	cardButtonRemove: {
		backgroundColor: "#ff6f60",
		color: "white",
		"&:hover": {
			backgroundColor: "#ff6f60",
			color: "black",
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

const Store = (props) => {
	const { cart, addToCart, removeFromCart, items } = props;

	const classes = useStyles();
	const history = useHistory();

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const viewDetails = (id) => {
		history.push(`/store/:${id}`);
	};

	return (
		<div className="storeWrapper">
			<Container className={classes.cardGrid} maxWidth="lg">
				<Grid container spacing={4}>
					{items.map((card) => (
						<Grid item key={card.gameID} md={3} className={classes.cardWrapper}>
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
										onClick={() => {
											viewDetails(card.gameID);
										}}
									>
										View
									</Button>

									{cart.includes(card) ? (
										<Button
											className={classes.cardButtonRemove}
											size="small"
											variant="contained"
											color="secondary"
											onClick={() => {
												removeFromCart(card);
											}}
										>
											Remove from Cart
										</Button>
									) : (
										<Button
											className={classes.cardButton}
											size="small"
											variant="contained"
											color="secondary"
											onClick={() => {
												addToCart(card);
											}}
										>
											Rent this Game
										</Button>
									)}
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
	cart: state.cart,
	items: state.items,
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(Store);
