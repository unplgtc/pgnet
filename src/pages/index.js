import Head from 'next/head';
import ThemeContext from '../components/Theme/ThemeContext';
import { useContext, useEffect } from 'react';
import useCookies from '../hooks/useCookies';
import withLayout from '../components/Layout';

const IndexPage = () => {
	const { theme, setTheme } = useContext(ThemeContext),
	      themeCookie = useCookies('theme');

	useEffect(() => {
		if (themeCookie && themeCookie !== theme) {
			setTheme(themeCookie);
		}
	});

	return (
		<>
			<Head>
				<title>Paul Guyot</title>
			</Head>
			
			<h1>Hello, world!</h1>
		</>
	);
}

export default withLayout(IndexPage);
