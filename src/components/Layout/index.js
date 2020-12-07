import Header from './Header';
import Footer from './Footer';
import ThemeContext from '../Theme/ThemeContext';
import useCookies from '../../hooks/useCookies';
import { useState } from 'react';

const withLayout = Page => () => {
	const [themeContext, setThemeContext] = useState({
		theme: 'light',
		setTheme: setTheme
	});

	function setTheme(theme) {
		useCookies('theme', theme);

		setThemeContext({
			theme: theme,
			setTheme: setTheme
		});
	}

	return (
		<>
		<ThemeContext.Provider value={themeContext}>
			<div className={`container ${themeContext.theme}`}>
				<div className='content'>
					<Header />
					<Page />
					<Footer />
				</div>
			</div>
		</ThemeContext.Provider>
		</>
	);
};

export default withLayout;
