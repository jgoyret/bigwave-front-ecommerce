import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBarApp from '../components/NavBarApp';
import Confetti from 'react-confetti';
import '../styles/OrderGreetings.css';

function OrderGreetings() {
	const [loggedUser, setLoggedUser] = useState();
	const token = useSelector((state) => state.user.token);

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

	return (
		<>
			{loggedUser && (
				<div className="container">
					<Confetti tweenDuration={5000} />
					<NavBarApp />
					<div className="container styledDiv">
						<div className="order-info">
							<h1>Thank you for your purchase, {loggedUser.firstname}</h1>
							<p>
								Order number:{' '}
								{loggedUser?.Orders[loggedUser.Orders.length - 1].id}{' '}
							</p>
						</div>
						<div>
							<iframe
								src="https://i.pinimg.com/originals/88/82/bc/8882bcf327896ab79fb97e85ae63a002.gif"
								width="600"
								height="400"
								style={{ border: 'none' }}
								title="Rick Astley Singing"
							></iframe>
						</div>
						<p>
							Wait until we confirm your Order on{' '}
							<a href="/my-profile"> your profile</a>. In the meantime you can
							Dance with Rick!!
						</p>
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
			)}
		</>
	);
}

export default OrderGreetings;
