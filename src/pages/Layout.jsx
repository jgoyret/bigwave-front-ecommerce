// components/Layout.jsx
import { Outlet } from 'react-router-dom';
import NavbarApp from '../components/NavBarApp';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Layout() {
	return (
		<>
			<ScrollToTop />
			<NavbarApp />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default Layout;
