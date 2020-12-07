import Link from 'next/link';

const Footer = () => (
	<footer>
		<p>© Paul Guyot | 2020</p>
		<Link href="/"><a>
			<img src="/pgnet-logo.svg" alt="logo" style={{ maxHeight: '50px' }} />
		</a></Link>
	</footer>
);

export default Footer;
