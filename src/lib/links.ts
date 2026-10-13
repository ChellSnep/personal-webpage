/**
 * Your social links. Edit the list at the bottom and the dock updates itself.
 *
 * name    shown in the pop-up and read by screen readers
 * handle  small line under the name in the pop-up (optional)
 * href    where the button goes (https://... or mailto:...)
 * icon    one of the IconName values below
 */
export type IconName = 'github' | 'link';

export interface Social {
	name: string;
	href: string;
	icon: IconName;
}

export const socials: Social[] = [
	{
		name: 'GitHub',
		href: 'https://github.com/your-username',
		icon: 'github'
	}
];