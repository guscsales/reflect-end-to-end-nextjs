import styled from 'styled-components';

const typographyDefaultStyleMixin = (props) => `
  color: ${props.color};
  margin: 0;
  line-height: 100%;
`;

export const HeadingLarge = styled.h1`
	${(props) => typographyDefaultStyleMixin(props)};
	font-size: 36px;
`;

export const HeadingSmall = styled.h2`
	${(props) => typographyDefaultStyleMixin(props)};
	font-size: 24px;
`;

HeadingLarge.defaultProps = {
	color: '#fff',
};

HeadingSmall.defaultProps = {
	color: '#fff',
};
