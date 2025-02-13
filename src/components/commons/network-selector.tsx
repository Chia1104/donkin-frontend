'use client';

import { Image } from '@heroui/image';
import { Select, SelectItem } from '@heroui/select';

export const networks = [
	{
		id: 1,
		name: 'SQL',
		value: 'sql',
		image: '/assets/images/sql-network.png',
	},
];

const NetworkSelector = () => {
	return (
		<Select
			classNames={{
				trigger: 'border-1 p-2',
			}}
			selectionMode="single"
			variant="bordered"
			radius="full"
			selectedKeys={[networks[0].value]}
			defaultSelectedKeys={[networks[0].value]}
			className="min-w-32"
			items={networks}
			placeholder="Select a network"
			renderValue={items => {
				return items.map(item =>
					item.data ? (
						<div key={item.key} className="flex items-center gap-2">
							<Image alt={item.data.name} className="flex-shrink-0" width={24} height={24} src={item.data.image} />
							<div className="flex flex-col">
								<span>{item.data.name}</span>
							</div>
						</div>
					) : null,
				);
			}}
		>
			{network => (
				<SelectItem key={network.value} textValue={network.name}>
					<div className="flex gap-2 items-center">
						<Image alt={network.name} className="flex-shrink-0" width={24} height={24} src={network.image} />
						<div className="flex flex-col">
							<span className="text-small">{network.name}</span>
						</div>
					</div>
				</SelectItem>
			)}
		</Select>
	);
};

export default NetworkSelector;
