import Head from './Head';
import Link from 'next/link';

const Header = () => (
	<>
	<Head />
	<header>
		<Link href="/"><a>
			<img src="/pgnet-logo.svg" alt="logo" />
			<h2>Paul Guyot</h2>
		</a></Link>
	</header>
	</>
);

export default Header;
