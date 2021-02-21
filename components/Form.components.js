import styled from 'styled-components';

export const Input = styled.input`
	width: 100%;
	height: 52px;
	color: #1e2a32;
	background-color: #fff;
	border-radius: 4px;
	border: none;
	box-shadow: 0 0 0 1px #e9eef2;
	font-size: 16px;
	padding: 0 16px;

	::placeholder {
		color: #708797;
	}

	&:hover {
		box-shadow: 0 0 0 1px #cbd5dc;
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px #0277ff;
	}
`;

export const Label = styled.label`
	display: inline-flex;
	font-size: 13px;
	color: #1e2a32;
	line-height: 150%;
`;
