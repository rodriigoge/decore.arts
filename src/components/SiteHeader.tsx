import { type ReactNode } from 'react'
import BrandWordmark from './BrandWordmark'
import { ArrowRight, Heart, InstagramIcon } from './Doodles'

type NavItem = {
	label: string
	href?: string
	action?: () => void
	active?: boolean
}

type SiteHeaderProps = {
	logo: string
	navItems: NavItem[]
	whatsappLink: string
	instagramLink: string
	mobileMenuOpen: boolean
	setMobileMenuOpen: (value: boolean | ((value: boolean) => boolean)) => void
	navigateToHome: () => void
}

function SiteHeader({
	logo,
	navItems,
	whatsappLink,
	instagramLink,
	mobileMenuOpen,
	setMobileMenuOpen,
	navigateToHome,
}: SiteHeaderProps) {
	const renderNavItem = (item: NavItem, mobile = false): ReactNode => {
		const baseClasses = mobile
			? `cursor-pointer rounded-2xl px-4 py-3 text-left text-base font-bold transition hover:bg-blush/50 ${
					item.active ? 'bg-blush/60 text-ink' : 'text-mauve'
				}`
			: `cursor-pointer rounded-full px-4 py-1.5 text-[0.95rem] font-bold transition ${
					item.active
						? 'bg-blush text-ink'
						: 'text-mauve hover:bg-blush/45 hover:text-ink'
				}`

		const handleClick = () => {
			setMobileMenuOpen(false)
			item.action?.()
		}

		if (item.href) {
			return (
				<a
					key={item.label}
					href={item.href}
					onClick={() => setMobileMenuOpen(false)}
					className={baseClasses}
				>
					{item.label}
				</a>
			)
		}

		return (
			<button
				key={item.label}
				type="button"
				onClick={handleClick}
				className={baseClasses}
			>
				{item.label}
			</button>
		)
	}

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-dashed border-ink/12 bg-cream/90 backdrop-blur-xl">
			<div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-2.5 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10">
				<button
					type="button"
					onClick={navigateToHome}
					className="flex min-w-0 cursor-pointer items-center gap-3 justify-self-start text-left"
					aria-label="Ir para a página inicial da Decorê Arts"
				>
					<img
						src={logo}
						alt="Logo Decorê Arts"
						className="h-11 w-11 shrink-0 rounded-full object-contain shadow-[0_8px_18px_rgba(63,47,49,0.12)]"
					/>
					<div className="flex min-w-0 items-baseline gap-3 whitespace-nowrap">
						<span className="relative text-ink">
							<BrandWordmark className="text-[1.9rem] sm:text-[2.1rem]" />
							<Heart className="absolute -right-4 top-0 h-3.5 w-3.5 text-clay" />
						</span>
						<span className="ml-3 hidden font-hand text-[1.2rem] font-semibold text-mauve/80 sm:inline lg:hidden xl:inline">
							arte em madeira
						</span>
					</div>
				</button>

				<nav className="hidden items-center justify-center gap-1.5 lg:flex xl:gap-3">
					{navItems.map((item) => renderNavItem(item))}
				</nav>

				<div className="hidden items-center justify-end gap-3 justify-self-end lg:flex">
					<a
						href={instagramLink}
						target="_blank"
						rel="noreferrer"
						aria-label="Instagram da Decorê Arts"
						className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-ink transition hover:bg-blush/55"
					>
						<InstagramIcon className="h-[22px] w-[22px]" />
					</a>
					<a
						href={whatsappLink}
						target="_blank"
						rel="noreferrer"
						className="group inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-ink px-6 py-3 text-[0.95rem] font-bold text-cream shadow-[3px_3px_0_#e2775c] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#e2775c]"
					>
						Peça sua arte
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</a>
				</div>

				<button
					type="button"
					className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border-[1.5px] border-ink/15 bg-blush/60 text-ink transition hover:bg-blush lg:hidden"
					aria-label="Abrir menu"
					aria-expanded={mobileMenuOpen}
					onClick={() => setMobileMenuOpen((value) => !value)}
				>
					<span className="space-y-1.5">
						<span className="block h-0.5 w-5 rounded-full bg-current" />
						<span className="block h-0.5 w-4 rounded-full bg-current" />
						<span className="block h-0.5 w-5 rounded-full bg-current" />
					</span>
				</button>
			</div>

			{mobileMenuOpen ? (
				<div className="border-t border-dashed border-ink/12 bg-cream px-5 py-5 lg:hidden">
					<nav className="flex flex-col gap-2">
						{navItems.map((item) => renderNavItem(item, true))}
						<div className="mt-3 flex items-center gap-3">
							<a
								href={instagramLink}
								target="_blank"
								rel="noreferrer"
								aria-label="Instagram da Decorê Arts"
								className="inline-flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl border-[1.5px] border-ink/15 text-ink transition hover:bg-blush/55"
							>
								<InstagramIcon className="h-[22px] w-[22px]" />
							</a>
							<a
								href={whatsappLink}
								target="_blank"
								rel="noreferrer"
								className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-ink px-6 py-3.5 text-base font-bold text-cream shadow-[3px_3px_0_#e2775c]"
							>
								Peça sua arte
								<ArrowRight className="h-4 w-4" />
							</a>
						</div>
					</nav>
				</div>
			) : null}
		</header>
	)
}

export type { NavItem }

export default SiteHeader
