import { useTheme } from 'next-themes'

import { Header } from '@/components/header'

export default async function Home() {
	const { theme, resolvedTheme } = useTheme()
	console.log(theme, resolvedTheme)
	return (
		<div className="space-y-4 py-4">
			<Header />
			<main className="mx-auto w-full max-w-[1200px] space-y-4">
				<p className="text-sm text-muted-foreground">Select an organization</p>
			</main>
		</div>
	)
}
