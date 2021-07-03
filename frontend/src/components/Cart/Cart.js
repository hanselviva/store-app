import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions";
import { useHistory } from "react-router-dom";

//
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	cartWrapper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	tableContainer: {
		width: "60vw",
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(10),
	},
	textContent: {
		height: "30vh",
		width: "60vw",
		margin: "10vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	gameTitleCol: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
}));

const Cart = (props) => {
	const { cart, removeFromCart } = props;
	const classes = useStyles();
	const history = useHistory();

	const total = cart.reduce((accumulator, curr) => accumulator + curr.rent, 0);

	return (
		<div className={classes.cartWrapper}>
			{cart.length === 0 ? (
				<Paper className={classes.textContent}>
					<h3>
						You currently have no items in your cart. Browse games and add items
						to cart.
					</h3>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => {
							history.push("/store");
						}}
						style={{ width: "20vw" }}
					>
						Find Games to Rent
					</Button>
				</Paper>
			) : (
				<div>
					<TableContainer component={Paper} className={classes.tableContainer}>
						<Table size="medium">
							<TableHead>
								<TableRow>
									<TableCell>Item Number</TableCell>
									<TableCell>Title</TableCell>

									<TableCell align="right">Rent Price</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{cart.map((item) => (
									<TableRow key={item.id}>
										<TableCell>{item.id}</TableCell>
										<TableCell className={classes.gameTitleCol}>
											<img
												alt={item.title}
												src={item.thumbnail}
												width="100px"
												style={{ marginRight: "10px" }}
											/>
											{item.title}
										</TableCell>

										<TableCell align="right">$ {item.rent}</TableCell>
										<TableCell align="right">
											<Button
												size="small"
												variant="outlined"
												onClick={() => {
													removeFromCart(item);
												}}
											>
												Remove
											</Button>
										</TableCell>
									</TableRow>
								))}
								<TableRow>
									<TableCell colSpan={2} align="right">
										Total: ${total}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<Button
						size="large"
						variant="contained"
						color="secondary"
						onClick={() => {
							history.push("/login");
						}}
					>
						PROCEED TO CHECKOUT
					</Button>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	fetchError: state.fetchError,
	cart: state.cart,
});
export default connect(mapStateToProps, { removeFromCart })(Cart);
