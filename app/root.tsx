import { Links, LiveReload, Scripts } from '@remix-run/react'
import { KCDShop } from './kcdshop.tsx'
import { LinksFunction } from '@remix-run/node'
import favaiconUrl from './assets/favicon.svg'
import fontStyleUrl from './styles/font.css'
import tailwindStyleUrl from './styles/tailwind.css'

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
	]
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
