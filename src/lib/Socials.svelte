<script lang="ts">
	import { socials, type IconName } from './links';

	const icons: Record<IconName, string> = {
		github:
			'<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
		link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
	};

	const isExternal = (href: string) => href.startsWith('http');
</script>

<footer>
	<nav aria-label="Social links">
		<ul>
			{#each socials as { name, href, icon } (name)}
				<li>
					<a
						{href}
						aria-label={name}
						target={isExternal(href) ? '_blank' : undefined}
						rel={isExternal(href) ? 'noopener noreferrer' : undefined}
					>
						<svg
							viewBox="0 0 24 24"
							width="22"
							height="22"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							{@html icons[icon] ?? icons.link}
						</svg>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</footer>

<style>
	footer {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 2px solid var(--rule);
	}

	ul {
		display: flex;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		display: grid;
		place-items: center;
		width: 3rem;
		height: 3rem;
		border-radius: 1rem;
		background: var(--chip-bg);
		color: var(--chip-ink);
		transition:
			transform 180ms cubic-bezier(0.3, 1.6, 0.5, 1),
			color 120ms ease;
	}

	a:hover,
	a:focus-visible {
		transform: translateY(-0.25rem);
		color: var(--accent);
	}

	a:focus-visible {
		outline: 2px solid var(--chip-bg);
		outline-offset: 3px;
	}

	@media (prefers-reduced-motion: reduce) {
		a {
			transition: none;
		}
		a:hover,
		a:focus-visible {
			transform: none;
		}
	}
</style>