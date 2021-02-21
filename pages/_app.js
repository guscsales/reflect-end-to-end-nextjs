import { NormalizeStyles } from '../styles/NormalizeStyles';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NormalizeStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
