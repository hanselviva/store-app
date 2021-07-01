import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions";

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
	tableContainer: { maxWidth: "80vw" },
}));

const Cart = (props) => {
	const { cart, removeFromCart } = props;

	const total = cart.reduce(
		(accumulator, curr) => accumulator + parseFloat(curr.cheapest),
		0,
	);

	const classes = useStyles();
	return (
		<React.Fragment>
			<div className={classes.cartWrapper}>
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
								<TableRow key={item.gameID}>
									<TableCell>{item.gameID}</TableCell>
									<TableCell>{item.external}</TableCell>

									<TableCell align="right">${item.cheapest}</TableCell>
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
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	fetchError: state.fetchError,
	cart: state.cart,
});
export default connect(mapStateToProps, { removeFromCart })(Cart);
