import { Cookies } from 'react-cookie';
import envConfig from '../../config/envConfig';

const cookies = new Cookies();

const useCookies = (name, value, options) => {
	name = `${envConfig.siteName}_${name}`;

	return value === undefined
		? cookies.get(name)
		: value === null
			? cookies.remove(name)
			: cookies.set(name, value, options);
}

export default useCookies;
