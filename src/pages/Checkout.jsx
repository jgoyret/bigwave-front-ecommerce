import React, { useEffect, useState } from 'react';
import {
	TextField,
	Select,
	Box,
	MenuItem,
	Checkbox,
	Button,
	Stack,
} from '@mui/material';
import NavBarApp from '../components/NavBarApp';
import { Nav } from 'react-bootstrap';
import Footer from '../components/Footer';
import '../styles/Checkout.css';

function Checkout() {
	return (
		<>
			<NavBarApp />
			<div className="container container-content">
				<div className="row">
					<div className="col-6">
						<h3>Contact Information</h3>
						<Box component="form" onSubmit="">
							<TextField
								className="bg-white"
								id="email"
								label="Email"
								type="email"
								variant="outlined"
								fullWidth
							/>
							<hr />
							<h3>Shipping Information</h3>
							<div className="d-flex mb-3">
								<TextField
									className="bg-white"
									id="firstname"
									label="First Name"
									type="text"
									variant="outlined"
									fullWidth
								/>
								<TextField
									className="bg-white"
									id="lastname"
									label="Last Name"
									type="text"
									variant="outlined"
									fullWidth
								/>
							</div>
							<div className="mb-3">
								<TextField
									className="bg-white"
									id="adress"
									label="Adress"
									type="text"
									variant="outlined"
									fullWidth
								/>
							</div>
							<div className="d-flex mb-3">
								<TextField
									className="bg-white"
									id="city"
									label="City"
									type="text"
									variant="outlined"
									fullWidth
								/>
								<TextField
									className="bg-white"
									id="country"
									label="Country"
									type="text"
									variant="outlined"
									fullWidth
								/>
							</div>
							<div className="d-flex mb-3">
								<TextField
									className="bg-white"
									id="state"
									label="State"
									type="text"
									variant="outlined"
									fullWidth
								/>
								<TextField
									className="bg-white"
									id="postalcode"
									label="Postal Code"
									type="text"
									variant="outlined"
									fullWidth
								/>
							</div>
							<TextField
								className="bg-white"
								id="phone"
								label="Phone"
								type="text"
								variant="outlined"
								fullWidth
							/>
							<hr />
							<h3>Payment Information</h3>
							<Select
								className="bg-white mb-3"
								label="Payment Method"
								variant="outlined"
								fullWidth
							>
								<MenuItem value={10}>Credit Card</MenuItem>
								<MenuItem value={20}>Bitcoin</MenuItem>
								<MenuItem value={30}>Paypal</MenuItem>
							</Select>
							<div className="mb-3">
								<TextField
									className="bg-white"
									id="cardnumber"
									label="Card Number"
									type="text"
									variant="outlined"
									fullWidth
								/>
							</div>
							<div className="mb-3">
								<TextField
									className="bg-white"
									id="cardholder"
									label="Card Holder"
									type="text"
									variant="outlined"
									fullWidth
								/>
							</div>
							<div className="d-flex">
								<TextField
									className="bg-white"
									id="expirationdate"
									label="Expiration Date"
									type="text"
									variant="outlined"
									fullWidth
								/>
								<TextField
									className="bg-white"
									id="cvv"
									label="CVV"
									type="text"
									variant="outlined"
									fullWidth
								/>
							</div>
						</Box>
					</div>
					<div className="col-6 ">
						<h3>Order Summary</h3>
						<div className="flex-row row card object-fit-cover shadow">
							<div className="col-3">
								<img
									className="cart-image img-fluid object-fit-cover w-100 h-100"
									src="/jugo-removebg-preview.png"
									alt="Card image cap"
								></img>
							</div>
							<div className="col-9">
								<div className="d-flex justify-content-between mb-5 pt-3">
									<h6 class="card-title">Pack Picada - Humus</h6>
									<i class="bi bi-trash"></i>
								</div>
								<div className="d-flex justify-content-between">
									<p className="fw-bold">35 USD</p>
									<p>Qty: 1</p>
								</div>
							</div>

							<hr />
							<div className="d-flex strong justify-content-between">
								<p>Subtotal</p>
								<p className="fw-bold">35 USD</p>
							</div>
							<div className="d-flex justify-content-between">
								<p>Shipping</p>
								<p className="fw-bold">50 USD</p>
							</div>
							<div className="d-flex justify-content-between">
								<p>Taxes</p>
								<p className="fw-bold">30 USD</p>
							</div>
							<hr />
							<div className="d-flex justify-content-between">
								<h3>Total</h3>
								<p className="fw-bold">115 USD</p>
							</div>
							<button className="btn btn-primary">Confirm Order</button>

							<img
								src="../../public/QR.png"
								alt="QR"
								className="d-flex justify-content-center align-items-center w-50 h-50"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Checkout;
