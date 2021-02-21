import styled from 'styled-components';

const Loading = styled.div`
	display: inline-block;
	width: 24px;
	height: 24px;

	&:after {
		content: ' ';
		display: block;
		width: 18px;
		height: 18px;
		margin: 2px;
		border-radius: 50%;
		border: 3px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}

	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const ButtonPattern = styled.button`
	height: 42px;
	border-radius: 16px;
	border: none;
	width: 100%;
	background-color: #2575b0;
	color: #fff;
	font-size: 16px;
	cursor: pointer;
	position: relative;

	&:hover {
		box-shadow: 0px 12px 48px rgba(30, 42, 50, 0.12);
	}

	&:focus {
		outline: 0;
	}
`;

export function Button({ loading, children }) {
	return <ButtonPattern>{loading ? <Loading /> : children}</ButtonPattern>;
}
