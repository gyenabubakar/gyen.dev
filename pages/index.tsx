/* eslint-disable @next/next/no-img-element */
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
					<div className="flex-between">
						<a
							href="https://github.com/gyenabubakar/gyen.dev"
							className="btn github font-md"
						>
							<img src="/github.svg" alt="github" />
						</a>

						<a
							href="https://blog.gyen.dev"
							className="btn checkout-btn font-md"
						>
							<span className="color-2">~$</span>&nbsp;
							<span className="color-1">git checkout blog</span>
						</a>
					</div>
				</div>
			</header>

			<main>
				<div className="container">
					<div className="row">
						<div className="text-content">
							<h1 className="font-bold">
								Portfolio&apos;s
								<br />
								being developed.
							</h1>
							<h3 className="font-bold color-1">Will be deployed very soon.</h3>
						</div>

						<div className="img-illustration">
							<img src="/imac.png" alt="iMac illustration" />
						</div>
					</div>
				</div>
			</main>

			<img src="/blob.svg" alt="blob" className="blob" />
		</div>
	);
};

export default Home;
