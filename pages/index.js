import { Box, Flex } from 'reflexbox';
import { AuthWrapper, AuthSection } from '../components/Auth.components';
import { Input, Label } from '../components/Form.components';
import { Button } from '../components/Button.components';
import {
	HeadingLarge,
	HeadingSmall,
} from '../components/Typography.components';

export default function Home() {
	return (
		<AuthWrapper>
			<Box mb="48px">
				<HeadingLarge>GUS QUEM FALA</HeadingLarge>
			</Box>
			<AuthSection>
				<Flex
					height="100%"
					textAlign="center"
					alignItems="center"
					justifyContent="center"
				>
					<HeadingSmall color="#1e2a32">Tela da home :D</HeadingSmall>
				</Flex>
			</AuthSection>
		</AuthWrapper>
	);
}
