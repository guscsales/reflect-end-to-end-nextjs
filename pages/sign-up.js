import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from 'reflexbox';
import { useFormik } from 'formik';
import { AuthWrapper, AuthSection } from '../components/Auth.components';
import { Input, Label } from '../components/Form.components';
import { Button } from '../components/Button.components';
import {
	HeadingLarge,
	HeadingSmall,
} from '../components/Typography.components';

export default function SignUp() {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const formik = useFormik({
		initialValues: { name: '', email: '', password: '' },
		onSubmit: () => {
			setLoading(true);
			setTimeout(() => {
				router.push('/login');
			}, 3000);
		},
	});

	return (
		<AuthWrapper>
			<Box mb="48px">
				<HeadingLarge>GUS QUEM FALA</HeadingLarge>
			</Box>
			<AuthSection>
				<Box mb="24px">
					<HeadingSmall color="#1e2a32">
						Faça seu cadastro!
					</HeadingSmall>
				</Box>
				<form onSubmit={formik.handleSubmit}>
					<Box mb="12px">
						<Box mb="4px">
							<Label>Nome</Label>
						</Box>
						<Input
							type="text"
							name="name"
							onChange={formik.handleChange}
						/>
					</Box>

					<Box mb="12px">
						<Box mb="4px">
							<Label>Email</Label>
						</Box>
						<Input
							type="email"
							name="email"
							onChange={formik.handleChange}
						/>
					</Box>

					<Box mb="32px">
						<Box mb="4px">
							<Label>Senha</Label>
						</Box>
						<Input
							type="password"
							name="password"
							onChange={formik.handleChange}
						/>
					</Box>

					<Button type="submit" loading={loading}>
						Criar conta
					</Button>
				</form>
			</AuthSection>
		</AuthWrapper>
	);
}
