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
		backgroundColor: "#ffccbc",
	},
	cardButton: {
		color: theme.palette.secondary.dark,
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
			.get("https://picsum.photos/v2/list")
			.then((res) => setItems(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="storeWrapper">
			<Container className={classes.cardGrid} maxWidth="lg">
				<Grid container spacing={4}>
					{items.map((card, index) => (
						<Grid
							item
							key={index}
							xs={12}
							sm={6}
							md={4}
							className={classes.cardWrapper}
						>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image={
										card.image
											? card.image
											: "https://cdn.pixabay.com/photo/2017/08/28/16/17/super-mario-2690254_960_720.jpg"
									}
									title={"Video Game Title"}
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" component="h2">
										{card.name ? card.name : "Video Game Title"} <br />
									</Typography>
									<Typography>
										Description:
										{card.description ? card.description : "Game summary"}
									</Typography>
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
