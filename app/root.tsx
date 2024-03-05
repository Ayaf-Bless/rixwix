import { cssBundleHref } from '@remix-run/css-bundle'
import { type LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Scripts } from '@remix-run/react'
import favaiconUrl from './assets/favicon.svg'
import { KCDShop } from './kcdshop.tsx'
import fontStyleUrl from './styles/font.css'
import tailwindStyleUrl from './styles/tailwind.css'
// import './styles/global.css'

// 🐨 export a links function here that adds the favicon
// 💰 It should have the following properties:
// - rel: 'icon'
// - type: 'image/svg+xml'
// - href: '/favicon.svg'

export const links: LinksFunction = () => {
	return [
		{
			rel: 'icon',
			type: 'image/svg+xml',
			href: favaiconUrl,
		},
		{
			rel: 'stylesheet',
			href: fontStyleUrl,
		},
		{
			rel: 'stylesheet',
			href: tailwindStyleUrl,
		},
		cssBundleHref
			? {
					rel: 'stylesheet',
					href: cssBundleHref,
			  }
			: null,
	].filter(Boolean)
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Links />
			</head>
			<body>
				<p className="p-8 text-xl">Hello World</p>
				<Scripts />
				<KCDShop />
				<LiveReload />
			</body>
		</html>
	)
}
