import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Gyen Abubakar - Front-end Developer</title>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>

			<header>
				<div className="container">
					<div className="flex-end">
						<a href="https://blog.gyen.dev" className="checkout-btn font-md">
							<span className="color-2">~$</span>&nbsp;
							<span className="color-1">git checkout blog</span>
						</a>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Home;
