import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Confetti from 'react-confetti';
import '../styles/OrderGreetings.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function OrderGreetings() {
	const [loggedUser, setLoggedUser] = useState();
	const token = useSelector((state) => state.user.token);
	const [order, setOrder] = useState(null);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const getUser = async () => {
			try {
				const response = await axios({
					url: `${import.meta.env.VITE_API_URL}/users/my-profile`,
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				});
				setLoggedUser(response.data);
				console.log(loggedUser);
			} catch (error) {
				console.log(error);
			}
		};
		getUser();
	}, []);

	useEffect(() => {
		if (!location.state || !location.state.order) {
			console.log('No state or order found');
			navigate('/');
		} else {
			console.log('State and order found');
			setOrder(location.state.order);
		}
	}, [location, navigate]);

	if (!order) {
		return null;
	}

	return (
		<>
			{loggedUser && (
				<div className="container thanks-container">
					<Confetti width={window.innerWidth} height={window.innerHeight} />
					<div className="row mt-5 d-flex">
						<div className="gracias">
							<h3>Thank you for your purchase, {loggedUser.firstname}</h3>
							<p>Order number: {order.id}</p>
						</div>
						<div className="col-6">
							<div className="styledDiv">
								<div className="order-info d-flex flex-column">
									<div class="card">
										<button class="dismiss" type="button"></button>
										<div class="header">
											<div class="div_image_v">
												<div class="image">
													<svg
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
														<g
															id="SVGRepo_tracerCarrier"
															stroke-linecap="round"
															stroke-linejoin="round"
														></g>
														<g id="SVGRepo_iconCarrier">
															{' '}
															<path
																d="M20 7L9.00004 18L3.99994 13"
																stroke="#000000"
																stroke-width="1.5"
																stroke-linecap="round"
																stroke-linejoin="round"
															></path>{' '}
														</g>
													</svg>
												</div>
											</div>
											<div class="content">
												<span class="title">Order validated</span>
												<p class="message">
													Thank you for your purchase. you package will be
													delivered within 15-60 minutes
												</p>
											</div>
										</div>
									</div>
								</div>
								<p className="mt-4">
									Wait until we confirm your Order on your profile or continue{' '}
									shopping.
								</p>
								<p> In the meantime you can Dance with Rick!!</p>
								<div>
									<p className="parrafito">
										Order confirmations can take up to 30 minutes.
									</p>
									<p>
										If you experience any problem or have any questions, please
										contact us at customerservice@bigwave.com
									</p>
								</div>
							</div>
						</div>
						<div className="col-6 mt-5">
							<div>
								<iframe
									src="https://i.pinimg.com/originals/88/82/bc/8882bcf327896ab79fb97e85ae63a002.gif"
									className="rickAstley shadow-lg mt-5"
									width="500"
									height="367"
									style={{ border: 'none' }}
									title="Rick Astley Singing"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default OrderGreetings;
