'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

import satelliteIcon from '@/assets/satellite-svgrepo.svg'

export default function HeaderLogoIcon() {
	const { theme } = useTheme()
	return (
		<Image
			src={satelliteIcon}
			className={theme === 'dark' ? 'size-6 dark:invert' : 'size-6'}
			alt="Rocketseat"
		/>
	)
}
