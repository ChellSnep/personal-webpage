export type IconName = 'github' | 'link';

export interface Social {
	name: string;
	href: string;
	icon: IconName;
}

export const socials: Social[] = [
	{
		name: 'GitHub',
		href: 'https://github.com/ChellSnep',
		icon: 'github'
	}
];