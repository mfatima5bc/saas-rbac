import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

export default function AppLayout({
	children,
	sheet,
}: Readonly<{
	children: React.ReactNode
	sheet: React.ReactNode
}>) {
	if (!isAuthenticated()) {
		redirect('/auth/sign-in')
	}

	return (
		// <div className="space-y-4 py-4">
		// 	<Header />
		// 	<main className="mx-auto w-full max-w-[1200px]">{children}</main>
		// </div>
		<>
			{children}
			{sheet}
		</>
	)
}
