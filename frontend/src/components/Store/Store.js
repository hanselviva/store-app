import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../actions";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Pagination from "@material-ui/lab/Pagination";
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
	storeWrapper: {},
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
	pagination: {
		"& > *": {
			marginTop: theme.spacing(2),
		},
	},
	dialog: {
		maxWidth: "sm",
	},
}));

// MUI variable

const Store = (props) => {
	const { cart, addToCart, removeFromCart, items } = props;
	const classes = useStyles();
	// const history = useHistory();

	const [openDialog, setOpenDialog] = useState(false);
	const [gameDetails, setGameDetails] = useState({});
	const handleViewDetails = (game) => {
		setOpenDialog(true);
		setGameDetails(game);
	};
	const handleCloseDetails = () => {
		setOpenDialog(false);
	};

	// Pagination vars
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(32);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const calculateNoOfPages = () => {
		const totalItems = items.length;
		let arr = [];
		for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
			arr.push(i);
		}
		return arr;
	};
	// --- end of pagination vars

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<div className="storeWrapper" id="store">
			<Container className={classes.cardGrid} maxWidth="lg">
				<Grid container spacing={2}>
					{currentItems.map((card) => (
						<Grid item key={card.id} md={3} className={classes.cardWrapper}>
							<Card className={classes.card} variant="outlined">
								<CardMedia
									className={classes.cardMedia}
									image={
										card.thumbnail
											? card.thumbnail
											: "https://cdn.pixabay.com/photo/2017/08/28/16/17/super-mario-2690254_960_720.jpg"
									}
									title=""
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" component="h2">
										{card.title} <br />
									</Typography>
									<Typography>
										<b>Rent Price: ${card.rent}</b>
										<br />
										<b>Platform: </b> {card.platform} <br />
										<b>Description:</b> {card.short_description}
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										className={classes.cardButton}
										size="small"
										variant="outlined"
										onClick={() => {
											handleViewDetails(card);
										}}
									>
										Details
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
											onClick={(e) => {
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

				<Dialog
					className={classes.dialog}
					fullWidth
					open={openDialog}
					onClose={() => {}}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Details"}</DialogTitle>
					<DialogContent>
						<img
							alt="thumbnail"
							src={gameDetails.thumbnail}
							style={{ height: "250px" }}
						/>
						<DialogContentText id="alert-dialog-description">
							<b>Title: </b>
							{gameDetails.title} <br />
							<b>Genre: </b>
							{gameDetails.genre} <br />
							<b>Platform: </b>
							{gameDetails.platform} <br />
							<b>Developer: </b>
							{gameDetails.developer} <br />
							<b>Publisher: </b>
							{gameDetails.publisher} <br />
							<b>Description: </b>
							{gameDetails.short_description} <br />
							<b>Release Date: </b>
							{gameDetails.release_date} <br />
							<a rel="noreferrer" target="_blank" href={gameDetails.game_url}>
								Official Site
							</a>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseDetails} color="primary" autoFocus>
							Close
						</Button>
					</DialogActions>
				</Dialog>

				<div className={classes.pagination}>
					<Pagination
						count={calculateNoOfPages().length}
						page={currentPage}
						defaultPage={1}
						variant="outlined"
						shape="rounded"
						color="primary"
						size="large"
						showFirstButton
						showLastButton
						onChange={(e, value) => {
							window.location.href = "#store";
							paginate(value);
						}}
					/>
				</div>
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
