import { ImageResponse } from 'next/og';

import { AcmeIcon } from '@/components/icons/acme-icon';

export const size = {
	width: 32,
	height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
	return new ImageResponse(<AcmeIcon />, {
		...size,
		status: 200,
	});
}
