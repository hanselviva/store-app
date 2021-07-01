import React, { useState, useEffect } from "react";
import axios from "axios";

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

	useEffect(() => {
		axios
			.get(
				"https://www.cheapshark.com/api/1.0/games?title=game&limit=30&exact=0",
			)
			.then((res) => {
				setItems(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

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

export default Store;
