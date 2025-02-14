'use client';

import { useTransition } from 'react';

import { Input, Divider, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { toast } from 'sonner';

import Card from '@/components/ui/card';
import SubmitForm from '@/components/ui/submit-form';
import { Provider } from '@/enums/authProvider.enum';
import { authClient } from '@/features/auth/client';

const LoginForm = () => {
	const [isPending, startTransition] = useTransition();

	const getCurrentDomain = () => {
		return window.location.origin;
	};

	return (
		<Card
			wrapperProps={{
				className: 'w-full max-w-[500px]',
			}}
			className="prose dark:prose-invert flex w-full max-w-[500px] flex-col items-center justify-center px-1 py-12 sm:px-4"
		>
			<h3>Sign in to your account</h3>
			<p className="mb-10 text-center text-xs">to continue to Donkin</p>
			<form
				className="flex w-4/5 flex-col gap-2"
				action={formData =>
					startTransition(async () => {
						const email = formData.get('email');
						if (!email) return;
						await authClient.signIn.magicLink(
							{
								email: email as string,
								callbackURL: getCurrentDomain(),
							},
							{
								onSuccess: () => {
									toast.success('Check your email for the magic link');
								},
								onError: () => {
									toast.error('An error occurred, please try again');
								},
							},
						);
					})
				}
			>
				<Input
					isRequired
					required
					disabled={isPending}
					placeholder="Email"
					type="email"
					name="email"
					className="w-full"
				/>
				<SubmitForm variant="flat" color="primary" className="w-full" isLoading={isPending}>
					Send magic link
				</SubmitForm>
			</form>
			<div className="flex items-center gap-4 w-4/5">
				<Divider className="flex-1" />
				<p className="shrink-0 text-tiny text-default-500 mb-0">OR</p>
				<Divider className="flex-1" />
			</div>
			<div className="flex w-4/5 justify-center gap-5 my-5">
				<Button
					onPress={() =>
						startTransition(async () => {
							await authClient.signIn.social({
								provider: Provider.google,
								callbackURL: getCurrentDomain(),
							});
						})
					}
					isLoading={isPending}
					variant="flat"
					color="primary"
					isIconOnly
					className="h-12 w-1/2 p-2"
				>
					<Icon icon="flat-color-icons:google" width={28} />
				</Button>
				<Button
					onPress={() =>
						startTransition(async () => {
							await authClient.signIn.social({
								provider: Provider.github,
								callbackURL: getCurrentDomain(),
							});
						})
					}
					isLoading={isPending}
					variant="flat"
					color="primary"
					isIconOnly
					className="h-12 w-1/2 p-2"
				>
					<Icon icon="mdi:github" width={28} />
				</Button>
			</div>
		</Card>
	);
};

export default LoginForm;
