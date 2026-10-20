import BrandWordmark from './BrandWordmark'
import { Heart, InstagramIcon, WhatsAppIcon } from './Doodles'
import { type NavItem } from './SiteHeader'

type SiteFooterProps = {
	logo: string
	navItems: NavItem[]
	whatsappLink: string
	instagramLink: string
}

function SiteFooter({ logo, navItems, whatsappLink, instagramLink }: SiteFooterProps) {
	return (
		<footer className="torn-top -mt-6 bg-ink px-5 pb-8 pt-16 text-cream sm:px-8 lg:px-10">
			<div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
				<div className="flex items-center gap-4">
					<img
						src={logo}
						alt="Logo Decorê Arts"
						className="h-14 w-14 rounded-full bg-cream p-1 object-contain"
					/>
					<div>
						<span className="relative inline-block">
							<BrandWordmark className="text-[2.6rem]" />
							<Heart className="absolute -right-4 top-1 h-3.5 w-3.5 text-blush" />
						</span>
						<p className="font-hand text-xl text-cream/70">
							arte em madeira, feita à mão
						</p>
					</div>
				</div>

				<nav className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-bold lg:justify-center">
					{navItems.map((item) =>
						item.href ? (
							<a
								key={item.label}
								href={item.href}
								className="cursor-pointer text-cream/80 transition hover:text-blush"
							>
								{item.label}
							</a>
						) : (
							<button
								key={item.label}
								type="button"
								onClick={item.action}
								className="cursor-pointer text-cream/80 transition hover:text-blush"
							>
								{item.label}
							</button>
						),
					)}
				</nav>

				<div className="flex flex-col gap-4 lg:items-end">
					<div className="flex items-center gap-3">
						<a
							href={instagramLink}
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram @decoreart.s"
							className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-cream/20 transition hover:border-blush hover:text-blush"
						>
							<InstagramIcon className="h-5 w-5" />
						</a>
						<a
							href={whatsappLink}
							target="_blank"
							rel="noreferrer"
							aria-label="WhatsApp (35) 99983-8671"
							className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-cream/20 transition hover:border-blush hover:text-blush"
						>
							<WhatsAppIcon className="h-5 w-5" />
						</a>
					</div>
					<p className="text-sm text-cream/65">
						@decoreart.s · (35) 99983-8671
					</p>
				</div>
			</div>

			<div className="mx-auto mt-10 flex max-w-[1440px] flex-col items-center justify-between gap-3 border-t border-dashed border-cream/15 pt-6 text-sm text-cream/55 sm:flex-row">
				<p>© {new Date().getFullYear()} Decorê Arts. Todos os direitos reservados.</p>
				<a
					href="https://www.instagram.com/rodrigoge_/"
					target="_blank"
					rel="noreferrer"
					className="inline-flex cursor-pointer items-center gap-1.5 transition hover:text-blush"
				>
					Feito com <Heart className="h-3.5 w-3.5 text-blush" /> por Rodrigo Gouveia · @rodrigoge
				</a>
			</div>
		</footer>
	)
}

export default SiteFooter
